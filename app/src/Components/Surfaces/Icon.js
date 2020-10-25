import React from 'react'
import styled from 'styled-components'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdRecordVoiceOver } from 'react-icons/md'
import { CgMore } from 'react-icons/cg'
import { TiInfoLarge } from 'react-icons/ti'
import HomeIconO from '@material-ui/icons/Home'
import SearchIconO from '@material-ui/icons/Search'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import { FaKeyboard, FaFacebook } from 'react-icons/fa'
import { RiMenuFill, RiFacebookBoxFill } from 'react-icons/ri'
import LockIconO from '@material-ui/icons/Lock'
const IconWrapper = styled.div``
const Icon = (props) => {
  const { Component, size = 25 } = props
  return (
    <IconWrapper {...props}>
      <Component size={`${size}px`} />
    </IconWrapper>
  )
}

// Icon gen fn?
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

export const InfoIcon = (props) => <Icon {...props} Component={TiInfoLarge} />

export const KeyboardIcon = (props) => (
  <Icon {...props} Component={FaKeyboard} />
)

export const GameIcon = (props) => (
  <Icon {...props} Component={VideogameAssetIcon} />
)

export const SearchIcon = (props) => <Icon {...props} Component={SearchIconO} />

export const HomeIcon = (props) => <Icon {...props} Component={HomeIconO} />

export const FacebookIcon = (props) => (
  <Icon {...props} Component={RiFacebookBoxFill} />
)
export const LockIcon = (props) => <Icon {...props} Component={LockIconO} />
