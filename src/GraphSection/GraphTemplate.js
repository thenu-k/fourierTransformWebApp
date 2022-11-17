import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useSelector, useDispatch } from 'react-redux'


const GraphTemplate = ({data, title}) => {
  //Creating the axes
  if(data){
    const xValues = data.map(element =>  element.uv)
  }
  return (
   <S_GraphTemplate className='graphTemplate center'>
        <h2 className='center'>{title}</h2>
        <ResponsiveContainer width="90%" height='90%' style={{margin: 'auto', position: 'relative'}}>
            <LineChart data={data} margin={{top: 0, left: 0, bottom: 0, right: 0}}>
                <Line type="natural" dataKey="uv" stroke="white" strokeWidth={2}/>
                <XAxis stroke="white" strokeWidth={1} interval={1}/>
                <YAxis stroke="white" strokeWidth={1} interval={1}/>
                <CartesianGrid />
            </LineChart>
        </ResponsiveContainer>
   </S_GraphTemplate>
  )
}

const S_GraphTemplate = styled.div`
    height: 30vw; width:55%;
    flex-shrink: 0;
    background-color: black;
    border-radius: 25px;
    flex-direction: column;
    align-items: flex-start;

    > h2{
      padding:10px 50px;
      background-color:  white; color: black;
      margin-bottom: 50px;
      margin-left: 7%;
    }
`


export default GraphTemplate