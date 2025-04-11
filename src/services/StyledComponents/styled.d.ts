import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      error: {
        main: string;
      };
      disabled: {
        main: string;
      };
      common: {
        black: string;
        white: string;
      };
    };
    components: {
      input: {
        boxShadowOnFocus: string;
      };
    };
  }
}
