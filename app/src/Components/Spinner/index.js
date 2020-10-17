import React from 'react'
import styled, { withTheme } from 'styled-components'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

const Spinner = ({ theme, size = 30 }) => {
  return (
    <SpinnerWrapper>
      {/* <ScalingSquaresSpinner color='#000000' size='200' /> */}
      {/* <Halogen name='double-bounce' /> */}
      <ClimbingBoxLoader
        size={size}
        color={theme['secondary']}
      ></ClimbingBoxLoader>
    </SpinnerWrapper>
  )
}

export default withTheme(Spinner)
