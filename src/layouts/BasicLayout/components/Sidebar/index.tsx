import React from "react";
import {Layout, Menu} from "antd";
import {
    CommentIcon,
    DashboardIcon,
    EngageIcon,
    HistoryIcon,
    ReportIcon, RobotIcon, ServiceIcon, SettingIcon,
    TicketsIcon
} from "../../../../components/Icons";
import logo from '../../../../assets/images/default-avatar.jpg'

const { Header, Content, Footer, Sider } = Layout;

export default class Sidebar extends React.Component<any, any>
{
    onCollapse = (collapsed:boolean)  => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render(): React.ReactNode {
        return (
            <>
                <Sider
                    collapsible onCollapse={this.onCollapse}
                    trigger={null}
                    defaultCollapsed={true}
                    collapsedWidth={60}
                >
                    <div className="logo">
                        {/*<img src={logo} />*/}
                    </div>

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className={'menuRender'}>
                        <Menu.Item key="1" icon={<DashboardIcon className='icon-render' /> }>
                            首页
                        </Menu.Item>
                        <Menu.Item key="2" icon={<CommentIcon className='icon-render' />}>
                            对话
                        </Menu.Item>
                        <Menu.Item key="3" icon={<TicketsIcon className='icon-render' />}>
                            工单
                        </Menu.Item>
                        <Menu.Item key="4" icon={<HistoryIcon className='icon-render' />}>
                            历史
                        </Menu.Item>
                        <Menu.Item key="5" icon={<ReportIcon className='icon-render' />}>
                            报表
                        </Menu.Item>
                        <Menu.Item key="6" icon={<EngageIcon className='icon-render' />}>
                            顾客
                        </Menu.Item>
                        <Menu.Item key="7" icon={<RobotIcon className='icon-render' />}>
                            机器人
                        </Menu.Item>
                    </Menu>
                    <div className="footer-menu-render">
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className={'menuRender'}>
                            <Menu.Item key="8" icon={<SettingIcon className='icon-render' /> }>
                                设置
                            </Menu.Item>
                            <Menu.Item key="9" icon={<ServiceIcon className='icon-render' />}>
                                服务
                            </Menu.Item>
                        </Menu>
                    </div>

                </Sider>
            </>
        );
    }
}
