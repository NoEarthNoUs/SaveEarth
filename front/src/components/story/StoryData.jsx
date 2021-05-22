import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const Wrapper = styled.div`
  .story-data {
    background-color: ${(props) => props.theme.bgColor};
    padding: 20px 20px;

    > img {
      width: 100%;
      height: 160px;
    }

    > .story-desc {
      > h4 {
        margin-top: ${(props) => props.theme.margin3};
        font-weight: bold;
        font-size: ${(props) => props.theme.subTitle};
      }
      > p {
        margin-top: ${(props) => props.theme.margin3};
      }
    }
  }
`;

const StoryData = ({ id, title, imgUrl, contents, createDateTime }) => {
  // 스토리 콘텐츠 간략화
  const innerContents = contents.slice(0, 62);
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
            imgUrl,
            contents,
            createDateTime,
          },
        }}
      >
        <div className='story-data'>
          <img src={imgUrl} alt={title} title={title}></img>
          <div className='story-desc'>
            <h4>{title.slice(0, 25)}...</h4>
            <p>{newContents}...</p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

export default StoryData;
