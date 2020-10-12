const { default: styled } = require('styled-components')
const color = '#00f66f'
export const TextLink = styled.a`
  text-decoration: none;
  border: 2px solid ${color};
  padding: 5px;
  border-radius: 50px;
  color: ${color};
  margin: 5px;
`
