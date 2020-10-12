const { default: styled } = require('styled-components')

export const InputGrid = styled.div`
  background-color: #bbb;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 2px;
  grid-template-areas:
    'word word word a a a' 'p p p i i i' 'tr tr tr i i i'
    't t t i i i' 'r r r n n n' 'b b b b b b';
  div {
    padding: 5px;
    background-color: #fff;
  }
`

export const WordInput = styled.div`
  grid-area: word;
  display: grid;
  place-items: center;
`
export const AltInput = styled.div`
  grid-area: a;
`
export const PronInput = styled.div`
  grid-area: p;
`
export const ImgInput = styled.div`
  grid-area: i;
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
`
