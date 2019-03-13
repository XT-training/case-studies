import styled from '@emotion/styled';

const Th = styled.th`
  padding: 0.5em;
  text-align: center;
  ${props => (props.row ? `
    position: -webkit-sticky;
    position: sticky;
    left: 0;
  ` : '')}
`

export default Th;
