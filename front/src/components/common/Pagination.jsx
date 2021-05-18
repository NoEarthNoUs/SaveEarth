import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.margin2};
  border: 1px solid blue;

  .pagination {
    border: 1px solid green;
    text-align: center;
    font-size: ${(props) => props.theme.subTitle};

    > li {
      cursor: pointer;
      display: inline-block;
      width: 35px;
      border: 2px solid transparent;

      &:hover {
        border-radius: 100%;
        border: 2px solid ${(props) => props.theme.mainColor};
      }
    }
    > .active {
      border-radius: 100%;
      border: 2px solid ${(props) => props.theme.mainColor};
    }
    > li + li {
      margin-left: ${(props) => props.theme.margin2};
    }
  }
`;

const Pagination = ({ items, size, currentPage, onPageChange }) => {
  // 아이템 갯수
  const itemsCount = items.length;
  // 몇 페이지가 필요한지 계산
  const pageCount = Math.ceil(itemsCount / size);
  const pageNumber = Array(pageCount)
    .fill(1)
    .map((el, idx) => el + idx);

  if (pageCount === 1) return null;

  return (
    <Wrapper>
      <nav>
        <ul className='pagination'>
          {pageNumber.map((pageNum) => {
            if (pageCount > 0) {
              return (
                <li
                  className={currentPage == pageNum ? 'active' : ''}
                  key={pageNum}
                  onClick={() => {
                    onPageChange(pageNum);
                  }}
                >
                  {pageNum}
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Pagination;
