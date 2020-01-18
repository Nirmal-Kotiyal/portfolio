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
        <CardTitle style={{fontFamily:"Open Sans",fontWeight:900, color: '#555', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} >Login-System-With-MongoDB</CardTitle>
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
else if(this.state.activetab===1){
    return(
      <div className="projectcard">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >MongoDB</CardTitle>
        <CardText>
          Mongo db Project
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
         <Tab>MongoDB</Tab>
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