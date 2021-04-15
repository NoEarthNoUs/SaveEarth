import React from 'react';
import styled from 'styled-components';
import PlaceData from './PlaceData';

const Wrapper = styled.div`
  border: 1px solid blue;
  margin-top: ${(props) => props.theme.margin2};
  display: grid;
  justify-content: center;
  grid-template-columns: 300px 300px 300px;
  gap: 10px;
`;

const PlaceList = () => {
  const placeData = [
    {
      id: 1,
      name: '비건이즈',
      address: '서울시 강남구 뭐뭐동 665-1',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      category: '식당',
      contents: '이 장소는 비건들이 자주 가는 식당입니다.',
    },
    {
      id: 2,
      name: '비건이즈',
      address: '서울시 강남구 뭐뭐동 665-1',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      category: '식당',
      contents: '이 장소는 비건들이 자주 가는 식당입니다.',
    },
    {
      id: 3,
      name: '비건이즈',
      address: '서울시 강남구 뭐뭐동 665-1',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      category: '식당',
      contents: '이 장소는 비건들이 자주 가는 식당입니다.',
    },
    {
      id: 4,
      name: '비건이즈',
      address: '서울시 강남구 뭐뭐동 665-1',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      category: '식당',
      contents: '이 장소는 비건들이 자주 가는 식당입니다.',
    },
    {
      id: 5,
      name: '비건이즈',
      address: '서울시 강남구 뭐뭐동 665-1',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      category: '식당',
      contents: '이 장소는 비건들이 자주 가는 식당입니다.',
    },
    {
      id: 6,
      name: '비건이즈',
      address: '서울시 강남구 뭐뭐동 665-1',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      category: '식당',
      contents: '이 장소는 비건들이 자주 가는 식당입니다.',
    },
  ];
  return (
    <Wrapper>
      {placeData.map((data) => (
        <PlaceData
          key={data.id}
          id={data.id}
          name={data.name}
          address={data.address}
          img={data.imgUrl}
          category={data.category}
          contents={data.contents}
        />
      ))}
    </Wrapper>
  );
};

export default PlaceList;
