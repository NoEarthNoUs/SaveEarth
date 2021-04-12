import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Wrapper = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      padding: 50px 0;

      > h1 {
        font-size: ${(props) => props.theme.pageTitle};
        font-weight: bold;
      }
      > p {
        font-size: 20px;
        margin-top: ${(props) => props.theme.marginTop2};
      }
    }
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Header />
      <div>
        <div>
          <h1>About Save Earth</h1>
          <p>
            지금처럼 살아간다면 우리에게 남은 시간은 고작 26년.
            <br />
            <br />
            극단적 폭염에 노출되는 인구 4.2억 명.
            <br />
            기후 변화로 물과 식량 부족을 겪는 취약계층 4배 증가.
            <br />
            어획량 감소, 식물과 척추동물 멸종 위험 2배 증가.
            <br />
            <br />
            우리가 살아갈 지구의 미래를 위해 친환경은 더 이상 선택의 문제가
            아닙니다.
            <br />
            Save Earth는 지구를 지키기 위해, 친환경에 관심이 있는 모든 사람에게
            <br />
            다양한 정보를 제공한다는 일념으로 시작하게 되었습니다.
            <br />
            나의 작은 실천이 지구 환경을 지킵니다!
            <br />
            <br />
            Save Earth 드림.
          </p>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default About;
