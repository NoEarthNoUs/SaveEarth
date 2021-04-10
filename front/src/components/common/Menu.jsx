import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  > .menu {
    float: left;

    > li {
      float: left;
      font-size: 18px;
    }
    > li + li {
      margin-left: 100px;
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
