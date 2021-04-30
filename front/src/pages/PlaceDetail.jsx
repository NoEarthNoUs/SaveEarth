import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Header, Footer } from '../components/common';
import Comment from '../components/comment/Comment';
import { tagStyle } from '../styles/mixins';
import axios from 'axios';

const Map = css`
  border: 1px solid red;
  margin-top: ${(props) => props.theme.margin3};
  width: 100%;
  height: 250px;
`;

const Wrapper = styled.div`
  border: 1px solid red;

  strong {
    font-weight: bold;
  }

  .place-detail-wrap {
    padding: 0 10%;

    .place-inner {
      border: 1px solid blue;
      margin-top: ${(props) => props.theme.margin1};
      display: flex;
      justify-content: space-between;

      img {
        width: 70%;
      }

      > .place-desc {
        margin-left: ${(props) => props.theme.margin2};
        border: 1px solid green;

        > .place-category {
          ${tagStyle}
        }
        > .place-name {
          font-weight: bold;
          font-size: 30px;

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

        #map-overview {
          ${Map}
        }
      }
    }

    .comment-inner {
      border: 1px solid red;
      margin-top: ${(props) => props.theme.margin2};
    }
  }
`;

const { kakao } = window;

const PlaceDetail = ({ location }) => {
  const place = location.state;
  const [detailInfo, setDetailInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/place/${place.id}`)
      .then((response) => {
        setDetailInfo(response.data);
      });
  }, []);

  const MapContainer = () => {
    useEffect(() => {
      // 지도를 표시할 div
      const container = document.getElementById('map-overview');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        lever: 3,
      };
      // 지도 생성
      const map = new kakao.maps.Map(container, options);
      // 주소-좌표 변환 객체 생성
      const geocoder = new kakao.maps.services.Geocoder();

      // 주소로 좌표를 검색
      geocoder.addressSearch(detailInfo.address, function (result, status) {
        // 검색이 정상적으로 완료되면
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          // 결과값으로 받은 위치를 마커에 표시함
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          map.setCenter(coords);
        }
      });
    }, []);

    return <div id='map-overview'></div>;
  };

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
              <p>{detailInfo.contents}</p>
              <strong className='place-info'>주소</strong>
              <p>{detailInfo.address}</p>
            </div>
            <MapContainer />
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
