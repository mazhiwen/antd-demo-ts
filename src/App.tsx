import * as React from 'react';
import {Layout,Menu,Breadcrumb} from 'antd';

import './App.css';
import { BrowserRouter,Route } from 'react-router-dom'
// import logo from './logo.svg';
import Home from './views/Home/';
import MenuList from './components/MenuList/';
const {Header,Sider,Content}=Layout;
// const { SubMenu } = Menu;
const About = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class App extends React.Component {
  
  public render() {
    return (
      <BrowserRouter>
      <Layout>

        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            {/* <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item> */}
          </Menu>
        </Header>

        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            
            <MenuList/>
            
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 680 }}>
              
              <Route exact={true} path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </Content>
          </Layout>
        </Layout>

      </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

