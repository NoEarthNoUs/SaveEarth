import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/common/Modal';
import { btnStyle } from '../styles/mixins';

const Wrapper = styled.div`
  margin-left: ${(props) => props.theme.margin1};

  > button {
    ${btnStyle};
    font-size: ${(props) => props.theme.HeaderFontSize};
  }
`;

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <button onClick={openModal}>Log In / Join</button>
      <Modal open={modalOpen} close={closeModal}>
        Test Message
      </Modal>
    </Wrapper>
  );
};

export default Login;
