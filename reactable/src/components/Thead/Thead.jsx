import styled from '@emotion/styled';

const Thead = styled.thead`
  & th {
    background: ${props => props.theme.borderColor};
  }
  & th:first-child {
    left: 0;
    z-index: 1;
  }
`

export default Thead;
