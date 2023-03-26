import StyledFlex from '../../styles/Flex.styled';

interface FlexProps {
  children: JSX.Element | JSX.Element[];
}

function Flex({ children }: FlexProps): JSX.Element {
  return <StyledFlex>{children}</StyledFlex>;
}

export default Flex;
