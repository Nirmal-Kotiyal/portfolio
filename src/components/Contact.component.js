import React,{Component} from 'react'
import Typed from 'react-typed'
import {Grid,Cell,Textfield} from 'react-mdl'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends Component{

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

handleSubmit = e => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...this.state })
  })
    .then(() => alert("Success!"))
    .catch(error => alert(error));

  e.preventDefault();
};

handleChange = e => this.setState({ [e.target.name]: e.target.value });



render(){
  
  const { name, email, message } = this.state;
  const roles=['Fill','The','Form','Below'];
    
  
  return(
      <div className="contact-form">
     <form method="POST"
     name="contact"
     onSubmit={this.handleSubmit}
     >
       <input type="hidden" name="contact" value="contact" />
      <Grid className="contactscroll">
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
    value={name} onChange={this.handleChange}
    // style={{width:"100%",
    // marginLeft:"40px"}}
    />
      </Cell>

      <Cell className="contactform-row2" col={6}>
      <h1>Email</h1>  
      <Textfield
      type="email"
      name="email"
      required
      value={email} onChange={this.handleChange}
    label=""
    id="email"
    // style={{width:"100%",
    // marginLeft:"40px"
    // }}
    />
      </Cell>
    <Cell className="contactform-message" col={12}>
      <h1>Message</h1>
      <Textfield
    label=""
    required
    value={message} onChange={this.handleChange}
    name="message"
    id="message"
    // style={{width:"100%",
    // marginLeft:"40px"}}
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