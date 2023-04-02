"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledOverlay = exports.Button = exports.ButtonsWrapper = exports.StyledTutorialTooltip = exports.ChildElementWrapper = exports.Wrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  z-index: ", "; //Max z-index value by default\n"], ["\n  position: relative;\n  z-index: ", "; //Max z-index value by default\n"])), function (_a) {
    var active = _a.active;
    return (active ? 2147483647 : 'auto');
});
exports.ChildElementWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: 10px;\n  border-radius: 8px;\n"], ["\n  background-color: ", ";\n  padding: 10px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme, active = _a.active;
    return (active ? theme.colors.common.white : 'inherit');
});
exports.StyledTutorialTooltip = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  min-width: 300px;\n  max-width: 500px;\n  box-sizing: border-box;\n  width: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  color: white;\n  padding: 16px;\n  margin-top: 8px;\n\n  * {\n    color: ", ";\n  }\n\n  h1 {\n    margin: 0px;\n    text-align: left;\n  }\n\n  p {\n    font-size: 16px;\n  }\n"], ["\n  display: ", ";\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  min-width: 300px;\n  max-width: 500px;\n  box-sizing: border-box;\n  width: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  color: white;\n  padding: 16px;\n  margin-top: 8px;\n\n  * {\n    color: ", ";\n  }\n\n  h1 {\n    margin: 0px;\n    text-align: left;\n  }\n\n  p {\n    font-size: 16px;\n  }\n"])), function (_a) {
    var active = _a.active;
    return (active ? 'block' : 'none');
}, function (_a) {
    var top = _a.top;
    return top + 'px';
}, function (_a) {
    var left = _a.left;
    return left + 'px';
}, function (_a) {
    var width = _a.width;
    return (width ? width + 'px' : 'auto');
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary.main;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.common.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.common.white;
});
exports.ButtonsWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 24px;\n"])));
exports.Button = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 8px 32px;\n  border-radius: 32px;\n  border: ", ";\n  color: ", ";\n  font-size: 18px;\n  background-color: ", ";\n  cursor: ", ";\n  transition: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  padding: 8px 32px;\n  border-radius: 32px;\n  border: ", ";\n  color: ", ";\n  font-size: 18px;\n  background-color: ", ";\n  cursor: ", ";\n  transition: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, active = _a.active;
    return "1px ".concat(active ? theme.colors.common.white : theme.colors.disabled.main, " solid");
}, function (_a) {
    var theme = _a.theme, active = _a.active;
    return active ? theme.colors.common.white : theme.colors.disabled.main;
}, function (_a) {
    var theme = _a.theme, active = _a.active;
    return active ? theme.colors.primary.main : theme.colors.primary.dark;
}, function (_a) {
    var active = _a.active;
    return (active ? 'pointer' : 'auto');
}, function (_a) {
    var active = _a.active;
    return (active ? 'all 0.3s' : 'none');
}, function (_a) {
    var theme = _a.theme, active = _a.active;
    return active ? theme.colors.primary.light : theme.colors.primary.dark;
});
exports.StyledOverlay = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2147483646; // Almost max z-index value by default\n  background-color: rgba(0, 0, 0, 0.4);\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2147483646; // Almost max z-index value by default\n  background-color: rgba(0, 0, 0, 0.4);\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
