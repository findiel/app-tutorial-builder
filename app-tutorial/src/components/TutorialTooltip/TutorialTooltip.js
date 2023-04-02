"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var TutorialTooltip_styled_1 = require("../../styles/TutorialTooltip.styled");
var useTutorial_1 = require("../../hooks/useTutorial");
var Overlay_1 = __importDefault(require("../Overlay"));
var storage_1 = __importStar(require("../../utils/storage"));
var usePosition_1 = __importDefault(require("../../hooks/usePosition"));
function TutorialTooltip(_a) {
    var children = _a.children, step = _a.step, content = _a.content, className = _a.className, _b = _a.skipTutorialBtnText, skipTutorialBtnText = _b === void 0 ? 'Skip tutorial' : _b, _c = _a.nextBtnText, nextBtnText = _c === void 0 ? 'Next' : _c, _d = _a.autostart, autostart = _d === void 0 ? false : _d, _e = _a.lastStep, lastStep = _e === void 0 ? false : _e, _f = _a.nextButtonDisabled, nextButtonDisabled = _f === void 0 ? false : _f, _g = _a.hideButtons, hideButtons = _g === void 0 ? false : _g, _h = _a.hideNextButton, hideNextButton = _h === void 0 ? false : _h, _j = _a.hideSkipTutorialButton, hideSkipTutorialButton = _j === void 0 ? false : _j;
    var _k = (0, useTutorial_1.useTutorialContext)(), nextStep = _k.nextStep, setActiveStep = _k.setActiveStep, activeStep = _k.activeStep, setIsTutorialStarted = _k.setIsTutorialStarted, isTutorialStarted = _k.isTutorialStarted, endTutorial = _k.endTutorial;
    var childContainerRef = (0, react_1.useRef)(null);
    var tutorialTooltipRef = (0, react_1.useRef)(null);
    var _l = (0, usePosition_1.default)(childContainerRef, tutorialTooltipRef, activeStep), position = _l.position, computedWidth = _l.computedWidth;
    (0, react_1.useEffect)(function () {
        var tutorialStatus = storage_1.default.getTutorialStatus();
        if (autostart &&
            !isTutorialStarted &&
            !(tutorialStatus === storage_1.TutorialStatus.DONE || tutorialStatus === storage_1.TutorialStatus.PLAYING)) {
            setActiveStep(step);
            setIsTutorialStarted(true);
            storage_1.default.storeTutorialStatus(storage_1.TutorialStatus.PLAYING);
        }
    }, [setIsTutorialStarted, autostart, isTutorialStarted, step, setActiveStep]);
    var isCurrentTutorialStepDisplayed = react_1.default.useMemo(function () { return activeStep === step && isTutorialStarted; }, [activeStep, step, isTutorialStarted]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isCurrentTutorialStepDisplayed && react_1.default.createElement(Overlay_1.default, null),
        react_1.default.createElement(TutorialTooltip_styled_1.Wrapper, { className: className, active: isCurrentTutorialStepDisplayed },
            react_1.default.createElement(TutorialTooltip_styled_1.ChildElementWrapper, { ref: childContainerRef, className: "child-element-wrapper", active: isCurrentTutorialStepDisplayed }, children),
            react_1.default.createElement(TutorialTooltip_styled_1.StyledTutorialTooltip, { ref: tutorialTooltipRef, className: "tutorial-tooltip", active: isCurrentTutorialStepDisplayed, top: position.top, left: position.left, width: computedWidth },
                (content === null || content === void 0 ? void 0 : content.title) && react_1.default.createElement("h1", { className: "title" }, content.title),
                (content === null || content === void 0 ? void 0 : content.text) && react_1.default.createElement("p", { className: "text" }, content.text), content === null || content === void 0 ? void 0 :
                content.component,
                !hideButtons && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(TutorialTooltip_styled_1.ButtonsWrapper, { className: "buttons-wrapper" },
                        !hideSkipTutorialButton && (react_1.default.createElement(TutorialTooltip_styled_1.Button, { className: "skip-tutorial-btn", active: true, onClick: endTutorial }, skipTutorialBtnText)),
                        !hideNextButton && (react_1.default.createElement(TutorialTooltip_styled_1.Button, { className: "next-btn", active: !nextButtonDisabled, onClick: nextStep.bind(null, lastStep), disabled: nextButtonDisabled }, nextBtnText)))))))));
}
exports.default = TutorialTooltip;
