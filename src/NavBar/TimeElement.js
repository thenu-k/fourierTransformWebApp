import React from 'react'
import styled from 'styled-components'

const TimeElement = (props) => {
  return (
    <S_TimeElement id='timeElement' className='center'>
        <p>Tempus Edax Rerum <span>{props.time}</span></p>
    </S_TimeElement>
  )
}

const S_TimeElement = styled.li`
    & span{
        margin-left: 50px;
        font-family: monospace;
        font-weight: 800;
    }
`

export default TimeElement