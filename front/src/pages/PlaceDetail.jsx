import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../components/common';
import Comment from '../components/comment/Comment';
import { tagStyle } from '../styles/mixins';

const Wrapper = styled.div`
  border: 1px solid red;

  strong {
    font-weight: bold;
  }

  .place-detail-wrap {
    padding: 0 250px;

    .place-inner {
      border: 1px solid blue;
      margin-top: ${(props) => props.theme.margin1};
      display: flex;
      justify-content: space-between;

      > .place-desc {
        border: 1px solid green;

        > .place-category {
          ${tagStyle}
        }
        > .place-name {
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
          margin-top: ${(props) => props.theme.margin3};
        }
        > .map-thumbnail {
          margin-top: ${(props) => props.theme.margin3};
        }
      }
    }

    .comment-inner {
      border: 1px solid red;
      margin-top: ${(props) => props.theme.margin2};
    }
  }
`;

const PlaceDetail = ({ location }) => {
  const place = location.state;
  return (
    <Wrapper>
      <Header />
      <div className='place-detail-wrap'>
        <div className='place-inner'>
          <img src={place.img} alt={place.name} title={place.name}></img>
          <div className='place-desc'>
            <span className='place-category'>{place.category}</span>
            <h1 className='place-name'>{place.name}</h1>
            <div className='place-info-box'>
              <strong className='place-info'>특징</strong>
              <p>{place.contents}</p>
              <strong className='place-info'>주소</strong>
              <p>{place.address}</p>
            </div>
            <div className='map-thumbnail'>카카오 맵 미리보기</div>
          </div>
        </div>
        <div className='comment-inner'>
          <strong>장소 한줄평 남기기</strong>
          <Comment />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default PlaceDetail;
