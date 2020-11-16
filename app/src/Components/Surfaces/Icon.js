import HomeIconO from '@material-ui/icons/Home'
import LockIconO from '@material-ui/icons/Lock'
import SearchIconO from '@material-ui/icons/Search'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import MicIconO from '@material-ui/icons/Mic'
import MicOffIcon from '@material-ui/icons/MicOff'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import React from 'react'
import { CgMore } from 'react-icons/cg'
import { FaKeyboard, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdRecordVoiceOver } from 'react-icons/md'
import { RiFacebookBoxFill, RiDeleteBinLine } from 'react-icons/ri'
import { TiInfoLarge, TiBackspaceOutline } from 'react-icons/ti'
import { BsShift, BsPeopleFill, BsImages } from 'react-icons/bs'
import {
  BiCopy,
  BiMessageError,
  BiMessageEdit,
  BiMessageX,
  BiSave,
  BiLink,
} from 'react-icons/bi'
import { GrClose, GrSend } from 'react-icons/gr'
import { AiOutlineFontColors, AiFillTags } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { VscIssues } from 'react-icons/vsc'
import { GiRaiseZombie } from 'react-icons/gi'
import styled from 'styled-components'
// TODO: use react icons theme provider to allow for styling
const IconWrapper = styled.div``
const Icon = (props) => {
  const { Component, size = 25 } = props
  return (
    <IconWrapper {...props}>
      <Component size={`${size}px`} />
    </IconWrapper>
  )
}

const genIcon = (Component) => {
  const Generated = (props) => {
    return <Icon {...props} Component={Component} />
  }
  return Generated
}

export const BackIcon = genIcon(IoIosArrowBack)
export const FwdIcon = genIcon(IoIosArrowForward)
export const SoundIcon = genIcon(MdRecordVoiceOver)
export const MoreIcon = genIcon(CgMore)
export const InfoIcon = genIcon(TiInfoLarge)
export const KeyboardIcon = genIcon(FaKeyboard)
export const GameIcon = genIcon(VideogameAssetIcon)
export const SearchIcon = genIcon(SearchIconO)
export const HomeIcon = genIcon(HomeIconO)
export const FacebookIcon = genIcon(RiFacebookBoxFill)
export const LockIcon = genIcon(LockIconO)
export const UnlockIcon = genIcon(LockOpenIcon)
export const MicIcon = genIcon(MicIconO)
export const NoMicIcon = genIcon(MicOffIcon)
export const BackspaceIcon = genIcon(TiBackspaceOutline)
export const ShiftIcon = genIcon(BsShift)
export const CopyIcon = genIcon(BiCopy)
export const CloseIcon = genIcon(GrClose)
export const WordIcon = genIcon(AiOutlineFontColors)
export const UsersIcon = genIcon(BsPeopleFill)
export const ImageIcon = genIcon(BsImages)
export const TagsIcon = genIcon(AiFillTags)
export const VisibleIcon = genIcon(FaRegEye)
export const HiddenIcon = genIcon(FaRegEyeSlash)
export const TwitterIcon = genIcon(FiTwitter)
export const IssueIcon = genIcon(VscIssues)
export const RequestIcon = genIcon(BiMessageError)
export const IgnoreRequestIcon = genIcon(BiMessageX)
export const ReplyRequestIcon = genIcon(BiMessageEdit)
export const SaveIcon = genIcon(BiSave)
export const SendIcon = genIcon(GrSend)
export const DeleteIcon = genIcon(RiDeleteBinLine)
export const ResurrectIcon = genIcon(GiRaiseZombie)
export const LinkIcon = genIcon(BiLink)
