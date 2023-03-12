import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import {
  Wrapper,
  ChildElementWrapper,
  StyledTutorialTooltip,
  ButtonsWrapper,
  Button,
} from '../styles/TutorialTooltip.styled';
import { useTutorialContext } from '../../hooks/useTutorial';
import Overlay from '../Overlay';
import storage, { TutorialStatus } from '../utils/storage';

interface TutorialTooltipProps {
  /* Element to be exposed **/
  children: JSX.Element;
  /* Current tutorial step **/
  step: number;
  /* Content of current tutorial step to be displayed in tooltip **/
  content?: TutorialTooltipContent;
  /* The className of the component (see more details in styled-components library) **/
  className?: string;
  /* Text displayed in skip tutorial button **/
  skipTutorialBtnText?: string;
  /* Text displayed in next step button **/
  nextBtnText?: string;
  /* If true, the buttons won't be rendered **/
  hideButtons?: boolean;
  /* If true, tutorial will start automatically.
    You could for example make this prop conditionally decide at
    what point the tutorial should start.
  **/
  autostart?: boolean;
  /* Info if this step is the last one **/
  lastStep?: boolean;
  /* If true, the next step button will be disabled  **/
  nextButtonDisabled?: boolean;
}

interface TutorialTooltipContent {
  /* Tutorial step text **/
  text?: string;
  /* Tutorial step title **/
  title?: string;
  /* Tutorial step component **/
  component?: JSX.Element;
}

const viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

function TutorialTooltip({
  children,
  step,
  content,
  hideButtons = false,
  className,
  skipTutorialBtnText = 'Skip tutorial',
  nextBtnText = 'Next',
  autostart = false,
  lastStep = false,
  nextButtonDisabled = false,
}: TutorialTooltipProps): JSX.Element {
  const {
    nextStep,
    setActiveStep,
    activeStep,
    setIsTutorialStarted,
    isTutorialStarted,
    endTutorial,
  } = useTutorialContext();
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const childContainerRef = useRef<HTMLDivElement>(null);
  const tutorialTooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tutorialStatus = storage.getTutorialStatus();
    if (
      autostart &&
      !isTutorialStarted &&
      !(tutorialStatus === TutorialStatus.DONE || tutorialStatus === TutorialStatus.PLAYING)
    ) {
      setActiveStep(step);
      setIsTutorialStarted(true);
      storage.storeTutorialStatus(TutorialStatus.PLAYING);
    }
  }, [setIsTutorialStarted, autostart, isTutorialStarted, step, setActiveStep]);

  useLayoutEffect(() => {
    if (childContainerRef?.current && tutorialTooltipRef?.current) {
      const { current: childContainerElement } = childContainerRef;
      const { current: tutorialTooltipElement } = tutorialTooltipRef;
      const childBoundingClientRect = childContainerElement.getBoundingClientRect();
      const tutorialTooltipBoundingClientRect = tutorialTooltipElement.getBoundingClientRect();

      const tutorialTooltipComputedStyle = window.getComputedStyle(
        tutorialTooltipElement as HTMLElement
      );
      const tutorialTooltipTopMargin = Number.parseInt(tutorialTooltipComputedStyle.marginTop);
      const tutorialTooltipRightMargin = Number.parseInt(tutorialTooltipComputedStyle.marginRight);
      const tutorialTooltipLeftMargin = Number.parseInt(tutorialTooltipComputedStyle.marginLeft);
      const tutorialTooltipFullWidth =
        tutorialTooltipBoundingClientRect.width +
        tutorialTooltipLeftMargin +
        tutorialTooltipRightMargin;

      setPosition({
        top: childBoundingClientRect.height + tutorialTooltipTopMargin,
        left:
          viewWidth - childBoundingClientRect.left >= tutorialTooltipFullWidth
            ? 0
            : -tutorialTooltipBoundingClientRect.width - tutorialTooltipRightMargin,
      });
    }
  }, [childContainerRef, tutorialTooltipRef, activeStep]);

  const isCurrentTutorialStepDisplayed = React.useMemo(
    () => activeStep === step && isTutorialStarted,
    [activeStep, step, isTutorialStarted]
  );

  return (
    <>
      {isCurrentTutorialStepDisplayed && <Overlay></Overlay>}
      <Wrapper className={className} active={isCurrentTutorialStepDisplayed}>
        <ChildElementWrapper
          ref={childContainerRef}
          className="child-element-wrapper"
          active={isCurrentTutorialStepDisplayed}
        >
          {children}
        </ChildElementWrapper>
        <StyledTutorialTooltip
          ref={tutorialTooltipRef}
          className="tutorial-tooltip"
          active={isCurrentTutorialStepDisplayed}
          top={position.top}
          left={position.left}
        >
          {content?.title && <h1 className="title">{content.title}</h1>}
          {content?.text && <p className="text">{content.text}</p>}
          {content?.component}
          {!hideButtons && (
            <>
              <ButtonsWrapper className="buttons-wrapper">
                <Button className="skip-tutorial-btn" active onClick={endTutorial}>
                  {skipTutorialBtnText}
                </Button>
                <Button
                  className="next-btn"
                  active={!nextButtonDisabled}
                  onClick={nextStep.bind(null, lastStep)}
                  disabled={nextButtonDisabled}
                >
                  {nextBtnText}
                </Button>
              </ButtonsWrapper>
            </>
          )}
        </StyledTutorialTooltip>
      </Wrapper>
    </>
  );
}

export default TutorialTooltip;
