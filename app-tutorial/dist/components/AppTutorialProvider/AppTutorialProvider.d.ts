/// <reference types="react" />
export interface AppTutorialProviderProps {
    /** Component to be wrapped with <TutorialProvider />.
     * Usually you want to wrap whole Application by this provider */
    children: JSX.Element | JSX.Element[];
    /** Theme object. If you won't pass any styles,
     * app-tutorial package will use its internal styles
     * More info about theming with styled-component:
     * https://styled-components.com/docs/advanced */
    theme?: object;
}
export default function AppTutorialProvider({ children, theme, }: AppTutorialProviderProps): JSX.Element;
