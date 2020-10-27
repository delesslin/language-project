import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Paper, Text } from '../../../Components'
import useAPI from '../../../utils/hooks/useAPI'
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: columns;
`
const Request = styled(Paper)`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr aut auto;
  grid-template-areas: 'message button' 'name button' 'email button';
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
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  }, [])
  return (
    <Grid>
      <Text size={1.5}>REQUESTS</Text>
      {requests.map((request, i) => {
        return (
          <Request key={i} color='light'>
            <Message>"{request.message}"</Message>
            <Name>{request.name}</Name>
            <Email>{request.email}</Email>
            <Buttons>
              <Button round={true}>CHECK</Button>
            </Buttons>
          </Request>
        )
      })}
    </Grid>
  )
}

export default Requests
