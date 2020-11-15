import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  Button,
  IgnoreRequestIcon,
  Paper,
  ReplyRequestIcon,
  Text,
} from 'Components'
import useAPI from 'utils/hooks/useAPI'
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-gap: 15px;
`
const Request = styled(Paper)`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto auto;
  grid-template-areas: 'message button' 'name button' 'email button';
  place-items: start;
  padding: 25px;
`
const Message = styled(Text)`
  grid-area: message;
`
const Name = styled(Text)`
  grid-area: name;
`
const Email = styled(Text)`
  grid-area: email;
`
const Buttons = styled.div`
  grid-area: button;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  > * {
    margin: 5px;
  }
`
const Requests = () => {
  const { headers } = useAPI()
  const [requests, setRequests] = useState([])
  useEffect(() => {
    // get requests
    Axios.get('/api/message', headers)
      .then(({ data }) => {
        setRequests(data)
      })
      .catch(console.error)
  }, [headers])
  return (
    <Grid>
      {requests.map((request, i) => {
        return (
          <Request key={i} color='light'>
            <Message>"{request.message}"</Message>
            <Name>{request.name}</Name>
            <Email>{request.email}</Email>
            <Buttons>
              <Button round={true}>
                <ReplyRequestIcon />
              </Button>
              <Button round={true} color='secondary'>
                <IgnoreRequestIcon />
              </Button>
            </Buttons>
          </Request>
        )
      })}
    </Grid>
  )
}

export default Requests
