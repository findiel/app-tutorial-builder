import React from 'react';
import { Todo } from '../../App';
import { useTutorialContext } from '../../hooks/useTutorial';
import CardWrapper from '../../styles/CardWrapper.styled';
import RemoveButton from '../../styles/RemoveButton.styled';
import SetDoneButton from '../../styles/SetDoneButton.styled';
import StyledTodo from '../../styles/Todo.styled';
import TutorialTooltip from '../TutorialTooltip';
import Flex from '../Flex';

interface TodoListProps {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
}

const TodoList = ({ todos, onRemoveTodo, onToggleTodo }: TodoListProps): JSX.Element => {
  const { isTutorialStarted, nextStep } = useTutorialContext();

  const handleToggleTodo = (todoId: string) => {
    if (isTutorialStarted) {
      nextStep();
    }
    onToggleTodo(todoId);
  };

  const handleRemoveTodo = (todoId: string) => {
    if (isTutorialStarted) {
      nextStep();
    }
    onRemoveTodo(todoId);
  };

  return (
    <>
      {todos.map((todo) => (
        <CardWrapper key={todo.id}>
          <StyledTodo isDone={todo.isDone} key={todo.id}>
            <p>{todo.title}</p>
          </StyledTodo>
          <Flex>
            {isTutorialStarted ? (
              <TutorialTooltip
                step={3}
                hideNextButton
                content={{
                  title: 'Toggle functionality',
                  text: 'You could toggle your TODO.',
                }}
              >
                <SetDoneButton onClick={handleToggleTodo.bind(null, todo.id)}>
                  {todo.isDone ? 'To do' : 'Done'}
                </SetDoneButton>
              </TutorialTooltip>
            ) : (
              <SetDoneButton onClick={handleToggleTodo.bind(null, todo.id)}>
                {todo.isDone ? 'To do' : 'Done'}
              </SetDoneButton>
            )}
            {isTutorialStarted ? (
              <TutorialTooltip
                step={4}
                hideNextButton
                content={{
                  title: 'Delete functionality',
                  text: 'You could also remove your TODO.',
                }}
              >
                <RemoveButton onClick={handleRemoveTodo.bind(null, todo.id)}>Delete</RemoveButton>
              </TutorialTooltip>
            ) : (
              <RemoveButton onClick={handleRemoveTodo.bind(null, todo.id)}>Delete</RemoveButton>
            )}
          </Flex>
        </CardWrapper>
      ))}
    </>
  );
};

export default TodoList;
