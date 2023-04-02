"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialStatus = void 0;
var TutorialStatus;
(function (TutorialStatus) {
    TutorialStatus["PLAYING"] = "PLAYING";
    TutorialStatus["DONE"] = "DONE";
})(TutorialStatus = exports.TutorialStatus || (exports.TutorialStatus = {}));
var storeTutorialStatus = function (status) {
    if (window.localStorage) {
        return window.localStorage.setItem('tutorialStatus', status);
    }
    return false;
};
var getTutorialStatus = function () {
    if (window.localStorage) {
        return window.localStorage.getItem('tutorialStatus');
    }
    return false;
};
var clearTutorialStatus = function () {
    if (window.localStorage) {
        return window.localStorage.removeItem('tutorialStatus');
    }
    return false;
};
var storage = {
    storeTutorialStatus: storeTutorialStatus,
    getTutorialStatus: getTutorialStatus,
    clearTutorialStatus: clearTutorialStatus,
};
exports.default = storage;
