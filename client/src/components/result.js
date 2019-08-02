import React from 'react'
import { throws } from 'assert';

class Result extends React.Component{

save(){

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