import React from 'react';
import { StyledTutorialTooltip, Flex, StyledButton } from '../styles/TutorialTooltip.styled';

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

function TutorialTooltip({
  children,
  active = false,
  content,
  hideButtons = false,
  className,
  skipTutorialBtnText = 'Skip tutorial',
  nextBtnText = 'Next',
}: TutorialTooltipProps): JSX.Element {
  return (
    <>
      {children}
      <StyledTutorialTooltip className={className} display={active ? 'block' : 'none'}>
        {content?.title && <h1 className="title">{content.title}</h1>}
        {content?.text && <p className="text">{content.text}</p>}
        {content?.component}
        {!hideButtons && (
          <Flex className="buttons-wrapper">
            <StyledButton className="skip-tutorial-btn">{skipTutorialBtnText}</StyledButton>
            <StyledButton className="next-btn">{nextBtnText}</StyledButton>
          </Flex>
        )}
      </StyledTutorialTooltip>
    </>
  );
}

export default TutorialTooltip;
