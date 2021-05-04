import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const Wrapper = styled.div`
  .story-data {
    border: 1px solid red;
    background-color: ${(props) => props.theme.bgColor};
    padding: 20px 20px;

    > img {
      width: 100%;
    }

    > .story-desc {
      > h4 {
        margin-top: ${(props) => props.theme.margin3};
        border: 1px solid blue;
        font-weight: bold;
        font-size: ${(props) => props.theme.subTitle};
      }
      > p {
        margin-top: ${(props) => props.theme.margin3};
        border: 1px solid blue;
      }
    }
  }
`;

const StoryData = ({ id, title, img, contents, createDateTime }) => {
  // 스토리 콘텐츠 간략화
  const innerContents = contents.slice(0, 55);
  // 태그 제거
  const newContents = innerContents.replace(/(<([^>]+)>)/gi, '');

  return (
    <Wrapper>
      <Link
        to={{
          pathname: `/story/:${id}`,
          state: {
            id,
            title,
            img,
            contents,
            createDateTime,
          },
        }}
      >
        <div className='story-data'>
          <img src={img} alt={title} title={title}></img>
          <div className='story-desc'>
            <h4>{title}</h4>
            <p>{newContents}...</p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

export default StoryData;
