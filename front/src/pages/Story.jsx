import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../components/common';
import StoryList from '../components/story/StoryList';
import { subPageTitle } from '../styles/mixins';

const Wrapper = styled.div`
  border: 1px solid red;

  > .title {
    text-align: center;

    > h1 {
      ${subPageTitle};
    }
  }
`;
const Story = () => {
  return (
    <Wrapper>
      <Header />
      <div className='title'>
        <h1>지구를 지키는 이야기</h1>
      </div>
      <StoryList />
      <Footer />
    </Wrapper>
  );
};

export default Story;
