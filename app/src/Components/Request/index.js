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
  place-items: start;
  grid-gap: 10px;
`
const Input = styled.input`
  border: none;
  padding: 10px;
  font-size: 1.5rem;
  border-radius: 10px;
`
const Request = ({ term = '' }) => {
  const [success, setSuccess] = useState(-1)
  const history = useHistory()
  const { headers } = useAPI()
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  // const messageRef = useRef(null)
  const [message, setMessage] = useState(term)
  const type = 'request'
  const handleSubmit = () => {
    const name = nameRef.current.value
    const email = emailRef.current.value

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
          <b>Your Request has been Submitted!</b>
        </Text>
        <Text size={1}>We'll try to translate it as soon as possible.</Text>
        <Button onClick={() => history.push('/')}>
          <HomeIcon />
        </Button>
      </RequestPaper>
    )
  } else {
    return (
      <RequestPaper color='light'>
        <Text size={1.3}>
          <b>Can't find what you're looking for?</b>
        </Text>
        <Text size={1}>Submit a translation request:</Text>
        <div>
          <Text size={0.9}>Your Name</Text>
          <Input type='text' ref={nameRef} />
        </div>
        <div>
          <Text size={0.9}>Your E-mail</Text>
          <Input type='text' ref={emailRef} />
        </div>
        <div>
          <Text size={0.9}>Your Request:</Text>
          <Input
            value={message}
            type='text'
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit}>SUBMIT</Button>
      </RequestPaper>
    )
  }
}

export default Request
