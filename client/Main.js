import React from 'react';
import axios from 'axios';
import userlist from './userlist'
import singleUser from './singleUser'

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = { users: [], selected: false }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.userSelect = this.userSelect.bind(this);

    }

    async componentDidMount(){
        const users = (await axios.get('/users')).data;
        this.setState({ users });

    }

    async userSelect(id){
        const user = (await axios.get(`/users/${id}`)).data;
        this.selectState({ selected: user})        
    }

    render()
    {
        return (
        <div id="main" className="row container">
            <h1>Casino User Database!</h1>
            <p>Welcome to the backend database for the Dealers Choice Casino, Click on a User to see there information</p>
        {selected ? <singleUser selected = {selected}/> : <userlist users = {users} selectUser = {this.userSelect}/>}
        </div>
        )
    }

}



export default Main;