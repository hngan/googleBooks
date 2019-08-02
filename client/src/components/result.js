import React from 'react'
import API from '../utils/API'

class Result extends React.Component{

save= (title, author, link, src, description)=>{
const book={title:title, link:link, description:description, image:src, author:author}
console.log(book)
API.saveBook(book)
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
          <button onClick={()=>this.save(this.props.title, this.props.author, this.props.link, this.props.src, this.props.description)} >Save</button>
        </div>
      </div>
    </div>
    </div>
  </>
    )
}
}

export default Result;