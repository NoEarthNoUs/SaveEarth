import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../components/common';

const Wrapper = styled.div`
  border: 1px solid red;

  > .place-inner {
    border: 1px solid blue;
    margin-top: ${(props) => props.theme.margin1};
    display: flex;
    justify-content: center;

    > .place-desc {
      /* border: 1px solid green; */
      margin-left: 50px;

      > .place-category {
        /* border: 1px solid blue; */
      }
      > .place-name {
        /* border: 1px solid green; */
        font-weight: bold;
        font-size: ${(props) => props.theme.detailTitle};

        &:after {
          content: '';
          display: block;
          height: 1px;
          width: 65px;
          background: ${(props) => props.theme.subColor};
          margin-top: ${(props) => props.theme.margin3};
        }
      }
      > .place-info-box {
        /* border: 1px solid yellow; */
        margin-top: ${(props) => props.theme.margin3};
      }
      > .map-thumbnail {
        /* border: 1px solid pink; */
        margin-top: ${(props) => props.theme.margin3};
      }
      strong {
        font-weight: bold;
      }
    }
  }
`;

const PlaceDetail = ({ location }) => {
  const place = location.state;
  return (
    <Wrapper>
      <Header />
      <div className='place-inner'>
        <img src={place.img} alt={place.name} title={place.name}></img>
        <div className='place-desc'>
          <span class='place-category'>{place.category}</span>
          <h1 class='place-name'>{place.name}</h1>
          <div className='place-info-box'>
            <strong className='place-info'>특징</strong>
            <p>{place.contents}</p>
            <strong className='place-info'>주소</strong>
            <p>{place.address}</p>
          </div>
          <div className='map-thumbnail'>카카오 맵 미리보기</div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default PlaceDetail;
