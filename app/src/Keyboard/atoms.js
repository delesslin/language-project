import { atom } from 'recoil'

// export const FILLER_ATOM = atom({
//   key: 'FILLER_ATOM',
//   default: '',
// })

export const KEYBOARD_ATOM = atom({
  key: 'KEYBOARD ATOM',
  default: {
    key: 'KEYBOARD_ATOM',
    default: {
      display: false,
      value: '',
    },
  },
})

// export const KEYBOARD_VIZ_ATOM = atom({
//   key: 'KEYBOARD_VIZ_ATOM',
//   default: false,
// })
