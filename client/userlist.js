import React from 'react'

const userList = ({users, selectUser}) =>{
    console.log(users)
return (
        <ul>
            <h2>Users</h2>
            {users.map(user =>{
                return(
                    <li key = {user.id}>
                    <a href= '/' onClick = {()=>{selectUser(user.id)}}>{user.first_name} {user.last_name}</a>
                    </li>
                        )
                } )
            }
        </ul>

)

}

export default userList