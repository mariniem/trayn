import styled from 'styled-components/macro'
import React from 'react'
import Home from '../src/Icons/Footer/Home.svg'
import Plus from '../src/Icons/Footer/Plus.svg'
import Heart from '../src/Icons/Footer/Heart.svg'
import TimerWorkout from '../src/Icons/Footer/TimerWorkout.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  const Footer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    background: #647d91;
    height: 55px;
    width: 100%;
    border: 1px solid transparent;
    bottom: 0;
  `
  const NavButton = styled.button`
    border: none;
    background: none;
  `

  return (
    <Footer>
      <NavButton>
        <Link to="/Home">
          <img src={Home}></img>
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/Create">
          <img src={Plus}></img>
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/Favorites">
          <img src={Heart}></img>
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/Workout">
          <img src={TimerWorkout}></img>
        </Link>
      </NavButton>
    </Footer>
  )
}