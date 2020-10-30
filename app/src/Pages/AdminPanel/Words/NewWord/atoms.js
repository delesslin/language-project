import { atom } from 'recoil'

export const TERM_ATOM = atom({
  key: 'TERM_ATOM',
  default: '',
})
export const PRON_ATOM = atom({
  key: 'PRON_ATOM',
  default: [],
})

export const ALT_ATOM = atom({
  key: 'ALT_ATOM',
  default: [],
})

export const TRANS_ATOM = atom({
  key: 'TRANS_ATOM',
  default: [],
})

export const TAGS_ATOM = atom({
  key: 'TAGS_ATOM',
  default: [],
})

export const IMG_ATOM = atom({
  key: 'IMG_ATOM',
  default: [],
})

export const NOTE_ATOM = atom({
  key: 'NOTE_VALUE',
  default: [],
})

export const REC_ATOM = atom({
  key: 'REC_VALUE',
  default: [],
})
