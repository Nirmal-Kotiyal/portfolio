import React,{Component} from 'react'
import Typed from 'react-typed'
import {Grid,Cell,Textfield} from 'react-mdl'


export default class Contact extends Component{

state={
    name:'',
    email:'',
    message:''
    
}


render(){
 const roles=['Fill','The','Form','Below'];
    return(
      <div className="contact-form">
     <form action="POST" netlify
     name="contact"
     method="post"
     data-netlify="true"
     data-netlify-honeypot="bot-field"
     >
       <input type="hidden" name="bot-field" value="contact" />
      <Grid>

      <Cell className="contactform-text" col={12}>
      <h1>Want To Know More!!!</h1>
      </Cell>
      <Cell className="contactform-text" col={12}>
      <Typed className="self-typed"
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
      </Cell>
        
      <Cell className="contactform-row1" col={6}>
      <h1>Name</h1>
      <Textfield
    label=""
    name="name"
    required
    id="name"
    style={{width:"100%",
    marginLeft:"40px"}}
    />
      </Cell>

      <Cell className="contactform-row2" col={6}>
      <h1>Email</h1>  
      <Textfield
      type="email"
      name="email"
      required
    label=""
    id="email"
    style={{width:"100%",
    marginLeft:"40px"
    }}
    />
      </Cell>
    <Cell className="contactform-message" col={12}>
      <h1>Message</h1>
      <Textfield
    label=""
    required
    name="message"
    id="message"
    rows={3}
    style={{width:"50%",
    marginLeft:"40px"}}
/>
    </Cell>

    <Cell className="contactform-button" col={12}>
    <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
      Send
</button>
    </Cell>


    </Grid>  
     </form>
     </div>
    )
}

} 