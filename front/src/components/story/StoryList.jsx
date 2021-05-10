import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StoryData from './StoryData';
import Pagination from '../common/Pagination';
import axios from 'axios';

const Wrapper = styled.div`
  border: 1px solid blue;
  margin-top: ${(props) => props.theme.margin2};

  > .story-wrap {
    display: grid;
    justify-content: center;
    grid-template-columns: 300px 300px 300px;
    gap: 10px;
  }
`;

const StoryList = () => {
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const SIZE = 6;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/story`)
      .then((response) => {
        setStories(response.data);
      });
  }, []);

  if (!stories) return null;

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    console.log(pageNum);
    const fetchNextStories = () => {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/api/story?page=${
            pageNum - 1
          }&size=${SIZE}`
        )
        .then((response) => setStories(response.data));
    };
    fetchNextStories();
  };

  return (
    <Wrapper>
      <div className='story-wrap'>
        {stories.map((data) => (
          <StoryData
            key={data.id}
            id={data.id}
            title={data.title}
            imgUrl={data.imgUrl}
            contents={data.contents}
            // createDateTime={data.createDateTime}
          />
        ))}
      </div>
      <Pagination
        items={stories}
        size={SIZE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default StoryList;
