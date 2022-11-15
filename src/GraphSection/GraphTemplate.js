import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const GraphTemplate = () => {
  return (
   <S_GraphTemplate className='graphTemplate center'>
        <h2 className='center'>Amplitude vs Time</h2>
        <ResponsiveContainer width="90%" height='90%' style={{margin: 'auto', position: 'relative'}}>
            <LineChart data={data} margin={{top: 0, left: 0, bottom: 0, right: 0}}>
                <Line type="monotone" dataKey="uv" stroke="white" strokeWidth={2}/>
                <XAxis stroke="white" strokeWidth={1}/>
                <YAxis stroke="white" strokeWidth={1}/>
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


const data = [
    {
      name: 'Page A',
      uv: -4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
export default GraphTemplate