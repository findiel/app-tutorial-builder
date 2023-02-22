import styled from 'styled-components';
import Button from './Button.styled';

const StyledRemoveButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.error.main};
  padding: 8px 16px;
`;

export default StyledRemoveButton;
