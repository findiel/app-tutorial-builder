import styled from 'styled-components';

interface StyledTodoProps {
  isDone: boolean;
}

const StyledTodo = styled.div<StyledTodoProps>`
  p {
    font-size: 18px;
    font-style: ${({ isDone }) => (isDone ? 'italic' : 'normal')};
    text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
  }
`;

export default StyledTodo;
