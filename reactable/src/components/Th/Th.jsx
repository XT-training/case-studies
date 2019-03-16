import styled from '@emotion/styled';

const Th = styled.th`
  background-color: #e5e5e5;
  padding: ${props => (`${props.cellDensity}rem`)};
  text-align: center;
  position: -webkit-sticky;
  position: sticky;
  color: ${props => props.theme && props.theme.color};
  ${props => (props.heading ? `
    left: 0;
  ` : `
    top: 0;
  `)}
`

export default Th;
