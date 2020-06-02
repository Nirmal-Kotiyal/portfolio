/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React,{Component} from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content, HeaderRow} from 'react-mdl'
import { Router, Route,Switch, Link} from "react-router-dom";
import Aboutme from './components/Aboutme.component'
import Contact from './components/Contact.component'
import Projects from './components/Projects.component'
import Resume from './components/Resume.component'
import Landingpage from './components/Landingpage.component'
import CubeGrid from 'styled-loaders-react/lib/components/CubeGrid';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';
const history = createHistory()
ReactGA.initialize('UA-163542807-1',{
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 163542807,
    siteSpeedSampleRate:100
  }
});
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
  ReactGA.ga();
});


export default class App extends Component {
  
  state={
    loading:true
  }
  

  componentDidMount(){   
    setTimeout(() => {
      this.setState({
        loading:false
      })
    },3500);
  }

  hideToggle=()=>{
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
    console.log("working")
}

  render(){
  return (
    <div className="demo-big-content">
    {this.state.loading ? <CubeGrid color="grey" /> 
  : 
    <div className="mdl-layout--no-desktop-drawer-button">
    <Router history={history}>
    <Layout>
    <Header className="header-color" scroll>
      <HeaderRow className="header-row">
            <div className="container-small">
            <ul className="linkAnimation">
                  <li>
                  <Link className="nav-link" to="/"><i className="fa fa-home" aria-hidden="true"> </i></Link>  
                  </li>
                  <li>                 
                  <Link className="nav-link" to="/projects"><a className="nav-link">PROJECTS</a></Link>
                  </li>
                  <li>
                  <Link className="nav-link" to="/aboutme"><a>ABOUTME</a></Link>
                  </li>
                <li>
                <Link className="nav-link" to="/resume"><a>RESUME</a></Link>
                </li>
                <li>
                <Link className="nav-link" to="/contact"><a>CONṬACTS</a></Link>
                </li>
            </ul>
            </div>
      </HeaderRow>
        </Header>
        <Drawer title={<Link onClick={()=>this.hideToggle()} style={{textDecoration: 'none', color: 'black'}} to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>}>
            <Navigation > 
                    <Link onClick={()=>this.hideToggle()} to="/resume">
                      <p className="drawer">RESUME</p>
                    </Link>
                    <Link onClick={()=>this.hideToggle()} to="/projects">
                      <p className="drawer">PROJECTS</p>
                      </Link>
                    <Link onClick={()=>this.hideToggle()} to="/aboutme">
                      <p className="drawer">ABOUTME</p>
                    </Link>
                    <Link onClick={()=>this.hideToggle()} to="/contact">
                      <p className="drawer">
                        CONTACT
                      </p>
                    </Link>
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
