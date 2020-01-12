import React,{Component} from 'react'
import { Grid, Cell } from 'react-mdl'
import Typed from 'react-typed'
export default class Landingpage extends Component{
render(){
    const roles =['Java', 'Node.js', 'React.js', 'Android'];
    return(
     <div className="landing-grid" style={{width:'100%',margin:'auto'}}>
        <Grid>
                <Cell className="profile-cell" col={12}>
                <img className="profile-pic" src="/images/profile_pic1.jpg"
                alt="Check your code dude"
                >
                </img>
            </Cell>
            <Cell className="name-text" style={{margin:"0"}} col={12}> 
             <h1>Nirmal Kotiyal</h1>   
            </Cell>

            <Cell col={12}>
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

            <Cell className="name-text" style={{margin:"0"}} col={12}>
            <h2>Software Developer</h2>
            </Cell>

            <Cell col={12}>
            <hr />
            </Cell>
            <Cell style={{margin:"0"}} className="landingpage-icon" col={12}>
                        <a href="http://linkedin.com" target="_blank"  rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                    <a href="http://github.com" target="_blank"  rel="noopener noreferrer">
                    <i className="fa fa-github" aria-hidden="true" spin="true"></i>
                    </a>
            </Cell>
        </Grid>
        </div>
    )
}
} 