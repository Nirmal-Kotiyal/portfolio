import React,{Component} from 'react'
import { Grid,Cell,Tabs, Tab, Card ,CardTitle,CardActions,Button,CardText,CardMenu,IconButton} from 'react-mdl';

export default class Projects extends Component{

constructor(props){
    super(props);
    this.state={
        activetab:0
    }
}

onclickreactprojecttab1=()=>{

}

togglecategories=()=>{
    console.log(this.state.activetab);
if(this.state.activetab===0){
    return(
      <div className="projectcard">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{fontFamily:"Open Sans",fontWeight:900, color: '#555', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} ></CardTitle>
        <CardText style={{fontFamily:"Open Sans",fontWeight:300,color:'#555'}}>
          BugProgressTracker With Login and Signup 
        </CardText>
        <CardActions border>
          <Button colored><a href="https://github.com/Nirmal-Kotiyal/bug-progress-tracker" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>GitHub</a></Button>
          <Button colored><a href="https://frozen-sands-93256.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>Live Demo</a></Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </div>
    )
    }
else if(this.state.activetab===1){
    return(
      <div className="projectcard">
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{fontFamily:"Open Sans",fontWeight:900, color: '#555', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} ></CardTitle>
      <CardText style={{fontFamily:"Open Sans",fontWeight:300,color:'#555'}}>
        Login and SignUP page with authentication and session verification using mongoDB 
      </CardText>
      <CardActions border>
        <Button colored><a href="https://github.com/Nirmal-Kotiyal/nodejs-mongodb-login-system" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>GitHub</a></Button>
        <Button colored><a href="https://quiet-beyond-26748.herokuapp.com" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>Live Demo</a></Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
    </div>
    )
}
else{
    return(
      <div className="projectcard">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBobzGJEci3aMRhyqRTp7QBlIW8QyE_Eve4mMGti7MdeHKpx-S&s) center / cover'}} >Android</CardTitle>
        <CardText>
          Android Project
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </div>
    )
}

}

render(){
    return(
     <div className="projectcard">
         <Tabs activeTab={this.state.activetab} onChange={tabId=>this.setState({activetab:tabId})} ripple>
         <Tab>React</Tab>
         <Tab>NodeJs</Tab>
         <Tab>Android</Tab>      
         </Tabs>
         <Grid>
            <Cell col={12}>
              <div className="content">{this.togglecategories()}</div>
            </Cell>
          </Grid>
        </div>
    )
}

} 