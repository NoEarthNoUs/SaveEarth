import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { btnStyle } from '../../styles/mixins';

const Nav = styled.nav`
  margin-top: ${(props) => props.theme.margin1};
  border: 1px solid red;
  display: flex;
  justify-content: center;

  .tags {
    float: left;
    .categories {
      ${btnStyle};

      &:hover {
        color: white;
      }
    }
  }

  .tags + .tags {
    margin-left: ${(props) => props.theme.margin3};
  }

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const CategoryNav = () => {
  return (
    <Nav>
      <ul>
        <Link to='/' className='tags'>
          <li>
            <span className='categories'>전체</span>
          </li>
        </Link>
        <Link to='/' className='tags'>
          <li>
            <span className='categories'>식당</span>
          </li>
        </Link>
        <Link to='/' className='tags'>
          <li>
            <span className='categories'>카페</span>
          </li>
        </Link>
        <Link to='/' className='tags'>
          <li>
            <span className='categories'>소품샵</span>
          </li>
        </Link>
      </ul>
    </Nav>
  );
};

export default CategoryNav;
