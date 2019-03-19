import styled from '@emotion/styled';

const Table = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 2000px;
  table-layout: fixed;
  line-height: 1;
  border: 1px solid ${props => props.theme.borderColor};
`

export default Table;
