import React from 'react'
import styled from 'styled-components'
import {useSelector } from 'react-redux'

const SummationTable = () => {
  const {TransformedRawData} = useSelector(state => state.TransformedRawData)
  return (
    <S_SummationTable className='center'>
        <div className="table outer">
            <div className="column 0">
                <span className='title'>Value</span>
                {
                  TransformedRawData.map(entry => {
                    return <span className='entry'>{entry.valueNumber.toFixed(0)}</span>
                  })
                }
            </div>
            <div className="column 1">
                <span className='title'>Real</span>
                {
                  TransformedRawData.map(entry => {
                    return <span className='entry'>{entry.realSum.toFixed(1)}</span>
                  })
                }
            </div>
            <div className="column 2">
                <span className='title'>Imag</span>
                {
                  TransformedRawData.map(entry => {
                    return <span className='entry'>{entry.imaginarySum.toFixed(1)}</span>
                  })
                }
            </div>
            <div className="column 3">
                <span className='title'>Intensity</span>
                {
                  TransformedRawData.map(entry => {
                    return <span className='entry'>{entry.intensity.toFixed(1)}</span>
                  })
                }
            </div>
            <div className="column 4">
                <span className='title'>Phase</span>
                {
                  TransformedRawData.map(entry => {
                    return <span className='entry'>{entry.phase.toFixed(1)}</span>
                  })
                }
            </div>
        </div>
    </S_SummationTable>
  )
}

const S_SummationTable = styled.div`
  width: 40%;
    > .table.outer{
      flex-grow: 0;
      display: flex;
      flex-direction: row;
      border: 2px solid white;
      > .column{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 5px;
        > .entry{
          /* padding: 0 5px; */
          width: 70px;
          padding: 1px 0;
          font-family: monospace;
          text-align: right;
        }
        > .title{
          width: 100%;
          text-align: right;
          padding: 5px 5px;
          /* margin: 0 5px 5px 5px; */
          border-bottom: 2px solid white;
          background-color: white; color: black;
        }
      }
    }
`

export default SummationTable