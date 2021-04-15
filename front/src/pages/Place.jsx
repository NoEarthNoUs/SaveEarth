import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../components/common';
import PlaceList from '../components/place/PlaceList';
import { subPageTitle } from '../styles/mixins';

const Wrapper = styled.div`
  border: 1px solid red;

  > .title {
    text-align: center;

    > h1 {
      ${subPageTitle};
    }
  }
`;

const Place = () => {
  return (
    <Wrapper>
      <Header />
      <div className='title'>
        <h1>에코 플레이스 둘러보기</h1>
      </div>
      <PlaceList />
      <Footer />
    </Wrapper>
  );
};

export default Place;
