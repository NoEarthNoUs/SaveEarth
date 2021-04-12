import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  .story-data {
    border: 1px solid red;
    background-color: ${(props) => props.theme.bgColor};
    padding: 20px 20px;

    > img {
      border: 1px solid blue;
      width: 100%;
    }

    > .story-desc {
      > h4 {
        margin-top: ${(props) => props.theme.marginTop3};
        border: 1px solid blue;
        font-weight: bold;
        font-size: ${(props) => props.theme.subTitle};
      }
      > p {
        margin-top: ${(props) => props.theme.marginTop3};
        border: 1px solid blue;
      }
    }
  }
`;

const StoryData = ({ id, title, img, contents }) => {
  return (
    <Wrapper>
      <Link to={`/story/detail/:${id}`}>
        <div className='story-data'>
          <img src={img} alt={title} title={title}></img>
          <div className='story-desc'>
            <h4>{title}</h4>
            <p>{contents}</p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

export default StoryData;
