import React, { useRef, useEffect, useState } from 'react';
import {
  Wrapper,
  ChildElementWrapper,
  StyledTutorialTooltip,
  Flex,
  Button,
} from '../styles/TutorialTooltip.styled';
import { useTutorialContext } from '../../hooks/useTutorial';
import Overlay from '../Overlay';

interface TutorialTooltipProps {
  children: JSX.Element;
  active: boolean;
  content?: TutorialTooltipContent;
  hideButtons?: boolean;
  className?: string;
  skipTutorialBtnText?: string;
  nextBtnText?: string;
}

interface TutorialTooltipContent {
  text?: string;
  title?: string;
  component?: JSX.Element;
}

const viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

function TutorialTooltip({
  children,
  active = false,
  content,
  hideButtons = false,
  className,
  skipTutorialBtnText = 'Skip tutorial',
  nextBtnText = 'Next',
}: TutorialTooltipProps): JSX.Element {
  const { nextStep } = useTutorialContext();
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const childContainerRef = useRef<HTMLDivElement>(null);
  const tutorialTooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childContainerRef?.current && tutorialTooltipRef?.current) {
      const { current: childContainerElement } = childContainerRef;
      const { current: tutorialTooltipElement } = tutorialTooltipRef;
      const childBoundingClientRect = childContainerElement.getBoundingClientRect();
      const tutorialTooltipBoundingClientRect = tutorialTooltipElement.getBoundingClientRect();

      const childComputedStyle = window.getComputedStyle(
        childContainerElement.firstElementChild as HTMLElement
      );
      const childTopMargin = Number.parseInt(childComputedStyle.marginTop);
      const childBottomMargin = Number.parseInt(childComputedStyle.marginBottom);
      const childFullHeight = childBoundingClientRect.height + childTopMargin + childBottomMargin;

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
        top: childFullHeight + tutorialTooltipTopMargin,
        left:
          viewWidth - childBoundingClientRect.left >= tutorialTooltipFullWidth
            ? 0
            : -tutorialTooltipBoundingClientRect.width - tutorialTooltipRightMargin,
      });
    }
  }, [childContainerRef, tutorialTooltipRef]);

  return (
    <>
      <Overlay></Overlay>
      <Wrapper className={className}>
        <ChildElementWrapper className="child-element-wrapper" ref={childContainerRef}>
          {children}
        </ChildElementWrapper>
        <StyledTutorialTooltip
          ref={tutorialTooltipRef}
          className="tutorial-tooltip"
          display={active ? 'block' : 'none'}
          top={position.top}
          left={position.left}
        >
          {content?.title && <h1 className="title">{content.title}</h1>}
          {content?.text && <p className="text">{content.text}</p>}
          {content?.component}
          {!hideButtons && (
            <Flex className="buttons-wrapper">
              <Button className="skip-tutorial-btn">{skipTutorialBtnText}</Button>
              <Button className="next-btn">{nextBtnText}</Button>
            </Flex>
          )}
        </StyledTutorialTooltip>
      </Wrapper>
    </>
  );
}

export default TutorialTooltip;
