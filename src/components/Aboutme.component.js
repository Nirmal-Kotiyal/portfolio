import React,{Component} from 'react'
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl'
export default class Aboutme extends Component{

render(){
    return(
      <div classname="coloraboutme">
      <div className="aboutme-body">
      <Grid className="aboutme-grid">
          <Cell col={6} >
              <h2>
                  Nirmal Kotiyal
              </h2>
              
         <img
           src="/images/profile_pic1.jpg"
           alt="avatar"
           style={{height: '250px'}}
            />
          <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA,JAVASCRIPT,NODEJS,REACT and MongoDB. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
          </p>
          </Cell>

          <Cell col={6}>
          <h2>My Stack</h2>
         <hr/>
         <div className="aboutme-list">
           <List>
             <ListItem>
               <ListItemContent className="phone-icon" style={{fontSize: '25px', fontFamily: 'Montserrat',color:"#555"}}>
                 <i className="fa fa-circle" aria-hidden="true"/>
                 Node.js
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent style={{fontSize: '25px', fontFamily: 'Montserrat',color:"#555"}}>
                 <i className="fa fa-circle" aria-hidden="true"/>
                 React
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent style={{fontSize: '25px', fontFamily: 'Montserrat',textAlign:'left',color:"#555"}}>
                 <i className="fa fa-circle" aria-hidden="true"/>
                 MongoDB
               </ListItemContent>
             </ListItem>
             <ListItem>
               <ListItemContent style={{fontSize: '25px', fontFamily: 'Montserrat',color:"#555"}}>
                 <i className="fa fa-circle" aria-hidden="true"/>
                 Java
               </ListItemContent>
             </ListItem>
           </List>
         </div>
          </Cell>
      </Grid>
     </div>
     </div>
    )
}

} 