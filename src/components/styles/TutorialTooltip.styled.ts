import styled from 'styled-components';

interface StyledTutorialTooltipProps {
  active: boolean;
  top: number;
  left: number;
}

interface ChildElementWrapperProps {
  active: boolean;
}

export const Wrapper = styled.div`
  position: relative;
  z-index: 2147483647; //Max z-index value by default
`;

export const ChildElementWrapper = styled.div<ChildElementWrapperProps>`
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

export const Button = styled.button`
  padding: 8px 32px;
  border-radius: 32px;
  border: 1px white solid;
  color: ${({ theme }) => theme.colors.common.white};
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
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
