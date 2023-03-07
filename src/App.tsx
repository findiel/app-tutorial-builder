import React from 'react';
import StyledTodoWrapper from './components/styles/TodoWrapper.styled';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import GlobalStyles from './components/styles/GlobalStyles.styled';
import { ThemeProvider } from 'styled-components';
import theme from './services/StyledComponents/styledComponentsTheme';
import TutorialTooltip from './components/TutorialTooltip';
import styled from 'styled-components';
import { TutorialProvider } from './hooks/useTutorial';
import logo from './logo.svg';

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
        <TutorialProvider>
          <GlobalStyles />
          {/* <div style={{ width: 400, height: 300 }}></div>

          <div style={{ width: 400, height: 300 }}></div>
          <div style={{ width: 400, height: 300 }}></div>
          <div style={{ width: 400, height: 300 }}></div> */}

          <StyledTodoWrapper>
            {/* <TutorialTooltip
              active
              content={{
                title: 'Hello World',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              }}
            > */}
            <h1>TODO APP</h1>
            {/* </TutorialTooltip> */}
            <AddTodoForm onAddTodo={addTodoHandler} />
            <TodoList
              todos={todos}
              onRemoveTodo={removeTodoHandler}
              onToggleTodo={toggleTodoDoneHandler}
            />
          </StyledTodoWrapper>
          <br />
          <br />
          <br />

          {/* <div style={{ width: 400, height: 300 }}></div> */}
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

          {/* <div style={{ width: 400, height: 300 }}></div> */}

          {/* <div style={{ display: 'flex' }}> */}
          {/* <TutorialTooltip
            active
            content={{
              title: 'Hello World',
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            }}
          >
            <p>Default tutorial tooltip</p>
          </TutorialTooltip> */}
          {/* </div> */}

          {/* <div style={{ width: 400, height: 300 }}></div> */}

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TutorialTooltip
              active
              content={{
                title: 'Hello World',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              }}
            >
              <div>hello world</div>
            </TutorialTooltip>
          </div>

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

export default TodoApp;
