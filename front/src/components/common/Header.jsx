import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
import styled, { css } from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const Button = css`
  background-color: #0abde3;
  border-radius: 20px;
  padding: 8px 20px;
`;

=======
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

>>>>>>> Stashed changes
const Wrapper = styled.header`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .right-side {
    display: flex;
    align-items: center;

<<<<<<< Updated upstream
    > .login {
      ${Button};
=======
    > .login > button {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          Log In / Join
=======
          <button>Log In / Join</button>
>>>>>>> Stashed changes
        </Link>
      </div>
    </Wrapper>
  );
};

export default Header;
