import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Zoom from 'react-reveal/Zoom';

const center = {
     textAlign: 'center',
     fontSize: '90px',
     color: 'white'
}

const titleStyle = {
     fontFamily: 'Roboto slab',
     fontSize: '170px',
     padding: '10px',
     color: '#6de808'
}

const colStyle = {
     fontFamily: 'Lexend Peta',
     fontSize: '30px',
     color: 'white'
}

const em = {
     color: 'red'
}



function HiringArea() {
     return (
          <div>
<Row>
  <Col >
  
  <h1 style={titleStyle}>Hiring..</h1>

  </Col>
  <Zoom>
  <Col style={colStyle}>
<p> is a <span style={em}>puzzle.</span></p>
<p> is a <span style={em}>long</span> process.</p>
<p> <span style={em}>for fit is even harder.</span></p>
<p> based on a resume is <span style={em}>flawed</span></p>

<p><span style={em}>doesn't account for future potential.</span></p>

</Col>
</Zoom>
</Row>
<br /> <br />
<Zoom>
<h1 style={center}>So let's skip that resume ;)</h1>
</Zoom>
          </div>
     )
}

export default HiringArea