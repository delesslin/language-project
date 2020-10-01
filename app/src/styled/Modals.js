import { Paper, Modal } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

export const ModalPaperContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

export const StyledModalPaper = styled(Paper)`
  min-width: 40vw;
  padding: 50px;
`
export const ModalStandard = ({ children, open }) => (
  <Modal
    open={open}
    aria-labelledby='Catawba Keyboard'
    aria-describedby='Interactive keyboard with Catawba characters'
  >
    <ModalPaperContainer>
      <StyledModalPaper>{children}</StyledModalPaper>
    </ModalPaperContainer>
  </Modal>
)
