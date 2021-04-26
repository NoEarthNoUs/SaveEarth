import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PlaceList, PlaceUpload } from '../place';
import CategoryNav from './CategoryNav';
import { btnStyle } from '../../styles/mixins';

const Wrapper = styled.div`
  border: 1px solid green;

  > .intro {
    border: 1px solid blue;
    margin-top: ${(props) => props.theme.margin1};

    > h1 {
      border: 1px solid red;
      font-size: 100px;
      font-weight: bold;
      text-align: center;
    }
    > .hero-title {
      border: 1px solid indigo;
      margin-top: ${(props) => props.theme.margin2};
      font-size: 30px;
      text-align: center;
    }
  }

  > .place-overview {
    > .more-btn {
      text-align: center;
      margin-top: ${(props) => props.theme.margin2};
    }
  }

  > .place-share {
    border: 1px solid indigo;
    margin-top: ${(props) => props.theme.margin1};

    > h3 {
      font-size: 40px;
      font-weight: bold;
      text-align: center;
    }
  }

  button {
    ${btnStyle};
  }
`;
const Main = () => {
  return (
    <Wrapper>
      <div className='intro'>
        <h1>SAVE EARTH</h1>
        <h2 className='hero-title'>
          지구에게 남은 시간 26년 <br />
          친환경은 더 이상 선택이 아니다
        </h2>
      </div>
      <div className='place-overview'>
        <CategoryNav />
        {/* <PlaceList /> */}
        <div className='more-btn'>
          <Link to='/place'>
            <button>더 알아보기</button>
          </Link>
        </div>
      </div>
      <div className='place-share'>
        <h3>
          나만 아는 에코 플레이스가 있다면?
          <br />
          Save Earth에도 공유해주세요! 🙌
        </h3>
        <PlaceUpload />
      </div>
    </Wrapper>
  );
};

export default Main;
