import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: []

    }
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    const myBooks = `${process.env.REACT_APP_SERVER_URL}/books?email=${user.email}`;
    const showApiUrlbook = await axios.get(myBooks);
    console.log('hhhhhhhhhhhhhh');
    this.setState({book:showApiUrlbook.data});
  }




//   getBookData = async () => {
// console.log('hhhhhhh');

//     const { user } = this.props.auth0;
//     const url = `${process.env.REACT_APP_SERVER_URL}/book?email=${user.email}`;
//     const bookReq = await axios.get(url);
//     console.log(bookReq);
//     this.setState({
//       book: bookReq.data[0].book,
//     });

//   }

  render() {
    const { user } = this.props.auth0;

    return (
      <>
        <h1>My Favorite Books</h1>
        <p>{user.email}</p>
        <p>{this.state.book}</p>
        {this.state.book.map(ele => {
          return <div>
            {ele.name}
          </div>;
        })}


        {/* 
        {this.state.book.map((books) => return
        
            <>
              <div>Book Title : {books.name}</div>
              <div>Book Description : {books.description}</div>
              <div>Book Status : {books.status}</div>
            </>
          
        
        )} */}
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
