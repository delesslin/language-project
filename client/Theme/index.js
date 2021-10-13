import hexRgb from 'hex-rgb'
export default {
  NAVY: '#051940',
  TEAL: '#41b2a2',
  YELLOW: '#fbc10b',
  BLUE: '#0bbcee',
  RED: '#f25a38',
  BLACK: '#111',
  WHITE: '#fefefe',
  FONT_TITLE: 'title',
  rgba: (hex, alpha) => {
    let { red, green, blue } = hexRgb(hex)
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
  },
}
