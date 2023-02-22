import React from 'react';
import { Todo } from '../../App';
import CardWrapper from '../styles/CardWrapper.styled';
import RemoveButton from '../styles/RemoveButton.styled';
import SetDoneButton from '../styles/SetDoneButton.styled';
import StyledTodo from '../styles/Todo.styled';

interface TodoListProps {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
}

const TodoList = ({ todos, onRemoveTodo, onToggleTodo }: TodoListProps): JSX.Element => {
  return (
    <>
      {todos.map((todo) => (
        <CardWrapper>
          <StyledTodo
            isDone={todo.isDone}
            className={todo.isDone ? 'doneTodo' : 'todo'}
            key={todo.id}
          >
            <p>{todo.title}</p>
          </StyledTodo>
          <div>
            <SetDoneButton onClick={onToggleTodo.bind(null, todo.id)}>
              {todo.isDone ? 'To do' : 'Done'}
            </SetDoneButton>
            <RemoveButton onClick={onRemoveTodo.bind(null, todo.id)}>Delete</RemoveButton>
          </div>
        </CardWrapper>
      ))}
    </>
  );
};

export default TodoList;
