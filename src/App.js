import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import  Button  from 'react-bootstrap/Button';
import  Jumbotron  from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import HiringArea from './components/hiringArea'
import Intro from './components/intro'
import Youneed from './components/youNeed'
import YouGet from './components/youGet'
import Story from './components/story'

import './App.css'

const img = {
  width: '600px',
  height: '600px',
zIndex: '-3',
float: 'left'
}



const centerTxt = {
  textAlign: 'center'
}

function App() {
  return(
<Container fluid>
  



<h1 style={centerTxt}>KhalidLovesCompany.com</h1>
<br /><br /><br /><br />

<br /><br /><br /><br /><br />

  <Intro />
  
  <br /><br />
<HiringArea />



<br /><br /><br />
<Youneed />
<br /><br />
<YouGet />


<Story />

<Button>Let's chat!</Button>


<div>insert video of myself</div>
</Container>
  )
}
export default App;
