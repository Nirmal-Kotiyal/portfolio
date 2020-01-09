import React,{Component} from 'react'

export default class Resume extends Component{

render(){
    
    return(
     <div>
         <embed src="resume.pdf#toolbar=0&navpanes=0&scrollbar=0"   type="application/pdf" width="100%" height="600px"/>
        </div>
    )
}
} 