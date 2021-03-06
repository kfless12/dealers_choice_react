import React from 'react';
import axios from 'axios';
import Userlist from './userlist'
import SingleUser from './singleUser'

let user;

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = { users: [], selected: false }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.userSelect = this.userSelect.bind(this);

    }

    async componentDidMount(){
        const users = (await axios.get('/users')).data.rows;
        this.setState({ users });

    }

    async userSelect(id){
        user = (await axios.get(`/users/${id}`)).data.rows;
        console.log(user)
        this.setState({ selected: user})
        
             
    }

    render()
    { const { users, selected } = this.state;
        return (
        <div id="main" className="row container">
            <h1>Casino User Database!</h1>
            <p>Welcome to the backend database for the Dealers Choice Casino, Click on a User to see there information</p>
        {selected ? <SingleUser selected = {user}/> : <Userlist users = {users} selectUser = {this.userSelect}/>}
        </div>
        )
    }

}



export default Main;