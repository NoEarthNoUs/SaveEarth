import React from 'react';
import styled from 'styled-components';
import { btnStyle } from '../../styles/mixins';
import searchIcon from '../../images/search-icon.png';

const Wrapper = styled.div`
  border: 1px solid red;
  margin-top: ${(props) => props.theme.margin2};
  text-align: center;

  > input {
    width: 500px;
    height: 35px;
    font-size: ${(props) => props.theme.subTitle};
    vertical-align: top;
    background-color: ${(props) => props.theme.bgColor};
    background-image: url(${searchIcon});
    background-position: 5px center;
    background-size: 25px 25px;
    background-repeat: no-repeat;
    padding-left: 40px;
  }

  > button {
    ${btnStyle};
    margin-left: ${(props) => props.theme.margin3};
  }
`;

const PlaceSearch = (props) => {
  const handleChange = (e) => {
    props.onSearchInput(e.target.value);
  };

  return (
    <Wrapper>
      <input
        type='text'
        placeholder='가고 싶은 에코 플레이스를 검색해보세요!'
        onChange={handleChange}
        value={props.ss}
      ></input>
      <button>검색</button>
    </Wrapper>
  );
};

export default PlaceSearch;
