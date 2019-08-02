import React from 'react'
import API from '../utils/API'
import Saves from '../components/saves'

class Saved extends React.Component{

    state = {
        books: [],
      };
    
      componentDidMount() {
        this.loadBooks();
      }
    

loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


render(){
    return(
        <div>
          <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Saved Books</h1>
    <p class="lead">The list of books your saved from your searches!</p>
  </div>
</div>
           <div>
                {this.state.books.map((e,i)=><Saves src={e.image} link={e.volumeInfo.infoLink} key={i} title={e.title} description={e.description} author={e.authors}/>)}
            </div>
        </div>
    );
}
}

export default Saved;