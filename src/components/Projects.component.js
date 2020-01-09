import React,{Component} from 'react'
import { Grid,Cell,Tabs, Tab, Card ,CardTitle,CardActions,Button,CardText,CardMenu,IconButton} from 'react-mdl';

export default class Projects extends Component{

constructor(props){
    super(props);
    this.state={
        activetab:0
    }
}

togglecategories=()=>{
    console.log(this.state.activetab);
if(this.state.activetab===0){
    return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    )
    }
else if(this.state.activetab===1){
    return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >MongoDB #1</CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    )
}
else{
    return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBobzGJEci3aMRhyqRTp7QBlIW8QyE_Eve4mMGti7MdeHKpx-S&s) center / cover'}} >Android #1</CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    )
}

}

render(){
    return(
     <div>
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