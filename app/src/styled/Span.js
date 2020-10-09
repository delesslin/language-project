const { default: styled } = require('styled-components')

const Span = styled.span`
  background-color: ${(props) => props.color};
  font-weight: bold;
  padding: 3px 5px;
  border-radius: 3px;
`
export default Span
