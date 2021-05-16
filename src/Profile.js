import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { withAuth0 } from '@auth0/auth0-react';

function Profile() {
    const { user } = useAuth0();
console.log(user.picture);
    return (
    
    <>
            <div>Hello {user.name}</div>
            <div>Email: {user.email}</div>
            <img src={user.picture} alt='' />
    </>
    )
}

export default withAuth0(Profile);