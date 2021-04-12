import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import StoryList from '../components/story/StoryList';

const Wrapper = styled.div`
  border: 1px solid red;

  > .title {
    text-align: center;

    > h1 {
      margin-top: ${(props) => props.theme.marginTop2};
      font-size: ${(props) => props.theme.pageTitle};
      font-weight: bold;
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
