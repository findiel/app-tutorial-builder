/// <reference types="react" />
declare function usePosition(childContainerRef: React.RefObject<HTMLDivElement>, tutorialTooltipRef: React.RefObject<HTMLDivElement>, activeStep: number | null): {
    position: {
        top: number;
        left: number;
    };
    computedWidth: number | undefined;
};
export default usePosition;
