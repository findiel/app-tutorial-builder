import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 500px;

  @media (max-width: 500px) {
    width: 95%;
  }
`;

export default Wrapper;
