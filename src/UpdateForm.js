import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export class UpdateForm extends Component {
    render() {
        return (
            <div>

                <Form style={{ width: '40rem' }} className= 'ml-4' onSubmit={(e) => this.props.updateBook(e)}>
                    <Form.Group >
                        <Form.Label>Update Book name :</Form.Label>
                        <Form.Control type="text" onChange={this.props.updateBookName} value={this.props.name} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Update Book description :</Form.Label>
                        <Form.Control type="text" onChange={this.props.updateBookDiscription} value={this.props.description}/>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Update Book status :</Form.Label>
                        <Form.Control type="text" onChange={this.props.updateBookStatus} value={this.props.status}/>
                    </Form.Group>

                    <Button className='btn btn-warning ' type="submit" >Update Book</Button>

                </Form>

            </div>
        )
    }
}

export default UpdateForm
