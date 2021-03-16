import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    render(){
        return (
            <input type="password" onKeyUp={(e) => {console.log('Entering password...')}}/>
        )
    }
}