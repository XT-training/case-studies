import styled from '@emotion/styled';

const Td = styled.td`
  padding: ${props => (`${props.cellDensity}rem`)};
  text-align: left;
`

export default Td;
