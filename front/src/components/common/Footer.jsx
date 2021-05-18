import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => props.theme.margin1};

  > .left-side {
    display: flex;
    align-items: center;

    > .copyright {
      display: block;
      margin-left: ${(props) => props.theme.margin3};
    }
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <div className='left-side'>
        <Logo />
        <span className='copyright'>
          Copyright ⓒ 2021. Save Earth. <br />본 사이트는 사업적 용도의 사이트가
          아닙니다.
        </span>
      </div>
      <Menu />
    </Wrapper>
  );
};

export default Footer;
