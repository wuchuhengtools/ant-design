import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    FileOutlined
} from '@ant-design/icons';
import './index.less'


const { Header, Content, Footer, Sider } = Layout;


export default class BasicLayout extends React.Component<any, any>
{

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed:boolean)  => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render(): React.ReactNode {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible onCollapse={this.onCollapse}
                    trigger={null}
                    defaultCollapsed={true}
                    collapsedWidth={60}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className={'menuRender'}>
                            <Menu.Item key="1" icon={'1'}>
                                Option 1
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                Option 2
                            </Menu.Item>
                            <Menu.Item key="9" icon={<FileOutlined />} />
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            <FileOutlined/>
                            dfdfd
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}
