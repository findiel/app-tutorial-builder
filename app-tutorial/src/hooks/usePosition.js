"use strict";
exports.__esModule = true;
var react_1 = require("react");
function usePosition(childContainerRef, tutorialTooltipRef, activeStep) {
    var _a = (0, react_1.useState)({ top: 0, left: 0 }), position = _a[0], setPosition = _a[1];
    var _b = (0, react_1.useState)(), computedWidth = _b[0], setComputedWidth = _b[1];
    (0, react_1.useLayoutEffect)(function () {
        function handleChangePosition() {
            var viewWidth = document.documentElement.clientWidth || 0;
            if ((childContainerRef === null || childContainerRef === void 0 ? void 0 : childContainerRef.current) && (tutorialTooltipRef === null || tutorialTooltipRef === void 0 ? void 0 : tutorialTooltipRef.current)) {
                var childContainerElement = childContainerRef.current;
                var tutorialTooltipElement = tutorialTooltipRef.current;
                var childBoundingClientRect = childContainerElement.getBoundingClientRect();
                var tutorialTooltipBoundingClientRect = tutorialTooltipElement.getBoundingClientRect();
                var tutorialTooltipComputedStyle = window.getComputedStyle(tutorialTooltipElement);
                var tutorialTooltipTopMargin = Number.parseInt(tutorialTooltipComputedStyle.marginTop);
                var tutorialTooltipRightMargin = Number.parseInt(tutorialTooltipComputedStyle.marginRight);
                var tutorialTooltipLeftMargin = Number.parseInt(tutorialTooltipComputedStyle.marginLeft);
                var tutorialTooltipFullWidth = tutorialTooltipBoundingClientRect.width +
                    tutorialTooltipLeftMargin +
                    tutorialTooltipRightMargin;
                if (viewWidth < tutorialTooltipFullWidth ||
                    (childBoundingClientRect.left < tutorialTooltipFullWidth &&
                        viewWidth - childBoundingClientRect.left < tutorialTooltipFullWidth)) {
                    setComputedWidth(viewWidth - (tutorialTooltipLeftMargin + tutorialTooltipRightMargin));
                    setPosition({
                        top: childBoundingClientRect.height + tutorialTooltipTopMargin,
                        left: -childBoundingClientRect.left
                    });
                }
                else {
                    setPosition({
                        top: childBoundingClientRect.height + tutorialTooltipTopMargin,
                        left: viewWidth - childBoundingClientRect.left >= tutorialTooltipFullWidth
                            ? 0
                            : -tutorialTooltipBoundingClientRect.width - tutorialTooltipRightMargin
                    });
                }
            }
        }
        handleChangePosition();
        window.addEventListener('resize', handleChangePosition);
        return function () {
            window.removeEventListener('resize', handleChangePosition);
        };
    }, [childContainerRef, tutorialTooltipRef, activeStep]);
    return {
        position: position,
        computedWidth: computedWidth
    };
}
exports["default"] = usePosition;
