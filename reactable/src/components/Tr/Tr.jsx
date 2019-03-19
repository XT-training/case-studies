import styled from '@emotion/styled';

const Tr = styled.tr`
  border-bottom: 1px solid #fff;
  &:nth-of-type(even) {
    background-color: ${props => props.theme.borderColor};
  }
`;

export default Tr;
