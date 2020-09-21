import React from 'react'
import Bounce from 'react-reveal/Bounce'


     const titleStyle = {
        
          paddingTop: '10px',
          fontSize: '5vh',
          fontFamily: 'Lexend Peta',
          color: '#ff5e6c'
}

const bodyStyle = {
     fontSize: '3vh',
     fontFamily: 'Roboto slab',
     padding: '20px',
     
     }

const h1 = {
     color: '#ff5e6c',
     paddingTop: '5vh',
    
}

const sub = {
     color: '#feb300',
     padding: '2vh'
}

const img = {
   width: '10vh',
     height: '20vh'
}
  


function YouGet() {
     return (

          <div>
               <br />

<h1 style={titleStyle}>With me becoming a BLANK, you would be getting: </h1>
<div style={bodyStyle}>
     <Bounce left>
<h1 style={h1}>A strategist </h1>
</Bounce>
<Bounce right>
<h5 style={sub}>Ideas without any real action remain ideas. I love working towards 'outthere' ideas </h5>

</Bounce>

<Bounce left>
<h1 style={h1}>A <em>TECHNICAL</em> technical recruiter</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>As a developer, I can dive much deeper into roles with technical candidates and screen better.</h5>


</Bounce>


<Bounce left>
<h1 style={h1}>A 'purple squirrel'</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>My non-traditional experience has given me an <span style={h1}>arsenal</span> of tools--from sales and marketing to operations, customer support, and people management. I will step up to ANY task. It doesn't matter what. Bring it on.</h5>

</Bounce>


<Bounce left>
<h1 style={h1}>Direct and honest</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>How can someone grow without self-awareness? Being able to provide and accept feedback is essential to help a team succeed.</h5>

</Bounce>


<Bounce left>

<h1 style={h1}>Humility</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>The greatest wisdom consists in knowing one’s own follies. – Madeleine de So</h5>



</Bounce>


<Bounce left>
<h1 style={h1}>Passion & empathy</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>Candidates trust a recruiter to be able to help find them a better quality of life. This is a responsiblity I take seriously.</h5>

</Bounce>


<Bounce left>
<h1 style={h1}>Fearlessness</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>Greatness comes to those are push past their fears. If it worked for Batman, it will work for anyone. </h5>

</Bounce>



<Bounce left>
<h1 style={h1}>Grit and hustle</h1>
</Bounce>
<Bounce right>
<h5 style={sub}>I've been on teams as small as three to being a Senior Support agent on a global team of 200, so I know and appreciate the level of work it takes to reach your goals. </h5>

</Bounce>





</div>
          </div>
     )
}

export default YouGet