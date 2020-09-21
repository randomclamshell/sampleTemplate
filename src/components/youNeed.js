import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';


const titleStyle = {
          textAlign: 'center',
          padding: '40px',
          fontSize: '4vh',
          fontFamily: 'Lexend Peta',
          color: '#ff5e6c'
}

const bodyStyle = {
     fontSize: '2vw',
     fontFamily: 'Roboto slab',
     color: '#feb300'
     }

     const imgStyle = {
          height: '30vw',
          width: 'auto',
         paddingBottom: '5vh',
     
     }


const center = {
    
     color: '#ffaaab',
     fontSize: '12vh, 10vw',
     textAlign: 'center',
    
}


function Youneed(){
     return(

          <div>



<h1 style={titleStyle}>You need someone who can:
</h1>
<Fade>

<Row style={bodyStyle}>
<Col>
<Roll top>
<h3>Build teams as they scale</h3>
<img style={imgStyle} src='https://cdn.abcotvs.com/dip/images/5290492_050819-wtvd-meth-in-legos-main-vid.jpg?w=800&r=16%3A9'></img>
</Roll>
<br />
<br />
</Col>
<Col>
<Roll bottom>
<h3>Streamline recruiting processes</h3>
<img style={imgStyle} src='https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/UD7CEz6/videoblocks-animation-high-speed-rail_razk5xfkm_thumbnail-1080_01.png'></img>
</Roll>
<br /><br />
</Col>
</Row>

<Row style={bodyStyle}>
  <Col>
  <Roll left>
<h3>Help build a culture of inclusion and diversity</h3>
<img style={imgStyle} src='https://i.ytimg.com/vi/hxSfYMvBU9E/maxresdefault.jpg'></img>
</Roll>
<br /><br />
</Col>
<Col>
<Roll right>
<h3>Draw in and retain quality talent</h3>
<img style={imgStyle} src='https://wp-media.petersons.com/blog/wp-content/uploads/2017/12/10124351/luca-bravo-217276-unsplash.jpg'></img>
</Roll>
<br /><br />
</Col>
</Row>


</Fade>
          </div>
     )
}

export default Youneed