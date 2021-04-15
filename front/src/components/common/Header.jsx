import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo, Menu } from './';
import { btnStyle } from '../../styles/mixins';

const Wrapper = styled.header`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .right-side {
    display: flex;
    align-items: center;

    > .login {
      margin-left: ${(props) => props.theme.margin1};

      > button {
        ${btnStyle};
        font-size: ${(props) => props.theme.HeaderFontSize};
      }
    }
  }
`;
const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <div className='right-side'>
        <Menu />
        <Link to='./login' className='login'>
          <button>Log In / Join</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Header;
