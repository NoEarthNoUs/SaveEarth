import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';

const Wrapper = styled.div`
  text-align: center;

  > button {
    margin-top: ${(props) => props.theme.margin2};
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
        Test Message
      </Modal>
    </Wrapper>
  );
};

export default PlaceUpload;
