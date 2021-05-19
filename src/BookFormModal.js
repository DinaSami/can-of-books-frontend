import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export class BookFormModal extends Component {
    render() {
        return (
            <div>
                <Form style={{ width: '40rem' }} className= 'ml-4' onSubmit={(e) => this.props.addBook(e)}>
                    <Form.Group >
                        <Form.Label>Add Book name :</Form.Label>
                        <Form.Control type="text" onChange={this.props.updateBookName} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Add Book description :</Form.Label>
                        <Form.Control type="text" onChange={this.props.updateBookDiscription} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Add Book status :</Form.Label>
                        <Form.Control type="text" onChange={this.props.updateBookStatus} />
                    </Form.Group>

                    <Button type="submit" className='btn btn-warning '>Add new Book</Button>

                </Form>
            </div>
        )
    }
}

export default BookFormModal
