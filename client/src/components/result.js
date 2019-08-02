import React from 'react'
import { throws } from 'assert';

class Result extends React.Component{
constructor(props){
    super(props);
    this.state= {
        title: props.title,
        author: props.author,
        description: props.description,
        link: props.link,
        image:props.src
    }
}

save(){

}

render(){
    return(
        <>
     <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src={this.state.image}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
            <strong>{this.state.title}</strong>
            <p>By: {this.state.author[0]}</p>
          <p>{this.state.description}</p>
        </div>
        <div class="card-action">
          <a href={this.state.link}>View book</a>
          <button onClick={this.save}>Save</button>
        </div>
      </div>
    </div>
    </div>
  </>
    )
}
}

export default Result;