import React from 'react';

const singleUser = ( props )=>{
    const selected = props.selected[0]
    const retrn = props.retrn
    return (    
            <div className = 'container'>
                <h1>User Information</h1>
                <ul>
                    <li>
                        Users Name: {selected.first_name, selected.last_name}
                    </li>
                    <li>
                        User Account Information: {selected.account_name}
                    </li>
                </ul>
                <h3 onClick = {retrn}>Click to go back</h3>
            </div>
    )
}

export default singleUser