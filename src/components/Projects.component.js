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
    const covidtracker = ["/images/CovidTracker/React.jpg","/images/CovidTracker/cases.jpg","/images/CovidTracker/recovered.jpg","/images/CovidTracker/death.jpg"]
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
  {covidtracker.map(image=><img style={{maxHeight:"250px",width:'100%'}} src={image}></img>)}
  </Carousel>     
   </CardTitle>
        <CardText style={{fontFamily:"Open Sans",fontWeight:300,color:'#555'}}>
          Covid-19 Tracker Using Disease.sh Api
        </CardText>
        <CardActions border>
          <Button colored><a href="https://github.com/Nirmal-Kotiyal/Covid19-Tracker" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>GitHub</a></Button>
          <Button colored><a href="https://gifted-shockley-e9ff75.netlify.app/" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>Live Demo</a></Button>
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
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{fontFamily:"Open Sans",fontWeight:900, color: '#555', height: '176px', background: 'url(data:image/png;base64,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'}} ></CardTitle>
      <CardText style={{fontFamily:"Open Sans",fontWeight:300,color:'#555'}}>
      Amazon Price Tracker Using WebScraping and Notifying User Through Nodemailer
      </CardText>
      <CardActions border>
        <Button colored><a href="https://github.com/Nirmal-Kotiyal/Amazon-Price-Tracker" target="_blank" rel="noopener noreferrer" style={{color:"#f5a623",textDecoration:"none",fontWeight:"600"}}>GitHub</a></Button>
        <Button colored disabled></Button>
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