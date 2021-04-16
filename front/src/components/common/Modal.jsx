import React from 'react';
import styled from 'styled-components';
import { btnStyle } from '../../styles/mixins';

const Wrapper = styled.div`
  > .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);

    > section {
      width: 450px;
      height: 600px;
      margin: 0 auto;
      border-radius: 30px;
      background-color: white;
      position: relative;

      > .close {
        ${btnStyle}
        position: absolute;
        top: 20px;
        right: 20px;
      }

      > .modal-content {
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  > .open-modal {
    display: flex;
    align-items: center;
  }
`;

const Modal = (props) => {
  const { open, close } = props;

  return (
    <Wrapper>
      <div className={open ? 'open-modal modal' : 'modal'}>
        {open ? (
          <section>
            <button className='close' onClick={close}>
              닫기
            </button>
            <div className='modal-content'>{props.children}</div>
          </section>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default Modal;
