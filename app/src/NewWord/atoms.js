import { atom } from 'recoil'

export const TERM_ATOM = atom({
  key: 'TERM_ATOM',
  default: 'sαwąkαde',
})
export const PRON_ATOM = atom({
  key: 'PRON_ATOM',
  default: ['suh-wong-kuh-day'],
})

export const ALT_ATOM = atom({
  key: 'ALT_ATOM',
  default: ['Alternative spelling for sαwąkαde'],
})

export const TRANS_ATOM = atom({
  key: 'TRANS_ATOM',
  default: ['Stand up!'],
})

export const TAGS_ATOM = atom({
  key: 'TAGS_ATOM',
  default: ['commands', 'headstart'],
})

export const IMG_ATOM = atom({
  key: 'IMG_ATOM',
  default: ['https://picsum.photos/200'],
})

export const NOTE_ATOM = atom({
  key: 'NOTE_VALUE',
  default: ['This is a note about sαwąkαde'],
})

export const REC_ATOM = atom({
  key: 'REC_VALUE',
  default: [],
})
