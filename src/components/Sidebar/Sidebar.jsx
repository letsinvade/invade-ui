import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.scss';

export default class Sidebar extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            linkList: [
                {
                    name: 'Accordion',
                    link: '/accordion'
                },
                // {
                //     name: 'Button',
                //     link: '/button'
                // },
                {
                    name: 'Collapse',
                    link: '/collapse'
                },{
                    name: 'Dropdown',
                    link: '/dropdown'
                },
                {
                    name: 'Modal',
                    link: '/modal'
                },
                {
                    name: 'Tabs',
                    link: '/tabs'
                },
                {
                    name: 'Form',
                    link: '/form'
                }
            ]
        }
    }

    render() {
        let sidebarLinks = this.state.linkList.map((item, i) => {
            return (
                <Link className="Sidebar__item"
                      to={item.link}
                      key={i}>
                    {item.name}
                </Link>
            )
        });

        return (
            <div className="Sidebar">
                <div className="Sidebar__header">
                    <Link to="/">
                        <h3>Invade UI</h3>
                    </Link>
                </div>
                <div className="Sidebar__body">
                    {sidebarLinks}
                </div>
            </div>
        )
    }


}
