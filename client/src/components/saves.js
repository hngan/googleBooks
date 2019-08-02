import React from 'react';

class Saves extends React.Component{

    render(){
        return(
            <>
         <div class="col s12 m7">
        <div class="card horizontal">
          <div class="card-image">
            <img src={this.props.src} alt={this.props.title}/>
          </div>
          <div class="card-stacked">
            <div class="card-content">
                <strong>{this.props.title}</strong>
                <p>By: {this.props.author[0]}</p>
              <p>{this.props.description}</p>
            </div>
            <div class="card-action">
              <a href={this.props.link}>View book</a>
              <button onClick={this.save}>Delete</button>
            </div>
          </div>
        </div>
        </div>
      </>
        )
    }
}

export default Saves;