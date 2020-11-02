import React from 'react';

function User ({user}) {
    return (
        <div>
            <b>{user.username}</b>
        </div>
    )
}

function UserList ({users}) {
    return (
     <div>
        {
            users.map(
                (user , index) => (<User key={user.id} user={user} />)
            )
        }
     </div>   
    );
}

export default UserList;