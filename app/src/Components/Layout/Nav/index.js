import media from 'css-in-js-media'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'
import useAPI from '../../../utils/hooks/useAPI'
import IconButton from '../../Buttons/IconButton'

export const Nav = styled.div`
  grid-area: nav;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${media('>tablet')} {
    justify-content: flex-end;
  }
`
const ButtonWrapper = styled.div`
  display: grid;
  place-items: center;
`
const StyledButton = styled(IconButton)`
  ${({ current = false }) => `
  ${
    current
      ? `
    opacity: 1;
    `
      : `
    opacity: 0.6;
    `
  }
  `}
`
export const NavButton = ({ to, children, href = '', variant }) => {
  const history = useHistory()
  const location = useLocation()
  const redirect = () => history.push(to)
  return (
    <ButtonWrapper>
      <StyledButton
        onClick={redirect}
        variant={variant}
        current={location.pathname == to}
      >
        {children}
      </StyledButton>
    </ButtonWrapper>
  )
}
