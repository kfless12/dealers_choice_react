import React from 'react'

const userList = ({users, selectUser}) =>{
return (
        <ul>
            <h2>Users</h2>
            {users.map(user =>{
                return(
                    <a key = {user.id} onClick = {()=>{selectUser(user.id)}}>user.firstname user.lastname</a>
                )
            })}
        </ul>

)

}