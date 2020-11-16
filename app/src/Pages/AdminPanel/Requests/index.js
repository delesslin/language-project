import { Notification } from 'Components'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useAPI from 'utils/hooks/useAPI'
import Request from './Request'
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-gap: 25px;
`
const Requests = () => {
  const { readMessages } = useAPI()
  const [requests, setRequests] = useState([])
  const reset = () => readMessages().then(setRequests)
  useEffect(() => {
    // get requests
    reset()
    // eslint-disable-next-line
  }, [])

  return (
    <Grid>
      {requests.map((request, i) => {
        return <Request key={i} request={request} reset={reset} />
      })}
    </Grid>
  )
}

export default Requests
