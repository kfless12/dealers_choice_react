import React from 'react';

const singleUser = ({ user })=>{
    return (    
            <div className = 'container'>
                <h1>User Information</h1>
                <ul>
                    <li>
                        Users Name: {user.first_name, user.last_name}
                    </li>
                    <li>
                        User Account Information: {user.finnance}
                    </li>
                </ul>
            </div>
    )
}