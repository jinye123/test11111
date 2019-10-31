import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Button, Modal} from 'antd'
import memory from '../../utils/memory'
import storage from '../../utils/storage'
import date from '../../utils/date'
import './index.less'

const DATE_TYPE = "YYYY-mm-dd HH:MM:SS";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: memory.user,
            currentTime: date.formatDate(DATE_TYPE, new Date())
        }
    }

    logout = () => {
        Modal.confirm({
            title: '确定退出吗？',
            centered: true,
            cancelText: '取消',
            okText: '确定',
            onOk: () => {
                storage.removeUser();
                memory.user = {};
                this.props.history.replace('/login');
            }
        })
    };

    getCurrentTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = date.formatDate(DATE_TYPE, new Date());
            this.setState({currentTime})
        }, 1000)
    };

    componentDidMount() {
        this.getCurrentTime()
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <div className='header'>
                当前时间: <span className='date-box'>{this.state.currentTime}</span>
                欢迎 <span className='user-box'>{this.state.userInfo.username}</span>
                <Button onClick={this.logout} type="link">退出</Button>
            </div>
        );
    }
}

export default withRouter(Header)