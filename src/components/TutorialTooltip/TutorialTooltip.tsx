import React, { useRef, useEffect, useState } from 'react';
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
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const childContainerRef = useRef<HTMLDivElement>(null);
  const tutorialTooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childContainerRef?.current && tutorialTooltipRef?.current) {
      const { current: childContainerElement } = childContainerRef;
      const { current: tutorialTooltipElement } = tutorialTooltipRef;
      const childBoundingClientRect = childContainerElement.getBoundingClientRect();
      const tutorialTooltipBoundingClientRect = tutorialTooltipElement.getBoundingClientRect();

      console.log('child: ', childBoundingClientRect);
      console.log('tooltip: ', tutorialTooltipBoundingClientRect);

      if (placement === 'bottom') {
        const computedChildBottomMargin = Number.parseInt(
          window.getComputedStyle(childContainerElement.firstElementChild as HTMLElement)
            .marginBottom
        );

        setPosition({
          top: childBoundingClientRect.height + computedChildBottomMargin,
          left:
            window.screen.width - childBoundingClientRect.left >=
            tutorialTooltipBoundingClientRect.width
              ? 0
              : -tutorialTooltipBoundingClientRect.width,
        });
      }

      //TODO: work with other placements + deal with edge-cases (eg. placement === 'top', and the component is very close to the staring page - we dont want to move the component.)
      if (placement === 'top') {
        if (
          window.screen.width - childBoundingClientRect.left >=
          tutorialTooltipBoundingClientRect.width
        ) {
          setPosition({
            top: -childBoundingClientRect.height,
            left: 0,
          });
        } else {
          setPosition({
            top: -tutorialTooltipBoundingClientRect.height,
            left: -tutorialTooltipBoundingClientRect.width,
          });
        }
      }
    }
  }, [childContainerRef, tutorialTooltipRef, placement]);

  return (
    <Wrapper className={className}>
      {<div ref={childContainerRef}>{children}</div>}
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
  );
}

export default TutorialTooltip;
