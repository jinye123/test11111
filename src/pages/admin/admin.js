import React, {Component} from 'react'
import {Redirect,Switch,Route} from 'react-router-dom'
import {Layout, Breadcrumb,} from 'antd'
import Header from '../../components/header'
import MenuWrap from '../../components/menuwrap'
import './admin.less'
import memory from '../../utils/memory'
import Home from '../home/home'
import Category from '../category/category'
import Bar from '../echarts/bar'
import Line from '../echarts/line'
import Pie from '../echarts/pie'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'

const {Content, Footer,Sider} = Layout;


export default class Admin extends Component {
    render() {
        const user = memory.user;
        if (!user || !user.username) {
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{width: '100%', height: '100%'}}>
                <Sider theme='light' className='sider-bar' breakpoint="lg">
                    <MenuWrap/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{margin: '0 16px',display:"flex",flexDirection: 'column'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff',flex:'auto',overflow:'auto'}}>
                            <Switch>
                                <Route path='/home' component={Home}/>
                                <Route path='/user' component={User}/>
                                <Route path='/role' component={Role}/>
                                <Route path='/products/product' component={Product}/>
                                <Route path='/echarts/pie' component={Pie}/>
                                <Route path='/echarts/line' component={Line}/>
                                <Route path='/echarts/bar' component={Bar}/>
                                <Route path='/products/category' component={Category}/>
                                <Redirect to='/home'/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Jinye Admin ©2019 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}