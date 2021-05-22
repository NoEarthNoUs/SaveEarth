import React from 'react';
import styled from 'styled-components';
import { btnStyle } from '../../styles/mixins';

const Nav = styled.nav`
  margin-top: ${(props) => props.theme.margin1};
  display: flex;
  justify-content: center;

  .categories {
    cursor: pointer;
    float: left;
    ${btnStyle};

    &:hover {
      color: white;
    }
  }

  li + li {
    margin-left: ${(props) => props.theme.margin3};
  }

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const CategoryNav = (props) => {
  const handleChange = (e) => {
    if (e.target.innerHTML === '식당') {
      return props.onToggle('res');
    }
    if (e.target.innerHTML === '카페') {
      return props.onToggle('cafe');
    }
    if (e.target.innerHTML === '소품샵') {
      return props.onToggle('shop');
    }
    if (e.target.innerHTML === '전체') {
      return props.onToggle('all');
    }
  };

  return (
    <Nav>
      <ul onClick={handleChange}>
        <li className='categories'>전체</li>
        <li className='categories'>식당</li>
        <li className='categories'>카페</li>
        <li className='categories'>소품샵</li>
      </ul>
    </Nav>
  );
};

export default CategoryNav;
