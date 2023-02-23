import styled from 'styled-components';

interface StyledTutorialTooltipProps {
  display: 'block' | 'none';
}

export const StyledTutorialTooltip = styled.div<StyledTutorialTooltipProps>`
  display: ${({ display }) => display};
  min-width: 250px;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.common.white};
  border-radius: 16px;
  color: white;
  padding: 16px;

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

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
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
