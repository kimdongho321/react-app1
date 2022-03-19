import React, { Component } from 'react';
import TOC from "./component/TOC"
import ReadContent from "./component/ReadContent"
import CreateContent from "./component/CreateContent"
import Subject from "./component/Subject"
import Control from "./component/Control"
import './App.css';
import { __esModule } from '@testing-library/jest-dom/dist/matchers';
/*커밋 */
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
    var _title, _desc, _article= null;
    _article = <ReadContent title={_title} desc={_desc} />
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
     _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === 'create'){
      _article = <CreateContent />
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
      
      <Control onChangeMode={function(_mode){
        this.setState({
          mode:_mode
        })
      }.bind(this)}/>

      {_article}
    </div>
  );
  }
}
/*커밋하자*/


export default App;