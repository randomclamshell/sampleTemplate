import React from 'react'
import Bounce from 'react-reveal/Bounce'


     const titleStyle = {
          textAlign: 'center',
          padding: '50px',
          fontSize: '40px',
          fontFamily: 'Lexend Peta',
          color: 'red'
}

const bodyStyle = {
     fontSize: '20px',
     fontFamily: 'Roboto slab',
     padding: '70px'
     }

const h1 = {
     color: 'red'
}

const sub = {
     color: 'white'
}
  


function YouGet() {
     return (

          <div>

<h1 style={titleStyle}>With me becoming a BLANK, you would be getting: </h1>
<div style={bodyStyle}>
     <Bounce left>
<h1 style={h1}>A strategist </h1>
</Bounce>
<Bounce right>
<h5 style={sub}>Ideas without any real action remain ideas. I love working towards 'outthere' ideas </h5>
<br /><br />
</Bounce>

<Bounce left>
<h3 style={h1}>A <em>TECHNICAL</em> technical recruiter</h3>
</Bounce>
<Bounce right>
<h5 style={sub}>I can dive much deeper into roles with technical candidates and screen better</h5>
<br /><br />
</Bounce>


<Bounce left>
<h1 style={h1}>A 'purple squirrel'</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>My non-traditional experience has given me an <span style={h1}>arsenal</span> of tools--from sales and marketing to operations and people management. I will step up to any task. It doesn't matter what.</h5>
<br /><br />
</Bounce>


<Bounce left>
<h1 style={h1}>Direct and honest</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>How can someone grow without self-awareness? Being able to provide and accept feedback is essential to help a team succeed</h5>
<br /><br />
</Bounce>


<Bounce left>

<h1 style={h1}>Humility</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>The greatest wisdom consists in knowing one’s own follies. – Madeleine de So</h5>
<br /><br />

</Bounce>


<Bounce left>
<h1 style={h1}>Passion & empathy</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>Candidates trust a recruiter to be able to help find them a better quality of life. This is a responsiblity I take seriously.</h5>
<br /><br />
</Bounce>


<Bounce left>
<h1 style={h1}>Fearlessness</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>Greatness comes to those are push past their fears. If it worked for Batman, it will work for anyone. </h5>
</Bounce>









</div>
          </div>
     )
}

export default YouGet