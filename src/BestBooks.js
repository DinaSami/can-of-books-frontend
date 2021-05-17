import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

import Card from 'react-bootstrap/Card';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book12: []

    }
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    const myBooks = `${process.env.REACT_APP_SERVER_URL}/book?email=${user.email}`;
    const req = await axios.get(myBooks);
    console.log('hhhhhhhhhhhhhh');
    this.setState({
      book12: req.data
    });
  }






  render() {
    const { user } = this.props.auth0;

    return (
      <>
        <h1>My Favorite Books</h1>

        {this.state.book12.map(ele => {
          return <div>
            {/* <div>Book Title : {ele.name}</div>
            <div>Book Description : {ele.description}</div>
            <div>Book Status : {ele.status}</div> */}
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Book Title : {ele.name}</Card.Title>

                <Card.Text>
                  <div>Book Description : {ele.description}</div>
                  <div>Book Status : {ele.status}</div>


                </Card.Text>


              </Card.Body>
            </Card>

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
