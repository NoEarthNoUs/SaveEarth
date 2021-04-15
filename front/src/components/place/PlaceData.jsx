import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { btnStyle } from '../../styles/mixins';

const Wrapper = styled.div`
  .place-data {
    border: 1px solid red;
    background-color: ${(props) => props.theme.bgColor};
    padding: 20px 20px;

    > img {
      width: 100%;
    }

    > .place-desc {
      margin-top: ${(props) => props.theme.margin3};
      > .place-tag {
        ${btnStyle};
        font-size: 12px;
        padding: 4px 10px;
      }
      > h4 {
        border: 1px solid blue;
        font-weight: bold;
        font-size: ${(props) => props.theme.subTitle};
      }
    }
  }
`;

const PlaceData = ({ id, name, address, img, category, contents }) => {
  return (
    <Wrapper>
      <Link
        to={{
          pathname: `/place/:${id}`,
          state: {
            id,
            name,
            address,
            img,
            category,
            contents,
          },
        }}
      >
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
