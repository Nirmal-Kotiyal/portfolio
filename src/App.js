import React,{Component} from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content, HeaderRow} from 'react-mdl'
import { BrowserRouter as Router, Route,Switch, Link} from "react-router-dom";
import Aboutme from './components/Aboutme.component'
import Contact from './components/Contact.component'
import Projects from './components/Projects.component'
import Resume from './components/Resume.component'
import Landingpage from './components/Landingpage.component'
import Sucess from './components/sucess'
import CubeGrid from 'styled-loaders-react/lib/components/CubeGrid';




export default class App extends Component {
  
  state={
    loading:true
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loading:false
      })
    },2500);
  }


  render(){
  return (
    <div className="demo-big-content">
    {this.state.loading ? <CubeGrid color="grey" /> 
  : 
    <div className="mdl-layout--no-desktop-drawer-button">
    <Router>
    <Layout>
    <Header className="header-color" scroll>
      <HeaderRow className="header-row">
            <div className="container-small">
            <ul>
                  <li>
                  <Link to="/"><i className="fa fa-home" aria-hidden="true"> </i></Link>  
                  </li>
                  <li>
                  <Link to="/projects"><a>PROJECTS</a></Link>
                  </li>
                  <li>
                  <Link to="/aboutme"><a>ABOUTME</a></Link>
                  </li>
                <li>
                <Link to="/resume"><a>RESUME</a></Link>
                </li>
                <li>
                <Link to="/contact"><a>CONṬACTS</a></Link>
                </li>
            </ul>
            </div>
      </HeaderRow>
        </Header>
        <Drawer  title={<Link style={{textDecoration: 'none', color: 'black'}} to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>}>
            <Navigation > 
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">AboutMe</Link>
                    <Link to="/contact">Contact</Link>
            </Navigation>
            </Drawer>
            <Content>
            <div className="page-content" />
            <Switch>
            <Route path="/" exact component={Landingpage}></Route>
            <Route path="/aboutme" component={Aboutme}></Route>
            <Route path="/resume" component={Resume}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/sucess" component={Sucess}></Route>
            </Switch>
              </Content>
        </Layout>
    </Router>
    </div>
    }
    </div>
  );
}
}
