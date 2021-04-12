import React from 'react';
import styled from 'styled-components';
import StoryData from './StoryData';

const Wrapper = styled.div`
  border: 1px solid blue;
  margin-top: ${(props) => props.theme.marginTop2};
  display: grid;
  justify-content: center;
  grid-template-columns: 300px 300px 300px;
  gap: 10px;
`;

const StoryList = () => {
  const storyData = [
    {
      id: 1,
      title: '스토리 제목',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      contents: '스토리 내용은 가나다라마바사, 아자차카타파하입니다.',
      createDateTime: '2019/8/1',
    },
    {
      id: 2,
      title: '스토리 제목',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      contents: '스토리 내용은 가나다라마바사, 아자차카타파하입니다.',
      createDateTime: '2019/8/1',
    },
    {
      id: 3,
      title: '스토리 제목',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      contents: '스토리 내용은 가나다라마바사, 아자차카타파하입니다.',
      createDateTime: '2019/8/1',
    },
    {
      id: 4,
      title: '스토리 제목',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      contents: '스토리 내용은 가나다라마바사, 아자차카타파하입니다.',
      createDateTime: '2019/8/1',
    },
    {
      id: 5,
      title: '스토리 제목',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      contents: '스토리 내용은 가나다라마바사, 아자차카타파하입니다.',
      createDateTime: '2019/8/1',
    },
    {
      id: 6,
      title: '스토리 제목',
      imgUrl:
        'http://www.shinailbo.co.kr/news/photo/201911/1221389_473186_3253.jpg',
      contents: '스토리 내용은 가나다라마바사, 아자차카타파하입니다.',
      createDateTime: '2019/8/1',
    },
  ];
  return (
    <Wrapper>
      {storyData.map((data) => (
        <StoryData
          key={data.id}
          id={data.id}
          title={data.title}
          img={data.imgUrl}
          contents={data.contents}
        />
      ))}
    </Wrapper>
  );
};

export default StoryList;
