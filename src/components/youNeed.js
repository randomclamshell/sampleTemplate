import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';

const titleStyle = {
          textAlign: 'left',
          padding: '40px',
          fontSize: '70px',
          fontFamily: 'Lexend Peta',
          color: '#6de808'
}

const bodyStyle = {
     fontSize: '30px',
     fontFamily: 'Roboto slab',
     color: 'white'
     }


const center = {
     textAlign: 'center',
     color: 'white',
     fontSize: '40px',
     padding: '40px'
}


function Youneed(){
     return(

          <div>

<br /><br /><br /><br /><br />


<h1 style={titleStyle}>You need a passionate team player who can:
</h1>
<Fade>
<br /><br /><br /><br />
<Row style={bodyStyle}>
<Col>
<Roll top>
<h1>Build teams as they scale</h1>
<img src='https://placekitten.com/g/500/300'></img>
</Roll>
<br />
<br />
</Col>
<Col>
<Roll bottom>
<h1>Streamline recruiting processes</h1>
<img src='https://placekitten.com/g/500/300'></img>
</Roll>
<br /><br />
</Col>
</Row>

<Row style={bodyStyle}>
  <Col>
  <Roll left>
<h1>Help build a culture of inclusion and diversity</h1>
<img src='https://placekitten.com/g/500/300'></img>
</Roll>
<br /><br />
</Col>
<Col>
<Roll right>
<h1>Draw in and retain good talent</h1>
<img src='https://placekitten.com/g/500/300'></img>
</Roll>
<br /><br />
</Col>
</Row>
<Slide><h1 style={center}>Bottom line, someone who does with they love, and loves what they do</h1></Slide>
</Fade>
          </div>
     )
}

export default Youneed