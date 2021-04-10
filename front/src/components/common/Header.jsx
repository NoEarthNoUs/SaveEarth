import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const Button = css`
  background-color: #0abde3;
  border-radius: 20px;
  padding: 8px 20px;
`;

const Wrapper = styled.header`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .right-side {
    display: flex;
    align-items: center;

    > .login {
      ${Button};
      font-size: 18px;
      margin-left: 100px;
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
          Log In / Join
        </Link>
      </div>
    </Wrapper>
  );
};

export default Header;
