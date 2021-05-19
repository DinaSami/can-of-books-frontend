import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookFormModal from './BookFormModal';
import UpdateForm from './UpdateForm';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book12: [],
      name: '',
      description: '',
      status: '',
      index: 0,
      showUpdateForm: false
    }
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    const myBooks = `${process.env.REACT_APP_SERVER_URL}/book?email=${user.email}`;
    const req = await axios.get(myBooks);
    this.setState({
      book12: req.data
    });
  }

  updateBookName = (e) => this.setState({ name: e.target.value });
  updateBookDiscription = (e) => this.setState({ description: e.target.value });
  updateBookStatus = (e) => this.setState({ status: e.target.value });

  addBook = async (e) => {
    e.preventDefault();
    //  const { user } = this.props.auth0;

    const bodyData = {
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
      email: this.props.auth0.user.email
    }
    const newBookAdded = await axios.post(`${process.env.REACT_APP_SERVER_URL}/book`, bodyData);

    this.setState({ book12: newBookAdded.data })
  }

  deleteBook = async (index) => {
    const newArrayOfBook = this.state.book12.filter((element, indEl) => {
      return indEl !== index;
    })
    this.setState({ book12: newArrayOfBook })

    const deletedData = {
      email: this.props.auth0.user.email
    }
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/book/${index}`, { params: deletedData });
  }

  updateBook = async (e) => {
    e.preventDefault();

    const bodyData = {
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
      email: this.props.auth0.user.email
    }
    const updateBook = await axios.put(`${process.env.REACT_APP_SERVER_URL}/book/${this.state.index}`, bodyData);

    this.setState({ book12: updateBook.data })
  }

  updateEachBook = (index) => {
    const updateArrayOfBook = this.state.book12.filter((element, indEl) => {
      return indEl === index;
    });
    this.setState({
      index: index,
      name: updateArrayOfBook[0].name,
      description: updateArrayOfBook[0].description,
      status: updateArrayOfBook[0].status,
      showUpdateForm: true
    });
  }
  render() {
    // const { user } = this.props.auth0;

    return (
      <>
        <h1>My Favorite Books</h1>
        <BookFormModal
          updateBookName={this.updateBookName}
          updateBookDiscription={this.updateBookDiscription}
          updateBookStatus={this.updateBookStatus}
          addBook={this.addBook}
        />
        {this.state.book12.map((ele, idx) => {
          return <div key={idx}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Book Title : {ele.name}</Card.Title>
                <Card.Text>
                  <div>Book Description : {ele.description}</div>
                  <div>Book Status : {ele.status}</div>
                </Card.Text>
                <Button onClick={() => this.deleteBook(idx)}>Remove</Button>
                <Button onClick={() => this.updateEachBook(idx)}>Update</Button>
              </Card.Body>
            </Card>
          </div>;
        })}
        {this.state.showUpdateForm &&
          <UpdateForm
            name={this.state.name}
            description={this.state.description}
            status={this.state.status}
            updateBook={this.updateBook}
            updateBookName={this.updateBookName}
            updateBookDiscription={this.updateBookDiscription}
            updateBookStatus={this.updateBookStatus}
          />
        }
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
