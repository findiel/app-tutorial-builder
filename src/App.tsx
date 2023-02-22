import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import GlobalStyles from './components/styles/GlobalStyles.styled';
import { ThemeProvider } from 'styled-components';
import theme from './services/StyledComponents/styledComponentsTheme';

export interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

function TodoApp(): JSX.Element {
  const [todos, setTodos] = React.useState<Todo[] | []>([]);

  const addTodoHandler = (todo: Todo) => setTodos((prevTodos) => [...prevTodos, todo]);

  const removeTodoHandler = (todoId: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const toggleTodoDoneHandler = (todoId: string) => {
    const todoToBeDoneIndex = todos.findIndex((todo) => todo.id === todoId);
    const todoToBeDone = Object.assign({}, todos[todoToBeDoneIndex]);
    if (todoToBeDone.isDone) {
      todoToBeDone.isDone = false;
    } else {
      todoToBeDone.isDone = true;
    }
    setTodos([
      ...todos.slice(0, todoToBeDoneIndex),
      todoToBeDone,
      ...todos.slice(todoToBeDoneIndex + 1),
    ]);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <h1>TODO APP</h1>
        <AddTodoForm onAddTodo={addTodoHandler} />
        <TodoList
          todos={todos}
          onRemoveTodo={removeTodoHandler}
          onToggleTodo={toggleTodoDoneHandler}
        />
      </ThemeProvider>
    </>
  );
}

export default TodoApp;
