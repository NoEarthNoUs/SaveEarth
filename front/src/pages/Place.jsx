import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../components/common';
import { PlaceList, PlaceSearch } from '../components/place';
import { subPageTitle } from '../styles/mixins';
import axios from 'axios';

// 플레이스 페이지 css
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
  const [places, setPlaces] = useState([]);
  const [ss, setSs] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/place`)
      .then((response) => {
        setPlaces(response.data);
      });
  }, []);

  // 이벤트 등록
  const handleSearchInput = (ss) => {
    setSs(ss);
  };

  return (
    <Wrapper>
      <Header />
      <div className='title'>
        <h1>에코 플레이스 둘러보기</h1>
      </div>
      <PlaceSearch ss={ss} onSearchInput={handleSearchInput} />
      <PlaceList places={places} ss={ss} />
      <Footer />
    </Wrapper>
  );
};

export default Place;
