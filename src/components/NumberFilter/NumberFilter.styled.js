import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 5px;

  border: none;
  border-radius: 5px 5px 5px 5px;

  background-color: white;

  font-size: 16px;

  :hover,
  :focus {
    outline: none;
  }
`;
