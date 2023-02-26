import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  width: 500px;
  justify-content: space-between;

  @media (max-width: 500px) {
    width: 95%;
  }
`;

export default Wrapper;
