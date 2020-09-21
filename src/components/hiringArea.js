import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Fade from 'react-fade-in'
import Zoom from 'react-reveal/Zoom';

const center = {
     textAlign: 'center',
     fontSize: '6vh',
     padding: '8vh'
}

const titleStyle = {
     fontFamily: 'Roboto slab',
     fontSize: '10vh',
     color: 'black',
     textAlign: 'center',
     paddingLeft: '2vh',
     paddingTop: '5vh'
}

const colStyle = {
     fontFamily: 'Lexend Peta',
     fontSize: '3vh',
     color: '#feb300',
     textAlign: 'left'
}

const em = {
     color: '#ff5e6c',
     width: '10%'
}



function HiringArea() {
     return (
          <div>
               
<Row>

  <Col sm={6}>
  
  <h1 style={titleStyle}>Hiring..</h1>
  
  </Col>

<Zoom>
<Col style={colStyle}>
  <p> is a <span style={em}>puzzle.</span></p>
<p> is a <span style={em}>long</span> process.</p>
<p> <span style={em}>for fit is even harder.</span></p>
<p> based on a resume is <span style={em}>flawed</span></p>
</Col>
</Zoom>



</Row>
<Row>
<Zoom>
<h1 style={center}>So let's skip that resume!</h1>
</Zoom>
</Row>
          </div>
     )
}

export default HiringArea