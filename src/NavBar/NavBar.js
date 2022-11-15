import React, { useState } from 'react'
import styled from 'styled-components'
import TimeElement from './TimeElement'

const NavBar = () => {

  //Live Time
  const [time, setTime] = useState(new Date().toLocaleString())
  const timeV = new Date().toLocaleString()
  setInterval(() => {
    setTime(new Date().toLocaleString())
  }, 1000)

  return (
    <S_NavBar className='center navbar'>
        <nav>
            <ul>
                <li><a href="">Fourier Transform</a></li>
                <li><a href="">Github</a></li>
                <li><a href="">Contact</a></li>
                <TimeElement time={time}/>
            </ul>
        </nav>
    </S_NavBar>
  )
}


// Styles
const S_NavBar = styled.header`
    width: 100%;
    color: black;
    background-color:white;
    >nav{
        width: 100%;
        display: flex;
    }
    margin-bottom: 50px;
    & ul{
        width: 100%;
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px white solid;
        > li{
            margin-right: 0;
            border-right: black 2px solid;
            > a{
                display: block;
                height: 50px;
                padding: 0 50px;
                text-decoration: none;
                display: flex;
                align-items: center; justify-content: center;
                border-right: 1px solid white; 
                &:hover{
                    background-color: white; color: black;
                    text-decoration: underline black;
                }
            }
            &:first-of-type a{
                /* text-decoration: ; */
            }
        }
        & #timeElement{
                height: 100%;
                flex-grow: 1;
                background-color: black;
                color: white;
            }
    }
`

export default NavBar