import Axios from 'axios'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import useAPI from '../../utils/hooks/useAPI'
import { Button, Paper, Text } from '../Surfaces'
import { HomeIcon } from '../Surfaces/Icon'

const RequestPaper = styled(Paper)`
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: columns;
  place-items: stretch;
  grid-gap: 10px;
`
const Input = styled.input`
  border: none;
  padding: 10px;
  font-size: 1rem;
  border-radius: 10px;
  text-wrap: wrap;
  width: 95%;
`
const Label = styled(Text)`
  text-align: start;
  display: grid;
  place-items: start;
`
export const Feedback = () => {
  const [success, setSuccess] = useState(-1)
  const history = useHistory()
  const { headers } = useAPI()
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  const type = 'feedback'
  const handleSubmit = () => {
    const name = nameRef.current.value
    const email = emailRef.current.value
    const message = messageRef.current.value
    Axios.post('/api/message', { name, email, message, type }, headers)
      .then((res) => {
        setSuccess(1)
      })
      .catch(console.error)
  }
  if (success === 1) {
    return (
      <RequestPaper color='green'>
        <Text size={1.3}>
          <b>Hawu for the feedback!</b>
        </Text>
        <Button onClick={() => history.push('/')}>
          <HomeIcon />
        </Button>
      </RequestPaper>
    )
  } else {
    return (
      <RequestPaper color='light'>
        <Label size={1.3}>
          <b>Have Feedback or Requests?</b>
        </Label>
        <Label size={1}>Let us know:</Label>
        <div>
          <Label size={0.9}>Your Name</Label>
          <Input type='text' ref={nameRef} />
        </div>
        <div>
          <Label size={0.9}>Your E-mail</Label>
          <Input type='text' ref={emailRef} />
        </div>
        <div>
          <Label size={0.9}>Your Request:</Label>
          <Input as='textarea' ref={messageRef} />
        </div>
        <Button onClick={handleSubmit}>SUBMIT</Button>
      </RequestPaper>
    )
  }
}

export default Feedback
