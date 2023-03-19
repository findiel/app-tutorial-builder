import TutorialTooltip from '../TutorialTooltip';
import { Grid, Button } from '@mui/material';
import { useState } from 'react';
import { useTutorialContext } from '../../hooks/useTutorial';

interface PersonDTO {
  name: string;
}

export default function FetchFromSwapiComponent() {
  const { isTutorialStarted, nextStep } = useTutorialContext();
  const [fetchedData, setFetchedData] = useState<PersonDTO | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/1');
      const data = await response.json();
      if (data) {
        setFetchedData(data);
        if (isTutorialStarted) nextStep();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <TutorialTooltip
        step={7}
        hideNextButton
        content={{
          title: 'Fetch data',
          text: 'Fetch data from SWAPI',
        }}
      >
        <Button variant="outlined" onClick={fetchData}>
          Fetch data from SWAPI
        </Button>
      </TutorialTooltip>
      <br />
      <Grid container justifyContent="center" spacing={1}>
        <Grid item>
          <p>Fetched data: </p>
        </Grid>
        <Grid item>
          {fetchedData ? (
            <TutorialTooltip
              step={8}
              lastStep
              content={{
                title: 'Fetched data',
                text: 'As you can see, here you have a fetched data.',
              }}
            >
              <p>{fetchedData.name}</p>
            </TutorialTooltip>
          ) : (
            <p>-</p>
          )}
        </Grid>
      </Grid>
    </>
  );
}
