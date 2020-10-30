import HomeIconO from '@material-ui/icons/Home'
import LockIconO from '@material-ui/icons/Lock'
import SearchIconO from '@material-ui/icons/Search'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import MicIconO from '@material-ui/icons/Mic'
import MicOffIcon from '@material-ui/icons/MicOff'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import React from 'react'
import { CgMore } from 'react-icons/cg'
import { FaKeyboard } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdRecordVoiceOver } from 'react-icons/md'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { TiInfoLarge, TiBackspaceOutline } from 'react-icons/ti'
import { BsShift, BsPeopleFill } from 'react-icons/bs'
import { BiCopy } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import { AiOutlineFontColors } from 'react-icons/ai'
import styled from 'styled-components'
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
export const UnlockIcon = (props) => (
  <Icon {...props} Component={LockOpenIcon} />
)

export const MicIcon = (props) => <Icon {...props} Component={MicIconO} />

export const NoMicIcon = (props) => <Icon {...props} Component={MicOffIcon} />

export const BackspaceIcon = (props) => (
  <Icon {...props} Component={TiBackspaceOutline} />
)

export const ShiftIcon = (props) => <Icon {...props} Component={BsShift} />

export const CopyIcon = (props) => <Icon {...props} Component={BiCopy} />

export const CloseIcon = (props) => <Icon {...props} Component={GrClose} />
export const WordIcon = (props) => (
  <Icon {...props} Component={AiOutlineFontColors} />
)
export const UsersIcon = (props) => <Icon {...props} Component={BsPeopleFill} />
