import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tagStyle } from '../../styles/mixins';
import heartImg from '../../images/heart.png';
import emptyHeartImg from '../../images/empty-heart.png';

const Wrapper = styled.div`
  .place-data {
    border: 1px solid red;
    background-color: ${(props) => props.theme.bgColor};
    padding: 20px 20px;

    > img {
      width: 100%;
    }

    > .place-info {
      margin-top: ${(props) => props.theme.margin3};

      > .place-tag {
        ${tagStyle};
      }

      > .desc-wrap {
        display: flex;
        justify-content: space-between;

        > h4 {
          border: 1px solid blue;
          font-weight: bold;
          font-size: ${(props) => props.theme.subTitle};
        }

        > .like-btn {
          > .place-like {
            width: 30px;
            height: 30px;
          }
        }
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
          <div className='place-info'>
            <span className='place-tag'>{category}</span>
            <div className='desc-wrap'>
              <h4>{name}</h4>
              <div className='like-btn'>
                <img
                  // onClick={toggleLike}
                  alt='하트'
                  className='place-like'
                  src={emptyHeartImg}
                  // HeartClick ? { emptyHeartImg } : { heartImg }
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

export default PlaceData;
