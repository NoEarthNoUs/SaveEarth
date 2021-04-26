import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlaceData from './PlaceData';

const Wrapper = styled.div`
  > .error-message {
    text-align: center;
  }

  > .place-list {
    border: 1px solid blue;
    margin-top: ${(props) => props.theme.margin2};
    display: grid;
    justify-content: center;
    grid-template-columns: 300px 300px 300px;
    gap: 10px;
  }
`;

const PlaceList = (props) => {
  return (
    <Wrapper>
      <div className='place-list'>
        {props.places.map((data) => (
          <PlaceData
            key={data.id}
            id={data.id}
            name={data.name}
            address={data.address}
            img={data.imgUrl}
            category={
              data.category === 'res'
                ? '식당'
                : data.category === 'cafe'
                ? '카페'
                : '소품샵'
            }
            // contents={data.contents}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default PlaceList;
