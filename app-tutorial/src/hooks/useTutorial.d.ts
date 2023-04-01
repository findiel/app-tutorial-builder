/// <reference types="react" />
declare const TutorialProvider: import("react").FC<{
    children?: import("react").ReactNode;
}>, useTutorialContext: () => {
    nextStep: (lastStep?: boolean) => void;
    activeStep: number;
    setActiveStep: import("react").Dispatch<import("react").SetStateAction<number>>;
    isTutorialStarted: boolean;
    setIsTutorialStarted: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    startTutorial: (step?: number) => void;
    endTutorial: () => void;
    resetTutorial: () => void;
};
export { TutorialProvider, useTutorialContext };
