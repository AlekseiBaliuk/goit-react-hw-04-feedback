import styled from '@emotion/styled';

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

export const FeedbackButton = styled.button`
  background-color: #ccc;
  padding: 5px 10px;
  width: 100px;
  height: 25px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 250ms linear;

  :hover {
    background-color: coral;
  }
`;
