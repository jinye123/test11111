import React, {useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {Button, Modal} from 'antd'
import memory from '../../utils/memory'
import storage from '../../utils/storage'
import date from '../../utils/date'
import styles from  './index.module.less'
console.log(styles)
const DATE_TYPE = "YYYY-mm-dd HH:MM:SS";


function Header (props){
    const [intervalId,setIntervalId]=useState(null)
    const [currentTime,setCurrentTime] =useState(date.formatDate(DATE_TYPE, new Date()))
    useEffect(()=>{
        getCurrentTime();
        return ()=>{
            clearInterval(intervalId)
        }
    },[]);

    const getCurrentTime = () => {
        const id=setInterval(() => {
            const currentTime = date.formatDate(DATE_TYPE, new Date());
            setCurrentTime(currentTime)
        }, 1000);
        setIntervalId(id)
    };

    const logout = () => {
        Modal.confirm({
            title: '确定退出吗？',
            centered: true,
            cancelText: '取消',
            okText: '确定',
            onOk: () => {
                storage.removeUser();
                memory.user = {};
                props.history.replace('/login');
            }
        })
    };

    return (
        <div className={[styles.header].join(' ')}>
            {process.env.REACT_APP_VERSION}当前时间: <span className={styles["date-box"]}>{currentTime}</span>
            欢迎 <span className={styles["user-box"]}>{memory.user.username}</span>
            <Button onClick={logout} type="link">退出</Button>
        </div>
    );

}

export default withRouter(Header)