import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  > .menu {
    float: left;

    > li {
      float: left;
      font-size: ${(props) => props.theme.HeaderFontSize};
    }
    > li + li {
      margin-left: ${(props) => props.theme.margin1};
    }
  }
`;

const Menu = () => {
  return (
    <Nav>
      <ul className='menu'>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/place'>Place</Link>
        </li>
        <li>
          <Link to='/story'>Story</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Menu;
