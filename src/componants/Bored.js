import React from 'react'

import Box from './Box'
import './Bored.css'


export const Bored = ({board,onClick}) => {
  return (
    <div className='board'>
        {board.map((value,idx) => {
            return <Box value={value} onClick = {() => onClick(idx)} />
        })}
    </div>
  )
}
