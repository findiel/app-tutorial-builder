import * as React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Grid, Box } from '@mui/material';
// import TutorialTooltip from '../TutorialTooltip';
// import { useTutorialContext } from '../../hooks/useTutorial';
import { useTutorialContext, TutorialTooltip } from 'app-tutorial';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { isTutorialStarted, nextStep } = useTutorialContext();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    if (isTutorialStarted) {
      nextStep();
    }
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email, index) => {
          const emailListItem = (
            <ListItem disableGutters>
              <ListItemButton onClick={() => handleListItemClick(email)}>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          );
          return (
            <Box key={email}>
              {isTutorialStarted && index === 0 ? (
                <TutorialTooltip
                  step={6}
                  hideNextButton
                  content={{
                    title: 'Pick user',
                    text: 'Click on user to select.',
                  }}
                >
                  {emailListItem}
                </TutorialTooltip>
              ) : (
                <>{emailListItem}</>
              )}
            </Box>
          );
        })}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => handleListItemClick('addAccount')}>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const { isTutorialStarted, nextStep } = useTutorialContext();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    if (isTutorialStarted) {
      nextStep();
    }
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Grid container flexDirection="column" justifyContent="center" alignItems="center">
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <TutorialTooltip
        step={5}
        hideNextButton
        content={{
          title: 'Open modal',
          text: 'Click on modal to open it',
        }}
      >
        <Button variant="outlined" onClick={handleClickOpen}>
          Open simple dialog
        </Button>
      </TutorialTooltip>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </Grid>
  );
}
