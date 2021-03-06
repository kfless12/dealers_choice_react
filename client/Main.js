import React from 'react';
import axios from 'axios';
import Userlist from './userlist'
import SingleUser from './singleUser'


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = { users: [], selected: false }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.userSelect = this.userSelect.bind(this);
        this.retrn = this.retrn.bind(this);

    }

    async componentDidMount(){
        const users = (await axios.get('/users')).data;
        this.setState({ users });

    }

    async userSelect(id){
        const something = (await axios.get(`/users/${id}`)).data;
        this.setState({ selected: something})
        
        
             
    }
    retrn(){
        this.setState({ selected: false})
    }

    render()
    { 
        const { users, selected } = this.state;
        return (
        <div id="main" className="row container">
            <h1>Casino User Database!</h1>
            <p>Welcome to the backend database for the Dealers Choice Casino, Click on a User to see there information</p>
        {selected ? <SingleUser selected = {selected} retrn = {this.retrn}/> : <Userlist users = {users} selectUser = {this.userSelect}/>}
        </div>
        );
    }

}



export default Main;