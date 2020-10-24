import React from 'react'
import styled from 'styled-components'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdRecordVoiceOver } from 'react-icons/md'
import { CgMore } from 'react-icons/cg'
const IconWrapper = styled.div``
const Icon = (props) => {
  const { Component, size = 25 } = props
  return (
    <IconWrapper {...props}>
      <Component size={`${size}px`} />
    </IconWrapper>
  )
}

export const BackIcon = (props) => (
  <Icon {...props} Component={IoIosArrowBack} />
)
export const FwdIcon = (props) => (
  <Icon {...props} Component={IoIosArrowForward} />
)

export const SoundIcon = (props) => (
  <Icon {...props} Component={MdRecordVoiceOver} />
)

export const MoreIcon = (props) => <Icon {...props} Component={CgMore} />
