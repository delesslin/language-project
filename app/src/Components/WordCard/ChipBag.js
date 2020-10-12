import { Chip, Typography } from '@material-ui/core'
import React from 'react'
import { ResultTags } from '../../styled/Content/Search'

const ChipBag = ({ label = '', chips = [], hrefGen = null }) => {
  if (chips.length < 1) return null
  return (
    <ResultTags>
      {label.length > 0 ? <Typography>{label}:</Typography> : null}
      {chips.map((chip, i) => {
        if (hrefGen === null) {
          return <Chip key={i} label={chip} variant='outlined' />
        } else {
          return (
            <Chip
              key={i}
              label={chip}
              component='a'
              href={hrefGen === null ? '' : hrefGen(chip)}
              clickable
              variant='outlined'
            />
          )
        }
      })}
    </ResultTags>
  )
}

export default ChipBag
