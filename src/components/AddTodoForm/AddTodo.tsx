import React from 'react';
import { Todo } from '../../App';
import { v4 as uuidv4 } from 'uuid';
import Wrapper from '../styles/Wrapper.styled';
import Button from '../styles/Button.styled';
import Input from '../styles/Input.styled';

interface AddTodoFormProps {
  onAddTodo: (todo: Todo) => void;
}

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps): JSX.Element => {
  const [value, setValue] = React.useState<string>('');

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo: Todo = {
      id: uuidv4(),
      title: value,
      isDone: false,
    };
    onAddTodo(newTodo);
    setValue('');
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);

  return (
    <Wrapper>
      <Input
        id="add-todo"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Add todo "
      />
      <Button onClick={handleAddTodo} disabled={!value}>
        Add
      </Button>
    </Wrapper>
  );
};

export default AddTodoForm;
