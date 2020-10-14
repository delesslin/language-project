const { default: styled } = require('styled-components')

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  background-color: #555;
  grid-gap: 3px;
  grid-template-areas:
    'v word word a a a'
    'b tr tr tr r r'
    'b p p t t t'
    'n n n i i i';
  > div {
    padding: 10px;

    background-color: #fff;
  }
`
export const VisibleInput = styled.div`
  grid-area: v;
  display: grid;
  place-items: center;
  background-color: #fff;
`
export const WordInput = styled.div`
  grid-area: word;
  display: grid;
  place-items: center;
`
export const AltInput = styled.div`
  grid-area: a;
  // grid-template-columns: 1fr;
  // grid-template-rows: auto minmax(50px, auto);
  // grid-auto-flow: column;
  // background-color: red;
`
export const PronInput = styled.div`
  grid-area: p;
`
export const ImgInput = styled.div`
  grid-area: i;
  display: flex;
  flex-direction: column;
`
export const TransInput = styled.div`
  grid-area: tr;
`
export const RecInput = styled.div`
  grid-area: r;
`
export const NoteInput = styled.div`
  grid-area: n;
`
export const TagInput = styled.div`
  grid-area: t;
`
export const ButtonInput = styled.div`
  grid-area: b;
`
export const MultiInput = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(50px, auto);
  grid-auto-flow: column;
  grid-row-gap: 10px;
`
