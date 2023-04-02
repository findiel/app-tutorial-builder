"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var theme_1 = __importDefault(require("../../services/styled-components/theme"));
var useTutorial_1 = require("../../hooks/useTutorial");
function AppTutorialProvider(_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? theme_1.default : _b;
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme },
        react_1.default.createElement(useTutorial_1.TutorialProvider, null, children)));
}
exports.default = AppTutorialProvider;
