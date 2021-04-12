import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  .place-data {
    border: 1px solid red;
    background-color: ${(props) => props.theme.bgColor};
    padding: 20px 20px;

    > img {
      border: 1px solid blue;
      width: 100%;
    }

    > .place-desc {
      > .place-tag {
        margin-top: ${(props) => props.theme.marginTop3};
        border: 1px solid blue;
        display: block;
      }
      > h4 {
        margin-top: ${(props) => props.theme.marginTop3};
        border: 1px solid blue;
        font-weight: bold;
        font-size: ${(props) => props.theme.subTitle};
      }
    }
  }
`;

const PlaceData = ({ id, name, img, category }) => {
  return (
    <Wrapper>
      <Link to={`/place/detail/:${id}`}>
        <div className='place-data'>
          <img src={img} alt={name} title={name}></img>
          <div className='place-desc'>
            <span className='place-tag'>{category}</span>
            <h4>{name}</h4>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

export default PlaceData;
