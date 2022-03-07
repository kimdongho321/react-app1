import React, { Component } from 'react';
import TOC from "./component/TOC"
import Content from "./component/Content"
import Subject from "./component/Subject"
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      Subject: {title:"Web", sub:"world wide web!"},
      welcome:{title:'welcome', desc:'Hello, React!!'},
      contents: [
        {id:1, title:"HTML", desc:"HTML is HyperText Markup Language."},
        {id:2, title:"CSS", desc:"CSs is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
    <div className="App">
      {/* <Subject
      title={this.state.Subject.title}
      sub={this.state.Subject.sub} 
      /> */}
      <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>{this.state.Subject.title}</a></h1>
          {this.state.Subject.sub}
      </header>
      <TOC data={this.state.contents}/>
      <Content title={_title} desc={_desc}/>
    </div>
  );
  }
}
/*커밋*/

export default App;