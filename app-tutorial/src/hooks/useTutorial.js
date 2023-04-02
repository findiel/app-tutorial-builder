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
exports.useTutorialContext = exports.TutorialProvider = void 0;
var react_1 = require("react");
var constate_1 = __importDefault(require("constate"));
var storage_1 = __importStar(require("../utils/storage"));
function useTutorial() {
    var _a = (0, react_1.useState)(null), activeStep = _a[0], setActiveStep = _a[1];
    var _b = (0, react_1.useState)(false), isTutorialStarted = _b[0], setIsTutorialStarted = _b[1];
    var startTutorial = function (step) {
        if (step === void 0) { step = 0; }
        setIsTutorialStarted(true);
        storage_1.default.storeTutorialStatus(storage_1.TutorialStatus.PLAYING);
        setActiveStep(step);
    };
    var endTutorial = function () {
        setIsTutorialStarted(false);
        storage_1.default.storeTutorialStatus(storage_1.TutorialStatus.DONE);
        setActiveStep(null);
    };
    var resetTutorial = function () {
        setIsTutorialStarted(false);
        storage_1.default.clearTutorialStatus();
        setActiveStep(null);
    };
    var nextStep = function (lastStep) {
        if (lastStep === void 0) { lastStep = false; }
        if (lastStep) {
            endTutorial();
        }
        setActiveStep(function (activeStep) { return (activeStep || activeStep === 0 ? activeStep + 1 : null); });
    };
    return {
        nextStep: nextStep,
        activeStep: activeStep,
        setActiveStep: setActiveStep,
        isTutorialStarted: isTutorialStarted,
        setIsTutorialStarted: setIsTutorialStarted,
        startTutorial: startTutorial,
        endTutorial: endTutorial,
        resetTutorial: resetTutorial,
    };
}
var _a = (0, constate_1.default)(useTutorial), TutorialProvider = _a[0], useTutorialContext = _a[1];
exports.TutorialProvider = TutorialProvider;
exports.useTutorialContext = useTutorialContext;
