import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import GoogleButton from './GoogleButton';
import { btnStyle } from '../../styles/mixins';
import saveEarthLogo from '../../images/logo192.png';

const Wrapper = styled.div`
  margin-left: ${(props) => props.theme.margin1};

  > button {
    ${btnStyle};
    font-size: ${(props) => props.theme.HeaderFontSize};
  }

  .login-content {
    > .img-wrap {
      display: flex;
      justify-content: center;
      align-items: center;

      .logo-img {
        width: 130px;
        height: 130px;
        margin-bottom: ${(props) => props.theme.margin2};
      }
    }
    .login-title {
      text-align: center;
      font-size: ${(props) => props.theme.subTitle};
      font-weight: bold;
      margin-bottom: ${(props) => props.theme.margin2};
    }
  }
`;

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const user_id = localStorage.getItem('USER_TOKEN');
  const [userId, setUserId] = useState(user_id);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    const user_id = localStorage.getItem('USER_TOKEN');
    setUserId(user_id);
  };

  const signOut = () => {
    localStorage.removeItem('USER_TOKEN');
    const user_id = localStorage.getItem('USER_TOKEN');
    setUserId(user_id);
  };

  return (
    <Wrapper>
      {!userId ? (
        <button onClick={openModal}>Sign In</button>
      ) : (
        <button onClick={signOut}>Sign Out</button>
      )}
      <Modal open={modalOpen} close={closeModal}>
        <div className='login-content'>
          <div className='img-wrap'>
            <img className='logo-img' src={saveEarthLogo} alt='세이브어스' />
          </div>
          <h4 className='login-title'>로그인</h4>
          <GoogleButton close={closeModal} />
        </div>
      </Modal>
    </Wrapper>
  );
};

export default Login;
