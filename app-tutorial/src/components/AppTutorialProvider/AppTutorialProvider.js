"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var theme_1 = __importDefault(require("../../services/styled-components/theme"));
var useTutorial_1 = require("../../hooks/useTutorial");
function AppTutorialProvider(_a) {
    var children = _a.children;
    return (react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: theme_1["default"] },
        react_1["default"].createElement(useTutorial_1.TutorialProvider, null, children)));
}
exports["default"] = AppTutorialProvider;
