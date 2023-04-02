import React from 'react';
import { Todo } from '../../App';
import { v4 as uuidv4 } from 'uuid';
import Wrapper from '../../styles/Wrapper.styled';
import Button from '../../styles/Button.styled';
import Input from '../../styles/Input.styled';
// import TutorialTooltip from '../TutorialTooltip';
// import { useTutorialContext } from '../../hooks/useTutorial';
import { useTutorialContext, TutorialTooltip } from 'app-tutorial';
interface AddTodoFormProps {
  onAddTodo: (todo: Todo) => void;
}

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps): JSX.Element => {
  const { nextStep, isTutorialStarted } = useTutorialContext();
  const [value, setValue] = React.useState<string>('');

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (isTutorialStarted) {
      nextStep();
    }
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
      <TutorialTooltip
        step={1}
        nextButtonDisabled={!value}
        content={{
          title: 'Add yours first TODO',
          text: 'Just type it in the input.',
        }}
      >
        <Input
          id="add-todo"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Add todo "
        />
      </TutorialTooltip>
      <TutorialTooltip
        step={2}
        lastStep
        content={{
          title: 'Finish adding first TODO',
          text: 'Click add button to finish adding your first TODO',
        }}
        hideNextButton
      >
        <Button onClick={handleAddTodo} disabled={!value}>
          Add
        </Button>
      </TutorialTooltip>
    </Wrapper>
  );
};

export default AddTodoForm;
