import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';

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
        margin-bottom: ${(props) => props.theme.margin3};
      }
      span + input {
        margin-left: ${(props) => props.theme.margin2};
      }
    }
    .upload-btn {
      text-align: center;
      margin-top: ${(props) => props.theme.margin3};
    }
  }
`;

const PlaceUpload = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <button onClick={openModal}>등록하러 가기</button>
      <Modal open={modalOpen} close={closeModal}>
        <form className='upload-place'>
          <div className='search-place flex-content'>
            <h4>장소 검색</h4>
            <button>장소 검색하기</button>
          </div>
          <div className='upload-img flex-content'>
            <h4>사진 첨부</h4>
            <button>사진 추가하기</button>
            <img></img>
          </div>
          <div className='check-category'>
            <form>
              <label className='flex-content'>
                <h4>카테고리 분류</h4>
                <div className='checks'>
                  <input type='radio' name='categories' value='restaurant' />
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
        </form>
      </Modal>
    </Wrapper>
  );
};

export default PlaceUpload;
