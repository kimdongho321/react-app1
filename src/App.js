import React, { Component } from 'react';
import TOC from "./component/TOC"
import Contents from "./component/Contents"
import Subject from "./component/Subject"
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      Subject: {title:"Web", sub:"world wide web!"},
      Contents: [
        {id:1, title:"HTML", desc:"HTML is HyperText Markup Language."},
        {id:2, title:"CSS", desc:"CSs is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }
  render(){
  return (
    <div className="App">
      <Subject
      title={this.state.Subject.title}
      sub={this.state.Subject.sub} 
      />
      <TOC data={this.state.Contents}/>
      <Contents title="HTML" desc="HTML is HyperText Markup Language."/>
    </div>
  );
  }
}
/*커밋*/

export default App;