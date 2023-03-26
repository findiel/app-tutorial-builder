import { useLayoutEffect, useState } from 'react';

function usePosition(
  childContainerRef: React.RefObject<HTMLDivElement>,
  tutorialTooltipRef: React.RefObject<HTMLDivElement>,
  activeStep: number | null
) {
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [computedWidth, setComputedWidth] = useState<number>();

  useLayoutEffect(() => {
    function handleChangePosition() {
      const viewWidth = document.documentElement.clientWidth || 0;
      if (childContainerRef?.current && tutorialTooltipRef?.current) {
        const { current: childContainerElement } = childContainerRef;
        const { current: tutorialTooltipElement } = tutorialTooltipRef;
        const childBoundingClientRect = childContainerElement.getBoundingClientRect();
        const tutorialTooltipBoundingClientRect = tutorialTooltipElement.getBoundingClientRect();

        const tutorialTooltipComputedStyle = window.getComputedStyle(
          tutorialTooltipElement as HTMLElement
        );
        const tutorialTooltipTopMargin = Number.parseInt(tutorialTooltipComputedStyle.marginTop);
        const tutorialTooltipRightMargin = Number.parseInt(
          tutorialTooltipComputedStyle.marginRight
        );
        const tutorialTooltipLeftMargin = Number.parseInt(tutorialTooltipComputedStyle.marginLeft);
        const tutorialTooltipFullWidth =
          tutorialTooltipBoundingClientRect.width +
          tutorialTooltipLeftMargin +
          tutorialTooltipRightMargin;

        if (
          viewWidth < tutorialTooltipFullWidth ||
          (childBoundingClientRect.left < tutorialTooltipFullWidth &&
            viewWidth - childBoundingClientRect.left < tutorialTooltipFullWidth)
        ) {
          setComputedWidth(viewWidth - (tutorialTooltipLeftMargin + tutorialTooltipRightMargin));
          setPosition({
            top: childBoundingClientRect.height + tutorialTooltipTopMargin,
            left: -childBoundingClientRect.left,
          });
        } else {
          setPosition({
            top: childBoundingClientRect.height + tutorialTooltipTopMargin,
            left:
              viewWidth - childBoundingClientRect.left >= tutorialTooltipFullWidth
                ? 0
                : -tutorialTooltipBoundingClientRect.width - tutorialTooltipRightMargin,
          });
        }
      }
    }
    handleChangePosition();
    window.addEventListener('resize', handleChangePosition);
    return () => {
      window.removeEventListener('resize', handleChangePosition);
    };
  }, [childContainerRef, tutorialTooltipRef, activeStep]);

  return {
    position,
    computedWidth,
  };
}

export default usePosition;
