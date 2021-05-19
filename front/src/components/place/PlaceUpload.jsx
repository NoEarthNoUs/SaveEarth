import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import DaumPostcode from 'react-daum-postcode';
import { tagStyle } from '../../styles/mixins';
import axios from 'axios';

const Wrapper = styled.div`
  text-align: center;

  > button {
    margin-top: ${(props) => props.theme.margin2};
  }
  .upload-place {
    text-align: left;
    background-color: white;
    padding: 30px;
    border-radius: 20px;

    .flex-content {
      border: 1px solid blue;
      h4 {
        font-weight: bold;
      }
      span + input {
        margin-left: ${(props) => props.theme.margin2};
      }
    }
    .search-place {
      input {
        width: 100%;
        font-size: 16px;
      }
    }
    .small-btn {
      ${tagStyle};
    }
    .upload-btn {
      text-align: center;
      margin-top: ${(props) => props.theme.margin3};
    }
  }
`;

const PlaceUpload = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [anotherModalOpen, setAnotherModalOpen] = useState(false);
  const [isAddress, setIsAddress] = useState('');
  const [img, setImage] = useState(null);

  const onClickHandler = (e) => {
    e.preventDefault();
    // 카테고리 라디오 버튼 value 구하기
    const categories = document.getElementsByName('categories');
    let categoryValue;
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].checked) {
        categoryValue = categories[i].value;
      }
    }

    // 카테고리 상세 체크여부 value 부여하기
    const categoryDetail = document.getElementById('vegan-check');
    let veganCheck;
    if (categoryDetail.checked) {
      veganCheck = 1;
    } else {
      veganCheck = 0;
    }

    // 폼데이터 생성
    const formData = new FormData();
    formData.append('name', document.getElementById('place-name').value);
    formData.append(
      'address',
      document.getElementById('place-address').innerHTML
    );
    formData.append('category', categoryValue);
    formData.append('vegan', veganCheck);
    formData.append(
      'contents',
      document.getElementById('place-contents').value
    );

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/place`,
      formData,
      config
    );
    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/place?img=${img}`, img);
  };

  const fileChangedHandler = (e) => {
    const files = e.target.files;
    console.log('files', files);
    setImage(files);
  };
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openAnotherModal = (e) => {
    e.preventDefault();
    setAnotherModalOpen(true);
  };

  const closeAnotherModal = () => {
    setAnotherModalOpen(false);
  };

  const postCodeStyle = {
    width: '80%',
    height: '461px',
  };

  const handleAddress = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? `(${extraAddress})` : '';
    }
    setIsAddress(fullAddress);
    setAnotherModalOpen(false);
  };

  return (
    <Wrapper>
      <button onClick={openModal}>등록하러 가기</button>
      <Modal open={modalOpen} close={closeModal}>
        <div className='upload-place'>
          <div className='search-place flex-content'>
            <h4>장소 이름</h4>
            <input
              id='place-name'
              className='place-name'
              type='text'
              name='name'
              placeholder='업체의 명칭을 입력해주세요. 🙌'
            />
            <h4>장소 검색</h4>
            <button className='small-btn' onClick={openAnotherModal}>
              장소 검색하기
            </button>
            <Modal open={anotherModalOpen} close={closeAnotherModal}>
              <DaumPostcode style={postCodeStyle} onComplete={handleAddress} />
            </Modal>
            <span id='place-address'>{isAddress}</span>
          </div>
          <div className='upload-img flex-content'>
            <h4>사진 첨부</h4>
            <input type='file' multiple onChange={fileChangedHandler} />
          </div>
          <div className='check-category'>
            <form id='place-ctgrs'>
              <label className='flex-content'>
                <h4>카테고리 분류</h4>
                <div className='checks'>
                  <input id='res' type='radio' name='categories' value='res' />
                  <span>식당</span>
                  <input
                    id='cafe'
                    type='radio'
                    name='categories'
                    value='cafe'
                  />
                  <span>카페</span>
                  <input
                    id='shop'
                    type='radio'
                    name='categories'
                    value='shop'
                  />
                  <span>소품샵</span>
                </div>
              </label>
            </form>
          </div>
          <div className='category-detail'>
            <form className='flex-content'>
              <label>
                <h4>카테고리 상세</h4>
              </label>
              <div className='checks'>
                <input
                  id='vegan-check'
                  type='checkbox'
                  name='일부 메뉴만 채식'
                />
                <span>일부 메뉴만 채식</span>
              </div>
            </form>
          </div>
          <div className='place-intro flex-content'>
            <h4>특징</h4>
            <textarea
              id='place-contents'
              rows='5'
              cols='40'
              placeholder='이 장소를 간단하게 소개시켜주세요! 🙌'
            ></textarea>
          </div>
          <div className='upload-btn'>
            <button onClick={onClickHandler}>등록하기</button>
          </div>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default PlaceUpload;
