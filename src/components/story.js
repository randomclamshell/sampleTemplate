import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const padding = {
     padding: '40px',
     paddingTop: '30px',
     color: 'white',
     textAlign: 'center',
     fontSize: '30px'
}

function Story() {
     return(


        <div style={padding}>
               <h3>There is SO MUCH more to my story. Bringing me onto your recruiting team will help bring BLANK to new heights</h3>

               <br /><br /><br />

<h1>What BLANK gets with me:</h1>
<br /><br /><br />
<Row>
     
     

<Col>

<h1>A recruiter with a 98% close rate</h1>
<h1>A data-driven team player with experience in streamling operations</h1>

</Col>
<Col>
<h1>An ameteur chef</h1>
<h1>An expert mario maker 2 player</h1>
<h1>Just..terrible dad jokes</h1>

</Col>


</Row>

<br /><br /><br />

<h1>Interested in learning more?</h1>
        </div>
     )



}

export default Story