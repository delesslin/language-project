import { Paper, Modal } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

export const ModalPaperContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

export const StyledModalPaper = styled(Paper)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 50px;
`
export const ModalStandard = ({
  children,
  open,
  width = 'auto',
  height = 'auto',
}) => (
  <Modal
    open={open}
    aria-labelledby='Catawba Keyboard'
    aria-describedby='Interactive keyboard with Catawba characters'
  >
    <ModalPaperContainer>
      <StyledModalPaper width={width} height={height}>
        {children}
      </StyledModalPaper>
    </ModalPaperContainer>
  </Modal>
)
