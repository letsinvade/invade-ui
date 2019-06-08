import React from 'react';
import './App.scss';
import ModalExample from './components/Modal/ModalExample.jsx';
import TabsExample from './components/Tabs/TabsExample.jsx';
import DropdownExample from './components/Dropdown/DropdownExample.jsx';
import Button from "./components/Button/Button";
import Collapse from "./components/Collapse";
import Accordion from "./components/Accrodion";
import Sidebar from "./components/Sidebar/Sidebar";
import MainPage from "./pages/MainPage/MainPage";
import {Switch, Route} from 'react-router-dom';

export default class App extends React.Component{
    constructor() {
        super();

        this.state = {
            modalShown: true,
            collapsed: true
        };
    }

    onModalClose = () => {
        this.setState({modalShown: false});
    };

    render() {
        return (
            <>
                <div className="App">
                    <Sidebar/>
                    <div className="App__container">
                        <Switch>
                            <Route exact path="/" component={MainPage}/>
                            <Route path="/tabs" render={(props) => {
                                return (
                                    <div className="component-container">
                                        <TabsExample></TabsExample>
                                    </div>
                                )
                            }}/>
                            <Route path="/modal" render={(props) => {
                                return (
                                    <div className="component-container">
                                        <ModalExample></ModalExample>
                                    </div>
                                )
                            }}/>
                            <Route path="/dropdown" render={(props) => {
                                return (
                                    <div className="component-container">
                                        <DropdownExample></DropdownExample>
                                    </div>
                                )
                            }}/>
                            <Route path="/collapse" render={(props) => {
                                return (
                                    <div className="component-container">
                                        <Button onClick={this.toggleCollapse}>Collapse</Button>
                                        <Collapse collapsed={this.state.collapsed}>
                                            <h1>Hello!</h1>
                                        </Collapse>
                                    </div>
                                )
                            }}/>
                            <Route path="/accordion" render={(props) => {
                                return (
                                    <div className="component-container">
                                        <Accordion items={[
                                            {
                                                header: (active) =>  <Button>Item 1 active: {"" + active}</Button>,
                                                content: (active) => <h3>Item 1 content actiive:{"" + active}</h3>,
                                            },
                                            {
                                                header: (active) => <Button>Item 2 active:{active}</Button>,
                                                content: (active) => <h3>Item 2 content actiive:{active}</h3>
                                            }
                                        ]}/>
                                    </div>
                                )
                            }}/>
                        </Switch>
                    </div>
                </div>
            </>
        );
    }

    toggleCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }
};
