import React,{Component} from 'react'
import { Grid,Cell,Tabs, Tab, Card ,CardTitle,CardActions,Button,CardText,CardMenu,IconButton} from 'react-mdl';
// import ImageSlider from './utils/ImageSlider'
import Carousel from 'react-material-ui-carousel'
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
    const images = ["/images/BugTracker/React.jpg","/images/BugTracker/login-system.jpg","/images/BugTracker/home-page.jpg","/images/BugTracker/list-bugs.jpg"]
if(this.state.activetab===0){
    return(
      <div>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        {/* <CardTitle style={{fontFamily:"Open Sans",fontWeight:900, color: '#555', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} ></CardTitle> */}
   <CardTitle style={{justifyContent:"center",paddingTop:'10px'}}>
<Carousel autoplay indicators={false} animation={"slide"} interval={2500}>
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
  const tictactoeimages = ["/images/TicTacToe/index.png","/images/TicTacToe/home-page.png","/images/TicTacToe/winning.png"]
  const reminderappimages = ['/images/ReminderApp/index.jpg','/images/ReminderApp/homepage.png','/images/ReminderApp/time.png','/images/ReminderApp/reminder.png']  
  const newsappimages = ['/images/NewsApp/unnamed.png','/images/NewsApp/bootsplash.png','/images/NewsApp/homepage.png','/images/NewsApp/website.png',]
  return(
      <div className="projectcard">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        {/* <CardTitle style={{fontFamily:"Open Sans",fontWeight:900, color: '#555', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} ></CardTitle> */}
        <CardTitle style={{justifyContent:'center',paddingTop:'10px'}}>
        <Carousel autoplay indicators={false} animation={"slide"} interval={2500}>
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
        <CardTitle style={{justifyContent:'center',paddingTop:'10px'}}>
        <Carousel autoplay indicators={false} animation={"slide"} interval={2500}>
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
        {/* <CardTitle style={{fontFamily:"Open Sans",fontWeight:900, color: '#555', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} ></CardTitle> */}
        <CardTitle style={{justifyContent:'center',paddingTop:'10px'}}>
        <Carousel autoplay indicators={false} animation={"slide"} interval={2500}>
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

}

render(){
    return(
     <div>
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


// import React,{useState} from 'react'
// import {Tabs,Tab} from 'react-mdl'
// import {Row,Col,Card} from 'antd';
// import ImageSlider from './utils/ImageSlider'
// function Projects() {
//   const {Meta} = Card
//   const [Activetab,setActivetab]  = useState(0)

// const togglecategories=()=>{
// if(Activetab===0){
//   return(
//     <div>
//     <Col lg={6} md={8} xs={24}>
//     <Card
//             size="small"
//             hoverable={true}
//             cover={<ImageSlider images={['/images/profile_pic1.jpg','/images/profile_pic1.jpg']} />}
//         >
//             <Meta
//                 title={'This is good'}
//                 description={'Testing'}
//             />
//         </Card>
//     </Col>
//     </div>
//   )
// }
// }


//   return (
//     <div>
//       <Tabs activeTab={Activetab} onChange={tabId=>setActivetab(tabId)} ripple>
//           <Tab>React</Tab>
//           <Tab>NodeJs</Tab>
//           <Tab>Android</Tab>      
//           </Tabs>
//           <Row align='middle' gutter={[16,16]}>
//             {togglecategories()}
//           </Row>
//     </div>
//   )
// }

// export default Projects