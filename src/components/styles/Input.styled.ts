import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 1rem;
  border: 2px black solid;
  border-radius: 32px;

  :focus {
    outline: none !important;
    border: ${({ theme }) => `2px solid ${theme.colors.primary.main}`};
    box-shadow: ${({ theme }) => `0 0 10px ${theme.components.input.boxShadowOnFocus}`};
  }
`;

export default StyledInput;
