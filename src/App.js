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
      selected_content_id:2,
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
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
    <div className="App">
      <Subject
      title={this.state.Subject.title}
      sub={this.state.Subject.sub} 
      onChangePage={function(){
        this.setState({mode:'welcome'});
      }.bind(this)}
      />
      <TOC onChangePage={function(id){
        this.setState({
          mode:'read',
          selected_content_id:Number(id)
        });
      }.bind(this)} 
      data={this.state.contents}
      />
      <Content title={_title} desc={_desc}/>
    </div>
  );
  }
}
/*커밋하자*/


export default App;