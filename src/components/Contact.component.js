import React,{Component} from 'react'
import Typed from 'react-typed'
import {Grid,Cell,Textfield} from 'react-mdl'


export default class Contact extends Component{

state={
    name:'',
    email:'',
    message:''
    
}

onchangename=(e)=>{
  this.setState({
    name:e.target.value
  })
console.log(this.state.name)
}

onchangeemail=(e)=>{
  this.setState({
    email:e.target.value
  })
console.log(this.state.email)
}

onchangemessage=(e)=>{
  this.setState({
    message:e.target.value
  })
console.log(this.state.message)
}



render(){
 const roles=['Fill','The','Form','Below'];
    return(
      <div className="contact-form">
     <form>
      <Grid>

      <Cell className="contactform-text" col={12}>
      <h1>Want To Know More!!!</h1>
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
    onChange={this.onchangename}
    label=""
    style={{width:"100%",
    marginLeft:"40px"}}
    />
      </Cell>

      <Cell className="contactform-row2" col={6}>
      <h1>Email</h1>  
      <Textfield
    onChange={this.onchangeemail}
    label=""
    style={{width:"100%",
    marginLeft:"40px"
    }}
    />
      </Cell>
    <Cell className="contactform-message" col={12}>
      <h1>Message</h1>
      <Textfield
    onChange={this.onchangemessage}
    label=""
    rows={3}
    style={{width:"50%",
    marginLeft:"40px"}}
/>
    </Cell>
    </Grid>  
     </form>
     </div>
    )
}

} 