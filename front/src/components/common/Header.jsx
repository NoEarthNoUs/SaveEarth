import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const Wrapper = styled.header`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .right-side {
    display: flex;
    align-items: center;

    > .login > button {
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
          <button>Log In / Join</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Header;
