import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { withAuth0 } from '@auth0/auth0-react';

function Profile() {
    const { user } = useAuth0();

    return (<div>
        <div>Hello {user.name}</div>
        <div>Email: {user.email}</div>
        <div> {user.picture}</div>

    </div>
    )
}

export default withAuth0(Profile);