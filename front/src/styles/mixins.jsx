import { css } from 'styled-components';

export const btnStyle = css`
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 20px;
  padding: 8px 20px;
`;

export const tagStyle = css`
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 20px;
  font-size: 12px;
  padding: 4px 10px;
`;
export const subPageTitle = css`
  margin-top: ${(props) => props.theme.margin2};
  font-size: ${(props) => props.theme.pageTitle};
  font-weight: bold;
`;
