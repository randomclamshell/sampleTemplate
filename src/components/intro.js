import React from 'react'

import Slide from 'react-reveal/Slide';
import FadeIn from 'react-fade-in';


import Container from 'react-bootstrap/Container'

const introStyle = {
     textAlign: 'center',
     fontSize: 'auto',
     paddingTop: '40px',
     fontFamily: 'Lexend Peta',
     color: 'black'
}

const btn = {
     textAlign: 'center',
     padding: '15px',
     color: 'black',
     fontSize: '6vh'
     
}

const headline = {
     textAlign: 'center',
     fontSize: 'auto',
paddingTop: '25px',
     fontFamily: 'Lexend Peta',
     color: 'black',
     fontSize: '5vh'
}

const red = {
     color: '#ff5e6c',
   
}




function Intro() {
     return(
<Container fluid>
          <div>
             


          <div>

<h1 style={headline}>My name is <span style={red}>Khalid</span> and  I am putting the <span style={red}>human touch</span> back into the recruiting world. <span style={red}>One candidate at a time</span></h1>

</div>

               

             <div>

             <br /><br /><br />
             <FadeIn delay={1500}>
<Slide bottom>
<h1 style={introStyle}>Now, you might be wondering <span style={red}>what's the point of this?</span></h1>
</Slide>
</FadeIn>
</div>

<br />
<FadeIn delay={2000}>
<Slide bottom>
<h3 style={btn}>Let's find out..</h3>
</Slide>
</FadeIn>


<br /><br />

<div>
 
  </div>

          </div>


<div>
    
  </div>
          </Container>
     )
}

export default Intro