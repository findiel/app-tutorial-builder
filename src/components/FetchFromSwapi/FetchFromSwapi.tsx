import { Grid, Button, Typography } from '@mui/material';
import { useState } from 'react';
// import TutorialTooltip from '../TutorialTooltip';
// import { useTutorialContext } from '../../hooks/useTutorial';
import { useTutorialContext, TutorialTooltip } from 'app-tutorial';

interface PersonDTO {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
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
          <Typography sx={{ paddingTop: '10px' }}>Fetched data: </Typography>
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
              <Typography>{fetchedData.name}</Typography>
            </TutorialTooltip>
          ) : (
            <Typography sx={{ paddingTop: '10px' }}>-</Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
}
