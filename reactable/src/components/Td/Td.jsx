import styled from '@emotion/styled';

const Td = styled.td`
  padding: ${props => (`${props.cellDensity}rem`)};
  text-align: center;
`

export default Td;
