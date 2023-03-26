import { Grid, Button } from '@mui/material';
import { useTutorialContext } from '../../hooks/useTutorial';

const TutorialManagementButtons = () => {
  const { startTutorial, resetTutorial } = useTutorialContext();
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Button variant="outlined" onClick={() => startTutorial()}>
          start tutorial
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={() => resetTutorial()}>
          reset tutorial
        </Button>
      </Grid>
    </Grid>
  );
};

export default TutorialManagementButtons;
