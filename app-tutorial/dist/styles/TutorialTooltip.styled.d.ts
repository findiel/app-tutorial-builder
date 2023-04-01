export interface StyledTutorialTooltipProps extends Activable {
    top: number;
    left: number;
    width?: number;
}
export interface Activable {
    active: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, Activable, never>;
export declare const ChildElementWrapper: import("styled-components").StyledComponent<"div", any, Activable, never>;
export declare const StyledTutorialTooltip: import("styled-components").StyledComponent<"div", any, StyledTutorialTooltipProps, never>;
export declare const ButtonsWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Button: import("styled-components").StyledComponent<"button", any, Activable, never>;
export declare const StyledOverlay: import("styled-components").StyledComponent<"div", any, {}, never>;
