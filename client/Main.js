import React from 'react';
import axios from 'axios';
import Userlist from './userlist';
import SingleUser from './singleUser';
import Nav from './nav.js';
import Games_list from './gameslist.js';
import Dice from './dice.js';
import Roulette from './roulette.js';
import Cards from './cards.js'


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = { users: [], selected: false, chosen: "list" }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.userSelect = this.userSelect.bind(this);
        this.retrn = this.retrn.bind(this);
        this.transition = this.transition.bind(this);
    }

    async componentDidMount(){
        const users = (await axios.get('/users')).data;
        this.setState({ users });
    }

    async userSelect(id){
        const something = (await axios.get(`/users/${id}`)).data;
        this.setState({ selected: something})
    }

    transition(chosen){
        this.setState( { chosen })
    }

    retrn(){
        this.setState({ selected: false})
    }

    render()
    {
        const { users, selected, chosen } = this.state;
        return (
        <div id="main" className="row container">
            <Nav />
            <h1>Casino User Database!</h1>
            <p>Welcome to the backend database for the Dealers Choice Casino, Click on a User to see there information</p>
        {selected ? <SingleUser selected = {selected} retrn = {this.retrn}/> : <Userlist users = {users} selectUser = {this.userSelect}/>}
        {(()=>{

        //refactor with react-router?
        switch(chosen){
            case "roulette": return <Roulette />;
            case "cards":    return <Cards />;
            case "dice":   return <Dice />
            default:   return <Games_list transition = {this.transition}/>
            }
        })()}
        </div>
        );
    }

}



export default Main;
