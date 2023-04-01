import AppTutorialProvider from './components/AppTutorialProvider';
import theme from './services/styled-components/theme';
import TutorialTooltip from './components/TutorialTooltip';

// Types
import { AppTutorialProviderProps } from './components/AppTutorialProvider/AppTutorialProvider';
import { TutorialTooltipProps } from './components/TutorialTooltip/TutorialTooltip';
import { StyledTutorialTooltipProps, Activable } from './styles/TutorialTooltip.styled';
import { TutorialStatus } from './utils/storage';

const module = {
  AppTutorialProvider,
  TutorialTooltip,
  theme,
};

export default module;
