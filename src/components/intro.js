import React from 'react'

import Slide from 'react-reveal/Slide';
import FadeIn from 'react-fade-in';

import Typewriter from 'typewriter-effect';

const introStyle = {
     textAlign: 'center',
     fontSize: '50px',
     paddingBottom: '50px',
     fontFamily: 'Lexend Peta',
}

const btn = {
     textAlign: 'center',
     color: 'white',
     padding: '15px',
     color: 'white',
     fontSize: '50px'
     
}

const headline = {
     textAlign: 'center',
     padding: '40px',
     fontSize: '80px',
     fontFamily: 'Lexend Peta',
     color: 'red'
}

const red = {
     color: 'red',
     fontSize: '40',
   
}

function Intro() {
     return(

          <div>
             
<div>


   

             <h1 style={headline}>My dream is to BLANK BLANK BLANK and help build something great.</h1>

             </div>
             <br /><br /><br /><br /><br /><br /><br />    
             <FadeIn delay={1000}>
<Slide bottom>
<h1 style={introStyle}>Now, you might be wondering <span style={red}>what's the point of this?</span></h1>
</Slide>
</FadeIn>


<br />
<FadeIn delay={2000}>
<Slide bottom>
<h3 style={btn}>Let's find out..</h3>
</Slide>
</FadeIn>


<br /><br />

          </div>
     )
}

export default Intro