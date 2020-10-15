const { default: styled } = require('styled-components')
const highlight = '#eefafc'
const secondlight = '#FFFED6'
const trilight = '#FFEBF1'
export const InputGrid = styled.div`
  transition: all 0.2s;
  border-radius: 25px;
  overflow: hidden;
  border: 2px solid ${highlight};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  // background-color: #555;
  grid-gap: 9px;
  grid-template-areas:
    'v word word a a a'
    'b tr tr tr r r'
    'b p p t t t'
    'n n n i i i';
  > div {
    padding: 10px;
    :hover {
      box-shadow: inset 0px 0px 5px #ddd;
    }
  }
`
export const VisibleInput = styled.div`
  grid-area: v;
  display: grid;
  place-items: center;
  background-color: ${highlight};
`
export const WordInput = styled.div`
  grid-area: word;
  display: grid;
  place-items: center;
  background-color: ${trilight};
`
export const AltInput = styled.div`
  grid-area: a;
  // grid-template-columns: 1fr;
  // grid-template-rows: auto minmax(50px, auto);
  // grid-auto-flow: column;
  // background-color: red;
  background-color: ${trilight};
`
export const PronInput = styled.div`
  grid-area: p;
  background-color: ${trilight};
`
export const ImgInput = styled.div`
  grid-area: i;
  display: flex;
  flex-direction: column;
  background-color: ${secondlight};
`
export const TransInput = styled.div`
  grid-area: tr;
  background-color: ${trilight};
`
export const RecInput = styled.div`
  grid-area: r;
  background-color: ${secondlight};
`
export const NoteInput = styled.div`
  grid-area: n;
  background-color: ${secondlight};
`
export const TagInput = styled.div`
  grid-area: t;
  background-color: ${secondlight};
`
export const ButtonInput = styled.div`
  grid-area: b;
  background-color: ${highlight};
`
export const MultiInput = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(50px, auto);
  grid-auto-flow: column;
  grid-row-gap: 10px;
`
