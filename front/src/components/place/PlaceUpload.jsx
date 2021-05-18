import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import DaumPostcode from 'react-daum-postcode';
import { tagStyle } from '../../styles/mixins';

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
              className='place-name'
              type='text'
              name='address'
              placeholder='업체의 명칭을 입력해주세요.'
            />
            <h4>장소 검색</h4>
            <button className='small-btn' onClick={openAnotherModal}>
              장소 검색하기
            </button>
            <Modal open={anotherModalOpen} close={closeAnotherModal}>
              <DaumPostcode style={postCodeStyle} onComplete={handleAddress} />
            </Modal>
            <span>{isAddress}</span>
          </div>
          <div className='upload-img flex-content'>
            <h4>사진 첨부</h4>
            <input className='small-btn' type='file' accept='image/*'>
              사진 추가하기
            </input>
            <img></img>
          </div>
          <div className='check-category'>
            <form>
              <label className='flex-content'>
                <h4>카테고리 분류</h4>
                <div className='checks'>
                  <input type='radio' name='categories' value='res' />
                  <span>식당</span>
                  <input type='radio' name='categories' value='cafe' />
                  <span>카페</span>
                  <input type='radio' name='categories' value='shop' />
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
                <input type='checkbox' name='일부 메뉴만 채식' value='1' />
                <span>일부 메뉴만 채식</span>
              </div>
            </form>
          </div>
          <div className='place-intro flex-content'>
            <h4>특징</h4>
            <textarea
              rows='5'
              cols='40'
              defaultValue='이 장소를 간단하게 소개시켜주세요!🙌'
            ></textarea>
          </div>
          <div className='upload-btn'>
            <button>등록하기</button>
          </div>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default PlaceUpload;
