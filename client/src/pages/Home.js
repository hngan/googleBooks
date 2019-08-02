import React from 'react'
import API from '../utils/API'
import "./style.css"
import Result from '../components/result'
import axios from 'axios';

class Home extends React.Component{

    state = {
        results: [],
        search: ""
      };
    
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search){
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+this.state.search).then(resp=>
        {
           this.setState({results:resp.data.items})
        }).catch(err=>console.log(err))
    }
  };


render(){
    return(
        <div>
            <form>
                <label for="search" style={{textAlign:"center"}}><h3>Search for a book</h3></label>
                <input  name="search" onChange={this.handleInputChange} placeholder="Book title"/>
                <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
            <div>
                {this.state.results.map((e,i)=><Result src={e.volumeInfo.imageLinks? e.volumeInfo.imageLinks.smallThumbnail : ""} link={e.volumeInfo.infoLink} key={i} title={e.volumeInfo.title} description={e.volumeInfo.description} author={e.volumeInfo.authors? e.volumeInfo.authors: ["N/A"]}/>)}
            </div>
        </div>
    );
}
}

export default Home;