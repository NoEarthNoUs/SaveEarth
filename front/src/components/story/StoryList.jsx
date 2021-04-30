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
  const [stories, setStories] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const STORYPERPAGE = 6;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchStories = async () => {
      setStories(null);
      const res = await axios.get(
        `${
          process.env.REACT_APP_SERVER_URL
        }/api/story?limit=${STORYPERPAGE}&offset=${currentPage * STORYPERPAGE}`
      );
      setStories(res.data);
    };
    fetchStories();
  }, []);

  if (!stories) return null;

  return (
    <Wrapper>
      <div className='story-wrap'>
        {stories.map((data) => (
          <StoryData
            key={data.id}
            id={data.id}
            title={data.title}
            img={data.imgUrl}
            contents={data.contents}
            // createDateTime={data.createDateTime}
          />
        ))}
      </div>
      <Pagination />
    </Wrapper>
  );
};

export default StoryList;
