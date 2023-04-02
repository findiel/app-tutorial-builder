import AppTutorialProvider from './components/AppTutorialProvider';
import theme from './services/styled-components/theme';
import TutorialTooltip from './components/TutorialTooltip';
import { useTutorialContext } from './hooks/useTutorial';

// Types
import { AppTutorialProviderProps } from './components/AppTutorialProvider/AppTutorialProvider';
import { TutorialTooltipProps } from './components/TutorialTooltip/TutorialTooltip';
import { StyledTutorialTooltipProps, Activable } from './styles/TutorialTooltip.styled';
import { TutorialStatus } from './utils/storage';

const module = {
  AppTutorialProvider,
  useTutorialContext,
  TutorialTooltip,
  theme,
};

export default module;
