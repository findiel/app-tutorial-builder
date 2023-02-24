import React, { useRef, useEffect } from 'react';
import { Wrapper, StyledTutorialTooltip, Flex, Button } from '../styles/TutorialTooltip.styled';

interface TutorialTooltipProps {
  children: JSX.Element;
  active: boolean;
  content?: TutorialTooltipContent;
  hideButtons?: boolean;
  className?: string;
  skipTutorialBtnText?: string;
  nextBtnText?: string;
  placement?: 'left' | 'top' | 'right' | 'bottom';
}

interface TutorialTooltipContent {
  text?: string;
  title?: string;
  component?: JSX.Element;
}

function TutorialTooltip({
  children,
  active = false,
  content,
  hideButtons = false,
  className,
  skipTutorialBtnText = 'Skip tutorial',
  nextBtnText = 'Next',
  placement = 'bottom',
}: TutorialTooltipProps): JSX.Element {
  const childContainerRef = useRef<HTMLDivElement>(null);
  const tutorialTooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childContainerRef?.current && tutorialTooltipRef?.current) {
      const { current: childCurrent } = childContainerRef;
      const { current: tutorialTooltipCurrent } = tutorialTooltipRef;
      const childBoundingClientRect = childCurrent.getBoundingClientRect();
      const tutorialTooltipBoundingClientRect = tutorialTooltipCurrent.getBoundingClientRect();

      //TODO: calculate the distance from screen edges depends on width and height of the TutorialTooltip component and store it to the local state
      // then just pass it to the StyledTutorialTooltip as props (top and left). If the content wont fit, ten move the component to the opposite side
      // like this: left --> right, top --> bottom, right --> left, bottom --> top
      console.log('child: ', childBoundingClientRect);
      console.log('tooltip: ', tutorialTooltipBoundingClientRect);
    }
  }, [childContainerRef, tutorialTooltipRef]);

  return (
    <Wrapper>
      {<div ref={childContainerRef}>{children}</div>}
      <StyledTutorialTooltip
        ref={tutorialTooltipRef}
        className={className}
        display={active ? 'block' : 'none'}
        top={16}
        left={50}
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
  );
}

export default TutorialTooltip;
