import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function Profile() {
    const { user } = useAuth0();
    console.log(user.picture);
    return (

        <>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>User Information</Card.Title>
                    <Card.Img variant="top" src={user.picture} />
                    <Card.Text>
                        <div>Hello {user.name}</div>
                        <div>Email: {user.email}</div>


                    </Card.Text>


                </Card.Body>
            </Card>
        </>
    )
}

export default withAuth0(Profile);