import {
  Button,
  DeleteIcon,
  IgnoreRequestIcon,
  Notification,
  Paper,
  ReplyRequestIcon,
  SaveIcon,
  SendIcon,
  Spinner,
  Text,
} from 'Components'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import useRequest, { RequestProvider } from './useRequest'

const RequestPaper = styled(Paper)`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  grid-template-rows: 1fr auto auto auto;
  grid-template-areas: 'msg message button' 'n name button' 'e email button' 'response response response';
  place-items: start;
  grid-gap: 15px;
  padding: 25px;
`
const MsgTitle = styled(Text)`
  grid-area: msg;
`
const NameTitle = styled(Text)`
  grid-area: n;
`
const EmailTitle = styled(Text)`
  grid-area: e;
`
const Message = styled(Text)`
  grid-area: message;
  display: flex;
`
const Name = styled(Text)`
  grid-area: name;
  display: flex;
`
const Email = styled(Text)`
  grid-area: email;
  display: flex;
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
const fadeIn = keyframes`
  0%{
    opacity: 0;
    bottom: -100;
  }
  100% {
    opacity: 1;
    bottom: 0;
  }
`
const TextField = styled.textarea`
  grid-area: response;
  place-self: stretch;

  resize: none;
  border-radius: 5px;
  border: none;
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
`
const RequestSpinner = styled(Spinner)`
  grid-area: 1 / 1 / 5 / 4;
`
const Request = ({ request }) => {
  const {
    showResponse,
    handleSend,
    handleSave,
    setShowResponse,
    handleDelete,
    handleIgnore,
    responseRef,
    isLoading,
  } = useRequest()

  return (
    <RequestPaper color='light'>
      <MsgTitle>Message: </MsgTitle>
      <Message>"{request.message}"</Message>
      <NameTitle>Name: </NameTitle>
      <Name>{request.name}</Name>
      <EmailTitle>Email: </EmailTitle>
      <Email>{request.email}</Email>
      <Buttons>
        {showResponse ? (
          <Button round={true} color='green' onClick={handleSend}>
            <SendIcon />
          </Button>
        ) : null}
        {showResponse ? (
          <Button round={true} onClick={handleSave}>
            <SaveIcon />
          </Button>
        ) : (
          <Button round={true} onClick={() => setShowResponse(true)}>
            <ReplyRequestIcon />
          </Button>
        )}
        {showResponse ? (
          <Button round={true} color='red' onClick={handleDelete}>
            <DeleteIcon />
          </Button>
        ) : (
          <Button round={true} color='red' onClick={handleIgnore}>
            <IgnoreRequestIcon />
          </Button>
        )}
      </Buttons>
      {showResponse ? <TextField ref={responseRef} /> : null}
      {isLoading ? <RequestSpinner /> : null}
    </RequestPaper>
  )
}

export default ({ request, reset }) => {
  return (
    <RequestProvider request={request} reset={reset}>
      <Request request={request} />
    </RequestProvider>
  )
}
