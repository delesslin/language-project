import React from 'react'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'
import { Button } from '../../Surfaces'

export const Nav = styled.div`
  grid-area: nav;

  display: flex;
  align-items: center;

  justify-content: flex-end;
`
const ButtonWrapper = styled.div`
  display: grid;
  place-items: center;
`
const StyledButton = styled(Button)`
  display: grid;
  place-items: center;
  background-color: ${({ theme, color = 'red' }) => theme[color]};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: none;
  &:hover {
    box-shadow: none;
    opacity: 0.9;
  }
  padding: 0px;
  margin: 0px;
  ${({ current = false }) => `
  ${
    current
      ? `
    opacity: 0.9;
    `
      : `
    opacity: 0.6;
    `
  }
  `}
`

export const NavLink = ({ href, variant, children, color = 'red' }) => {
  const handleClick = (e) => {
    e.preventDefault()
    window.location.href = href
  }
  return (
    <ButtonWrapper>
      <StyledButton
        round='true'
        variant={variant}
        href={href}
        onClick={handleClick}
        color={color}
      >
        {children}
      </StyledButton>
    </ButtonWrapper>
  )
}
export const NavButton = ({
  to,
  children,
  href = '',
  variant,
  color = 'red',
}) => {
  const history = useHistory()
  const location = useLocation()
  const redirect = () => history.push(to)
  return (
    <ButtonWrapper>
      <StyledButton
        onClick={redirect}
        variant={variant}
        current={location.pathname == to}
        round={true}
        color={color}
      >
        {children}
      </StyledButton>
    </ButtonWrapper>
  )
}
