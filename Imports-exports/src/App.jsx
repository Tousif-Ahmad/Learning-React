import React from 'react'
import "./App.css"
import Header,  {Card, Card2} from './Header'
import reactLogo from "./assets/react.svg"
import {sum} from "./utilities.js"
import data from "./data.json";
import { useState} from 'react'

const App = () => {
  sum(10,20);
  
  console.log(data);
  return (
    <>
      <Header/>
      <Card/>
      <Card2/>
      <img src={reactLogo} alt="" />
    </>
  )
}

export default App