import React, { Component } from 'react'

export default class Button extends Component {
    
    render() {
        return (
            <div>
                <button className="btn btn-outline-info" onClick={() => this.props.incrementCount(this.props.step)}>+{this.props.step}</button>
            </div>
        )
    }
}
