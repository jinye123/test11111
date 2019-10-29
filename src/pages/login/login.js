import React, {Component} from 'react'
import {
    Form,
    Icon,
    Input,
    Button,
    message
} from 'antd';
import './login.less'
import memory from '../../utils/memory'
import storage from '../../utils/storage'

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                memory.user=values;
                storage.saveUser(values);
                message.success('登陆成功');
                this.props.history.replace('/');
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className='login'>
                <div className='login-header'>
                    <h1>Jinye Admin</h1>
                </div>
                <div className='login-body'>
                    <h2>用户登陆</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                validateFirst: true,
                                initialValue:'admin',
                                rules: [
                                    {required: true, message: '必须输入用户名'},
                                    {max: 12, message: '用户名最大长度12!'},
                                    {min: 5, message: '用户名最小长度5!'},
                                    {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能是数字，字母，下划线!'}
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                validateFirst: true,
                                initialValue:'admin',
                                rules: [
                                    {required: true, message: '必须输入密码'},
                                    {max: 12, message: '密码最大长度12!'},
                                    {min: 5, message: '密码最小长度5!'},
                                    {pattern: /^[a-zA-Z0-9_]+$/, message: '密码只能是数字，字母，下划线!'}
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button size='large' type="primary" htmlType="submit" block className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrapLogin = Form.create()(Login);
export default WrapLogin;

