import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Paper, Text } from '../../Components'

const OptionsGrid = styled.div`
  grid-area: options;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    margin: 10px 20px;
  }
`
// const activeShadow = () => keyframes`
//   0%: { box-shadow: 4px 4px 3px #555;}
//   50% {box-shadow: 6px 6px 5px #555;}
//   100%: { box-shadow: 4px 4px 3px #555;}
// `
const OptionPaper = styled(Paper)`
  transition: all 0.3s;
  opacity: 1;

  ${({ status = 'waiting', theme }) => {
    switch (status) {
      case 'waiting':
        return `
        cursor: pointer;
        background-color: ${theme.secondary};
        box-shadow: 2px 2px 1px #555;
                &:hover {
                  box-shadow: 5px 5px 5px #555;
                  cursor: pointer;
                }

        `
      case 'hidden':
        return `opacity: 0;`
      case 'wrong':
        return `
          background-color: ${theme.red};
          opacity: 0.4;
          `
      case 'correct':
        return `
          background-color: ${theme.green};
        `
    }
  }}
  transform: rotate(${(props) => props.lean * -2}deg);
  border-radius: 2px;
  padding: 10px 50px;
`

const Option = (props) => {
  const { choice, id, answer } = props
  const [status, setStatus] = useState('hidden')
  useEffect(() => {
    if (choice.length > 0) {
      if (choice !== id && id !== answer) {
        setStatus('hidden')
      } else if (choice === id && id !== answer) {
        setStatus('wrong')
      } else {
        setStatus('correct')
      }
    } else {
      setStatus('waiting')
    }
  }, [choice, id, answer])
  return (
    <OptionPaper {...props} status={status}>
      {props.children}
    </OptionPaper>
  )
}
const Options = ({ options, handleAnswer, choice = '', answer = '' }) => {
  return (
    <OptionsGrid>
      {options.map((entry, i) => {
        return (
          <Option
            key={i}
            lean={i % 2 ? 1 : -1}
            onClick={
              choice.length < 1 ? () => handleAnswer(entry._id) : () => {}
            }
            choice={choice}
            id={entry._id}
            answer={answer}
          >
            <Text size={1.5}>{entry.translations[0]}</Text>
          </Option>
        )
      })}
    </OptionsGrid>
  )
}

export default Options
