import React, { Component } from 'react'

export default class UserDetails extends Component {
    render() {
        return (
            <div>
                 <h4>{ this.props.user.first_name } { this.props.user.last_name } - { this.props.user.id }</h4>
            </div>
        )
    }
}
