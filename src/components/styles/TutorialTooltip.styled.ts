import styled from 'styled-components';

interface StyledTutorialTooltipProps extends Activable {
  top: number;
  left: number;
}

interface Activable {
  active: boolean;
}

export const Wrapper = styled.div<Activable>`
  position: relative;
  z-index: ${({ active }) => (active ? 2147483647 : 'auto')}; //Max z-index value by default
`;

export const ChildElementWrapper = styled.div<Activable>`
  background-color: ${({ active }) => (active ? '#ffffff' : 'inherit')};
  padding: 10px;
  border-radius: 8px;
`;

export const StyledTutorialTooltip = styled.div<StyledTutorialTooltipProps>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: absolute;
  top: ${({ top }) => top + 'px'};
  left: ${({ left }) => left + 'px'};
  min-width: 300px;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.common.white};
  border-radius: 16px;
  color: white;
  padding: 16px;
  margin-top: 8px;

  * {
    color: ${({ theme }) => theme.colors.common.white};
  }

  h1 {
    margin: 0px;
    text-align: left;
  }

  p {
    font-size: 16px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Button = styled.button<Activable>`
  padding: 8px 32px;
  border-radius: 32px;
  border: ${({ theme, active }) =>
    `1px ${active ? theme.colors.common.white : theme.colors.disabled.main} solid`};
  color: ${({ theme, active }) =>
    active ? theme.colors.common.white : theme.colors.disabled.main};
  font-size: 18px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : theme.colors.primary.dark};
  cursor: ${({ active }) => (active ? 'pointer' : 'auto')};
  transition: ${({ active }) => (active ? 'all 0.3s' : 'none')};

  &:hover {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.primary.light : theme.colors.primary.dark};
  }
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2147483646; // Almost max z-index value by default
  background-color: rgba(0, 0, 0, 0.4);
`;
