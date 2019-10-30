import React, {Component} from 'react';
import './index.less'
import {Icon, Menu} from "antd";
import {Link, withRouter} from 'react-router-dom'
import menuConfig from '../../config/menuConfig'

const {SubMenu} = Menu;

class MenuWrap extends Component {
    constructor(props){
        super(props);
        this.menuList = this.renderMenuNodes(menuConfig)
    }
    renderMenuNodes = (menuConfig) => {
        const path = this.props.location.pathname;
        return menuConfig.reduce((pre, item) => {
            if (!item.children) {
                pre.push((
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon}/>
                            <span>{item.name}</span>
                        </Link>
                    </Menu.Item>
                ))
            } else {
                const openSub = item.children.find(item => item.key === path);
                if (openSub) {
                    this.openKey = item.key
                }
                pre.push((
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon}/>
                                <span>{item.name}</span>
                            </span>
                        }>
                        {
                            this.renderMenuNodes(item.children)
                        }
                    </SubMenu>
                ))
            }

            return pre
        }, [])
    };

    render() {
        const path = this.props.location.pathname;
        const openKey = this.openKey;
        return (
            <>
                <div className="logo"/>
                <Menu mode="inline" defaultOpenKeys={[openKey]} selectedKeys={[path]}>
                    {
                        this.menuList
                    }
                </Menu>
            </>
        );
    }
}

export default withRouter(MenuWrap)