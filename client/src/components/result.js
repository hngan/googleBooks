import React from 'react'
import API from '../utils/API'

class Result extends React.Component{

save= event=>{
const{title, author, link , description, src}=event.target;
API.saveBook({title:title, link:link, description:description, src:src, author:author})
}

render(){
    return(
        <>
     <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src={this.props.src}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
            <strong>{this.props.title}</strong>
            <p>By: {this.props.author[0]}</p>
          <p>{this.props.description}</p>
        </div>
        <div class="card-action">
          <a href={this.props.link}>View book</a>
          <button onClick={this.save} title={this.props.title} author={this.props.author} link={this.props.link} src={this.props.src} description={this.props.description} >Save</button>
        </div>
      </div>
    </div>
    </div>
  </>
    )
}
}

export default Result;