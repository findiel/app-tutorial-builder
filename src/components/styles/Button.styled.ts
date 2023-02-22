import styled from 'styled-components';

const StyledButton = styled.button`
  margin-left: 8px;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: white;
  font-size: 18px;
  border-radius: 32px;
  border: 0;
  cursor: pointer;

  :disabled {
    background-color: grey;
  }
`;

export default StyledButton;
