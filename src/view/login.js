import React from 'react';

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogin:true
        }
    }
    loginHandle=()=>{
        this.setState((state)=>({
                isLogin:!state.isLogin
            }))
    }
    render() {
        return (
            <div onClick={this.loginHandle}>
                {this.state.isLogin?'退出':'登录'}
            </div>
        )
    }
}