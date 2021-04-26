import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlaceData from './PlaceData';
import axios from 'axios';

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

const PlaceList = () => {
  const [places, setPlaces] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setPlaces(null);
        const response = await axios.get(
          'http://ec2-3-37-3-101.ap-northeast-2.compute.amazonaws.com:8081/api/place'
        );
        setPlaces(response.data);
      } catch (e) {
        setError(e);
      }
    };

    fetchPlaces();
  }, []);

  if (error)
    return (
      <Wrapper>
        <div className='error-messege'>
          로딩하는 과정에서 에러가 발생했습니다😭
        </div>
      </Wrapper>
    );
  if (!places) return null;

  return (
    <Wrapper>
      <div className='place-list'>
        {places.map((data) => (
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
