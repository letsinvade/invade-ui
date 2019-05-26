import React from 'react';
import './App.scss';
import ModalExample from './components/Modal/ModalExample.jsx';
import TabsExample from './components/Tabs/TabsExample.jsx';
import DropdownExample from './components/Dropdown/DropdownExample.jsx';


export default class App extends React.Component{
    constructor() {
        super();
        this.state = {
            modalShown: true
        }
    }

    onModalClose = () => {
        this.setState({modalShown: false});
    };

    render() {
        return (
            <>
                <div className="App">
                    <div className="component-container">
                        <TabsExample></TabsExample>
                    </div>
                    <div className="component-container">
                        <ModalExample></ModalExample>
                    </div>
                    <div className="component-container">
                        <DropdownExample></DropdownExample>
                    </div>
                </div>
            </>
        );
    }
}
