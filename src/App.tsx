import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import GlobalStyles from './components/styles/GlobalStyles.styled';
import { ThemeProvider } from 'styled-components';
import theme from './services/StyledComponents/styledComponentsTheme';
import TutorialTooltip from './components/TutorialTooltip';
import styled from 'styled-components';
import { TutorialProvider } from './hooks/useTutorial';
import MUIDialog from './components/MUIDialog';
import logo from './logo.svg';
import { Grid, Button } from '@mui/material';
import FetchFromSwapi from './components/FetchFromSwapi';
import TutorialManagementButtons from './components/TutorialManagementButtons';

export interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

const CustomizedTutorialTooltip = styled(TutorialTooltip)`
  .tutorial-tooltip {
    background-color: #aceb7b;
  }

  .title {
    font-size: 20px;
    text-align: center;
    color: black;
  }

  .text {
    color: black;
  }

  .buttons-wrapper {
    justify-content: flex-end;
  }

  .skip-tutorial-btn {
    margin-right: 8px;
  }

  .next-btn {
    border: none;
    background-color: orangered;
    font-weight: bold;
  }
`;

function App(): JSX.Element {
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
        <TutorialProvider>
          <GlobalStyles />
          <TutorialManagementButtons />
          <Grid container direction="column" alignItems="center">
            <TutorialTooltip
              autostart
              step={0}
              content={{
                title: 'Welcome to TODO APP! ',
                text: 'This application will help you with managing your tasks.',
              }}
            >
              <h1>TODO APP</h1>
            </TutorialTooltip>
            <AddTodoForm onAddTodo={addTodoHandler} />
            <TodoList
              todos={todos}
              onRemoveTodo={removeTodoHandler}
              onToggleTodo={toggleTodoDoneHandler}
            />
          </Grid>
          <br />
          <Grid container direction="column" alignItems="center">
            <h1>Tutorial tests with MUI</h1>
            <MUIDialog />
          </Grid>
          <br />
          <Grid container direction="column" alignItems="center">
            <h1>Fetch data & then display tutorial step</h1>
            <FetchFromSwapi />
          </Grid>
          {/*
          <TutorialTooltip
            active={false}
            content={{
              title: 'Hello World',
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            }}
          >
            <p>Default tutorial tooltip</p>
          </TutorialTooltip> */}

          {/* <TutorialTooltip
            active
            content={{
              component: (
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}
                >
                  <p>This is cool react logo &#128526;</p>
                  <img src={logo} alt="react logo" style={{ width: '150px', height: '150px' }} />
                </div>
              ),
            }}
          >
            <p>Tutorial tooltip with customized content - a component</p>
          </TutorialTooltip> */}

          {/* <CustomizedTutorialTooltip
            active
            content={{
              title: 'Hello World',
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            }}
          >
            <p>Tutorial tooltip with customized styles</p>
          </CustomizedTutorialTooltip> */}
        </TutorialProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
