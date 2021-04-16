import React from 'react';
import styled from 'styled-components';
import { Logo, Menu } from './';
import Login from '../../pages/Login';

const Wrapper = styled.header`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .right-side {
    display: flex;
    align-items: center;
  }
`;
const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <div className='right-side'>
        <Menu />
        <Login />
      </div>
    </Wrapper>
  );
};

export default Header;
