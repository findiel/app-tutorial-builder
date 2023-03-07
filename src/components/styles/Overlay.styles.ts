import styled from 'styled-components';

const StyledPortal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2147483646; // Almost max z-index value by default
  background-color: rgba(0, 0, 0, 0.4);
`;

export default StyledPortal;
