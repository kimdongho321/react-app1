import React, { Component } from 'react';

class TOC extends Component{
    render(){
      var lists = []
      var data = this.props.data;
      var i = 0;
      while( i < data.length ){
        lists.push(<li><a href={"/content/" + data[i].id}> {data[i].title} </a></li>)
      i = i + 1;
      }
    
    return (
      <nav>
          <ul>
              <li><a href="1.hmtl">HTML</a></li>
              <li><a href="2.hmtl">CSS</a></li>
              <li><a href="3.hmtl">HavaScript</a></li>
          </ul>
      </nav>
    );
    }
}

  export default TOC;