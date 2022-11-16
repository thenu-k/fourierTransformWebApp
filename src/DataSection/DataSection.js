import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {setRawData} from '../StateManager/mainSlice'

const DataSection = () => {
  const dispatch = useDispatch()
  const sumbitData  = (e) => {
    e.preventDefault()
    let newData = e.target.querySelector('textarea').value
    newData = newData.split(',')
    const parsedData =[]
    for(let count = 0; count< newData.length; count++){
      parsedData.push({
        name: count, uv: newData[count]
      })
    }
    dispatch(setRawData(parsedData))
  }
  return (
    <S_DataSection className='center'>
      <h3>The DFT</h3>
      <p>
        The Discrete Fourier Transform (DFT) converts a finite sequence of equally-spaced samples of a function into a same-length sequence of equally-spaced samples of the discrete-time Fourier transform (DTFT), which is a complex-valued function of frequency.
      </p>
      <form className="dataEntry center" onSubmit={sumbitData}>
        <h3>Data entry</h3>
        <p>
          Enter the amplitude values as comma seperated numbers. Do not incude spaces.
        </p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button className='submitButton'>Sumbit</button>
      </form>

    </S_DataSection>
  )
}

const S_DataSection = styled.div`
    width: 40%;
    height: auto;
    background-color: inherit;
    color: white;
    flex-grow: 0;
    flex-direction: column;
    justify-content: unset;
    & h3{
      text-decoration: underline;
      width: 100%;
      margin-bottom: 25px;
    }
    & p{
      margin-bottom: 25px;
    }

    & .dataEntry{
      margin-top: 25px;
      width: 100%;
      flex-direction: column;
      justify-content: unset;
      align-items: unset;
      >textarea{
        height: 100px; width: 100%;
        background-color: black; color: white;
        border: 2px solid white;
        margin-bottom: 25px;
        resize: none;
        font-family: monospace;
      }
    }
    & .submitButton{
      width: fit-content;
      background-color: white;
      color: black;
      padding: 10px 20px;
      &:hover{
        text-decoration: underline black;
        background-color: #eeee;
        cursor: pointer;
      }
    }
`

export default DataSection