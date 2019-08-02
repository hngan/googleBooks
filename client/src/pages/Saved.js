import React from 'react'
import API from '../utils/API'

class Saved extends React.Component{

    state = {
        books: [],
        search: ""
      };
    
      componentDidMount() {
        this.loadBooks();
      }
    

loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, search:""})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };


render(){
    return(
        <div>

        </div>
    );
}
}

export default Saved;