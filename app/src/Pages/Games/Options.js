import React from 'react'
import styled, { keyframes } from 'styled-components'

const OptionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    margin: 10px 20px;
  }
`
const activeShadow = () => keyframes`
  0%: { box-shadow: 4px 4px 3px #555;}
  50% {box-shadow: 6px 6px 5px #555;}
  100%: { box-shadow: 4px 4px 3px #555;}
`
const Option = styled.div`
  animation-name: ${activeShadow};
  animation-duration: ${(props) => props.lean + 4}s;
  animation-delay: ${(props) => props.lean * Math.random() + 2};
  animation-iteration-count: infinite;
  background-color: ${(props) => props.theme.secondary};
  transform: rotate(${(props) => props.lean * -2}deg);
  > p {
    padding: 1px 40px;
  }
  &:hover {
    box-shadow: 5px 5px 5px #eee;
    cursor: pointer;
  }
`
const Options = ({ options, handleAnswer }) => {
  return (
    <OptionsGrid>
      {options.map((entry, i) => {
        return (
          <Option key={i} lean={i % 2 ? 1 : -1} onClick={handleAnswer}>
            <p>{entry.translations[0]}</p>
          </Option>
        )
      })}
    </OptionsGrid>
  )
}

export default Options
