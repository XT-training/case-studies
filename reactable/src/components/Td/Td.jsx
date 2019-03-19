import styled from '@emotion/styled';

const Td = styled.td`
  padding: ${props => (`${props.cellDensity}rem`)};
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default Td;
