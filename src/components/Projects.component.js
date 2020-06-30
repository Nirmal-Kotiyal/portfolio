/* eslint-disable jsx-a11y/alt-text */
import React,{Component} from 'react'
import { Grid,Cell,Tabs, Tab, Card ,CardTitle,CardActions,Button,CardText,CardMenu,IconButton} from 'react-mdl';
import Carousel from 'react-material-ui-carousel'
export default class Projects extends Component{

constructor(props){
    super(props);
    this.state={
        activetab:0
    }
}


togglecategories=()=>{
    console.log(this.state.activetab);
    const images = ["/images/BugTracker/React.jpg","/images/BugTracker/login-system.jpg","/images/BugTracker/home-page.jpg","/images/BugTracker/list-bugs.jpg"]
    const sortvisualizerimages = ["/images/SortVisualizer/React.jpg","/images/SortVisualizer/Home-page.jpg","/images/SortVisualizer/Bubble-Sorting.jpg","/images/SortVisualizer/Merge-Sorting.jpg","/images/SortVisualizer/End.jpg",]
    if(this.state.activetab===0){
    return(
      <div className="projectcard">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
   <CardTitle style={{justifyContent:"center",minHeight:'261px'}}>
<Carousel autoplay  animation={"slide"} interval={2500}>
  {images.map(image=><img style={{maxHeight:"250px",width:'100%'}} src={image}></img>)}
  </Carousel>     
   </CardTitle>
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
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
   <CardTitle style={{justifyContent:"center",minHeight:'261px'}}>
<Carousel autoplay  animation={"slide"} interval={2500}>
  {sortvisualizerimages.map(image=><img style={{maxHeight:"250px",width:'100%'}} src={image}></img>)}
  </Carousel>     
   </CardTitle>
        <CardText style={{fontFamily:"Open Sans",fontWeight:300,color:'#555'}}>
          Sorting Visualizer 
        </CardText>
        <CardActions border>
          <Button colored><a href="https://github.com/Nirmal-Kotiyal/SortingVisualizer-React" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>GitHub</a></Button>
          <Button colored disabled>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </div>
    )
    }
else if(this.state.activetab===1){
  const BrickBreaker = ["/images/BrickBreaker/java.png","/images/BrickBreaker/Start.JPG","/images/BrickBreaker/PowerUps.JPG","/images/BrickBreaker/SlowMo.JPG","/images/BrickBreaker/End.JPG","/images/BrickBreaker/Won.JPG"];
  const PathFinding = ["/images/PathFinding/java.png","/images/PathFinding/Start.JPG","/images/PathFinding/End.JPG"];
  
  return(
      <div className="projectcard">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{justifyContent:'center',minHeight:'261px'}}>
          <Carousel autoplay  animation={"slide"} interval={2500}>
    {BrickBreaker.map(image=><img style={{maxHeight:"200px",width:'100%'}} src={image}></img>)}
    </Carousel> 
          </CardTitle>
          <CardText style={{fontFamily:"Open Sans",fontWeight:300,color:'#555'}}>
            BrickBreaker Game With PowerUps
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/Nirmal-Kotiyal/BrickBreaker" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>GitHub</a></Button>
            <Button colored disabled>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{justifyContent:'center',minHeight:'261px'}}>
          <Carousel autoplay  animation={"slide"} interval={2500}>
    {PathFinding.map(image=><img style={{maxHeight:"200px",width:'100%'}} src={image}></img>)}
    </Carousel> 
          </CardTitle>
          <CardText style={{fontFamily:"Open Sans",fontWeight:300,color:'#555'}}>
            A* PathFinding Visualizer
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/Nirmal-Kotiyal/PathFindingVisualization" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>GitHub</a></Button>
            <Button colored disabled>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    )
}
else if(this.state.activetab===2){
  const tictactoeimages = ["/images/TicTacToe/index.png","/images/TicTacToe/home-page.png","/images/TicTacToe/winning.png"]
  const reminderappimages = ['/images/ReminderApp/index.jpg','/images/ReminderApp/homepage.png','/images/ReminderApp/time.png','/images/ReminderApp/reminder.png']  
  const newsappimages = ['/images/NewsApp/unnamed.png','/images/NewsApp/bootsplash.png','/images/NewsApp/homepage.png','/images/NewsApp/website.png',]
  return(
      <div className="projectcard">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{justifyContent:'center',minHeight:'261px'}}>
        <Carousel autoplay  animation={"slide"} interval={2500}>
  {tictactoeimages.map(image=><img style={{maxHeight:"200px",width:'100%'}} src={image}></img>)}
  </Carousel> 
        </CardTitle>
        <CardText style={{fontFamily:"Open Sans",fontWeight:300,color:'#555'}}>
          Two Player Tic-Tac-Toe Game
        </CardText>
        <CardActions border>
        <Button colored><a href="https://github.com/Nirmal-Kotiyal/tic-tac-toe" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>GitHub</a></Button>
          <Button colored disabled>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        {/* <CardTitle style={{fontFamily:"Open Sans",fontWeight:900, color: '#555', height: '176px', background: 'url(https://lh3.googleusercontent.com/TIOhJr7h_MNp5Ogk0ECRYhvQ4M4omoZoD205gKLv8-phSsBHa94PLAuE9cXFN9P4D5E) center / cover'}} ></CardTitle> */}
        <CardTitle style={{justifyContent:'center',minHeight:'261px'}}>
        <Carousel autoplay animation={"slide"} interval={2500}>
  {newsappimages.map(image=><img style={{maxHeight:"200px",width:'100%'}} src={image}></img>)}
  </Carousel> 
        </CardTitle>
        <CardText style={{fontFamily:"Open Sans",fontWeight:300,color:'#555'}}>
        News app using google news api
        </CardText>
        <CardActions border>
        <Button colored><a href="https://github.com/Nirmal-Kotiyal/News-App" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>GitHub</a></Button>
          <Button colored disabled>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{justifyContent:'center',minHeight:'261px'}}>
        <Carousel autoplay animation={"slide"} interval={2500}>
  {reminderappimages.map(image=><img style={{maxHeight:"200px",width:'100%'}} src={image}></img>)}
  </Carousel> 
        </CardTitle>
        <CardText style={{fontFamily:"Open Sans",fontWeight:300,color:'#555'}}>
          Reminder App using Alarm Service and Broadcast Reciever
        </CardText>
        <CardActions border>
        <Button colored><a href="https://github.com/Nirmal-Kotiyal/Reminder-App" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>GitHub</a></Button>
          <Button colored disabled>Live Demo</Button>
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
}

render(){
    return(
     <div>
         <Tabs activeTab={this.state.activetab} onChange={tabId=>this.setState({activetab:tabId})} ripple>
         <Tab>React</Tab>
         <Tab>Java</Tab>
         <Tab>Android</Tab>
         <Tab>NodeJs</Tab>      
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