import { useState, useLayoutEffect } from 'react';
import constate from 'constate';

function useTutorial() {
  const [activeStep, setActiveStep] = useState<number>(0);

  useLayoutEffect(() => {
    let portal;
    portal = document.getElementById('tutorial-app-overlay-portal');
    if (portal) return;
    portal = document.createElement('div');
    portal.id = 'tutorial-app-overlay-portal';
    document.body.appendChild(portal);
  }, []);

  const nextStep = () => setActiveStep((activeStep) => activeStep + 1);

  return {
    nextStep,
    activeStep,
  };
}

const [TutorialProvider, useTutorialContext] = constate(useTutorial);

export { TutorialProvider, useTutorialContext };
