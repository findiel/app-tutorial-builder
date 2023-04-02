export declare enum TutorialStatus {
    PLAYING = "PLAYING",
    DONE = "DONE"
}
declare const storage: {
    storeTutorialStatus: (status: TutorialStatus) => false | void;
    getTutorialStatus: () => string | false | null;
    clearTutorialStatus: () => false | void;
};
export default storage;
