import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import memory from '../../utils/memory'
console.log(memory);
export default class Admin extends Component{
    render() {
        const user=memory.user;
        if(!user||!user.username){
            return <Redirect to='/login' />
        }
        return (
            <div>admin{user.username}</div>
        )
    }
}