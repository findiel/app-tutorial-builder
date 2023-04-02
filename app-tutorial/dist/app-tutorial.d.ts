/// <reference types="react" />
import AppTutorialProvider from './components/AppTutorialProvider';
import TutorialTooltip from './components/TutorialTooltip';
declare const module: {
    AppTutorialProvider: typeof AppTutorialProvider;
    useTutorialContext: () => {
        nextStep: (lastStep?: boolean) => void;
        activeStep: number | null;
        setActiveStep: import("react").Dispatch<import("react").SetStateAction<number | null>>;
        isTutorialStarted: boolean;
        setIsTutorialStarted: import("react").Dispatch<import("react").SetStateAction<boolean>>;
        startTutorial: (step?: number) => void;
        endTutorial: () => void;
        resetTutorial: () => void;
    };
    TutorialTooltip: typeof TutorialTooltip;
    theme: {
        colors: {
            primary: {
                main: string;
                light: string;
                dark: string;
            };
            common: {
                black: string;
                white: string;
            };
            disabled: {
                main: string;
            };
        };
    };
};
export default module;
