import styled from 'styled-components';

export const ListItem = styled.li`
  padding: 5px;

  color: white;

  text-align: center;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Error = styled.p`
  color: red;
`;
