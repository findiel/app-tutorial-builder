import React from 'react';
export interface TutorialTooltipProps {
    children: React.ReactNode;
    step: number;
    content?: TutorialTooltipContent;
    className?: string;
    skipTutorialBtnText?: string;
    nextBtnText?: string;
    autostart?: boolean;
    lastStep?: boolean;
    nextButtonDisabled?: boolean;
    hideButtons?: boolean;
    hideNextButton?: boolean;
    hideSkipTutorialButton?: boolean;
}
export interface TutorialTooltipContent {
    text?: string;
    title?: string;
    component?: JSX.Element;
}
declare function TutorialTooltip({ children, step, content, className, skipTutorialBtnText, nextBtnText, autostart, lastStep, nextButtonDisabled, hideButtons, hideNextButton, hideSkipTutorialButton, }: TutorialTooltipProps): JSX.Element;
export default TutorialTooltip;
