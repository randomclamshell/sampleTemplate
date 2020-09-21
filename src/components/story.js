import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const padding = {
     padding: '40px',
     paddingTop: '30px',
     color: '#ff5e6c',
     textAlign: 'center',
     fontSize: '12px'
}


const deets = {
     fontSize: '5vh',
     paddingTop: '30px'

}

const center = {
     textAlign: 'center',
     fontSize: '2vh',
     color: '#ff5e6c',

}

const imgFormat = {
     height: '30vh',

}

const blk = {
     color: 'black'
}

function Story() {
     return(


        <div style={padding}>
               <h4>There is <span style={blk}>SO MUCH</span> more to my story. Bringing me onto your recruiting team will help bring BLANK to new heights</h4>

              
               <br /><br />
<h1>What BLANK gets with me:</h1>
<br />

<img style={imgFormat} src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/119126298_10100953191425527_4747531377988428807_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=yylAPoqrgDAAX9xGYN-&_nc_ht=scontent-lga3-1.xx&oh=eb9626e97eb3cbec3ab8560816b9c11e&oe=5F8924B0'></img>

<br /><br /><br /><br />
<div style={deets}>


<h4>A recruiter with a 98% close rate</h4>

<h4>A data-driven team player with experience in streamling operations</h4>

<h4>An expert mario maker 2 player</h4>

<h5 style={center}>Just..terrible dad jokes </h5>

</div>
<br />
<div style={center}>
<h5>Interested in learning more?</h5>
<h5>Khalid@randomClamshell.io</h5>
<h5>732.694.0833</h5>
<h3><a href={'https://linkedin.com/in/iqbalkhalid'} target={'_blank'}>LinkedIn</a></h3>


<h2>Looking forward to hearing from you :)</h2>
</div>
        </div>
     )



}

export default Story