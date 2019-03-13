import styled from '@emotion/styled';

const Th = styled.th`
  background-color: #e5e5e5;
  padding: 0.5em;
  text-align: center;
  position: -webkit-sticky;
  position: sticky;
  ${props => (props.row ? `
    left: 0;
  ` : `
    top: 0;
  `)}
`

export default Th;
