import * as React from 'react';
import './index.less';
import {Card, Form, Icon, Input, Button, Checkbox } from 'antd';
// import { FormComponentProps } from 'antd/lib/form';
import {  connect } from 'react-redux';
import localForage from '../../utils/localForage';
import {axios} from '../../utils/axios';
class LoginOrigin extends React.Component <any>{
  constructor(props:any){
    super(props);
    this.state={
      isLogin:true
    };
  }
  public handleLogin = (e:any) => {
    e.preventDefault();
    this.props["form"].validateFields((err:any, values:any) => {
      if (!err) {
        window.console.log(axios);
        axios.get('/users')
          .then( (response)=> {
            console.log(response);
          })
          .catch( (error)=> {
            console.log(error);
          });
        // this.props['onIncreaseClick']();
        localForage.setItem('userName',values.userName);
        localForage.setItem('password',values.password);
        window.console.log('Received values of form: ', values);
      }
    });
  }
  public registHandler=()=>{
    this.setState({
      isLogin:false
    });
  }
  public render(){
    
    
    
    // const {value} = this.props;
    const { getFieldDecorator } = this.props['form'];
    return(
      <div className="login">
        <Card>
          {this.state['isLogin']?
          (
          <Form onSubmit={this.handleLogin} className="login-form">
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <Button onClick={this.registHandler}>注册</Button>
            </Form.Item>
          </Form>
          ):
          (
            <div>2</div>
          )}

        </Card>
      </div>
      
    )
  }
  
}


function mapStateToProps(state:any) {
  return {
      value: state.count
  };
}

function mapDispatchToProps(dispatch:any) {
  return {
      onIncreaseClick: () => dispatch({
        type: 'increase'
      })
  };
}






const Login = connect(mapStateToProps,mapDispatchToProps)(Form.create()(LoginOrigin));

export default Login