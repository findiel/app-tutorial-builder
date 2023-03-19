import { useState } from 'react';
import constate from 'constate';
import storage, { TutorialStatus } from '../components/utils/storage';

function useTutorial() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isTutorialStarted, setIsTutorialStarted] = useState<boolean>(false);

  const startTutorial = (step = 0) => {
    setIsTutorialStarted(true);
    storage.storeTutorialStatus(TutorialStatus.PLAYING);
    setActiveStep(step);
  };

  const endTutorial = () => {
    setIsTutorialStarted(false);
    storage.storeTutorialStatus(TutorialStatus.DONE);
    setActiveStep(null);
  };

  const resetTutorial = () => {
    setIsTutorialStarted(false);
    storage.clearTutorialStatus();
    setActiveStep(null);
  };

  const nextStep = (lastStep = false) => {
    if (lastStep) {
      endTutorial();
    }
    setActiveStep((activeStep) => (activeStep || activeStep === 0 ? activeStep + 1 : null));
  };

  return {
    nextStep,
    activeStep,
    setActiveStep,
    isTutorialStarted,
    setIsTutorialStarted,
    startTutorial,
    endTutorial,
    resetTutorial,
  };
}

const [TutorialProvider, useTutorialContext] = constate(useTutorial);

export { TutorialProvider, useTutorialContext };
