export enum TutorialStatus {
  PLAYING = 'PLAYING',
  DONE = 'DONE',
}

const storeTutorialStatus = (status: TutorialStatus) => {
  if (window.localStorage) {
    return window.localStorage.setItem('tutorialStatus', status);
  }
  return false;
};

const getTutorialStatus = () => {
  if (window.localStorage) {
    return window.localStorage.getItem('tutorialStatus');
  }
  return false;
};

const clearTutorialStatus = () => {
  if (window.localStorage) {
    return window.localStorage.removeItem('tutorialStatus');
  }
  return false;
};

const storage = {
  storeTutorialStatus,
  getTutorialStatus,
  clearTutorialStatus,
};

export default storage;
