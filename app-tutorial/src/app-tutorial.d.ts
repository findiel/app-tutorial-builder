import AppTutorialProvider from './components/AppTutorialProvider';
import TutorialTooltip from './components/TutorialTooltip';
declare const module: {
    AppTutorialProvider: typeof AppTutorialProvider;
    TutorialTooltip: typeof TutorialTooltip;
    theme: {
        colors: {
            primary: {
                main: string;
                light: string;
                dark: string;
            };
            error: {
                main: string;
            };
            common: {
                black: string;
                white: string;
            };
            disabled: {
                main: string;
            };
        };
        components: {
            input: {
                boxShadowOnFocus: string;
            };
        };
    };
};
export default module;
