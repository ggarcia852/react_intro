import React, { Component } from 'react'
import UserDetails from '../components/UserDetails';


export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
        .then(res => res.json())
        .then(data => this.setState({
            users: data
        }))
    }    
    render() {
        return (
            <div>
                <h1>This is the Users Page</h1>
                {this.state.users.map((u, i) => <UserDetails key={i} user={u} /> )}
            </div>
        )
    }
}
