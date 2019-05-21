import React from 'react';
import TabsContainer from "./TabsContainer/TabsContainer";
import testImg from "../../assets/test-Image.JPG";
import Tabs from "./Tabs";

export default class TabsExample extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <>
                <Tabs tabList={[
                    {name: 'Tab 1', selector: 'NUMBER_ONE'},
                    {name: 'Tab 2', selector: 'NUMBER_TWO'}
                ]} currentTab="NUMBER_ONE">

                    <TabsContainer selector="NUMBER_ONE">
                        <h1>This is tab 1 content</h1>
                        <h3>Here we'd like to discuss arachnoids - the dominate Zerg alike race in open space</h3>
                        <p>This is the default project to see how constructor works This is the default project to see
                            how constructor works This is the default project to see how constructor works This is the
                            default project to see how constructor works This is the default project to see how
                            constructor works This is the default project to see how constructor works This is the
                            default project to see how constructor works This is the default project to see how
                            constructor works This is the default project to see how constructor works This is the
                            default project to see how constructor works This is the default project to see how
                            constructor works This is the default project to see how constructor works</p>
                        <ul>
                            <li>Visious</li>
                            <li>Absolutely Evil</li>
                            <li>Frustrated as bugs can be</li>
                        </ul>
                    </TabsContainer>

                    <TabsContainer selector="NUMBER_TWO">
                        <h1>This is tab 2 content</h1>
                        <p>Waste no time here and start science talks</p>
                        <h2>Why the hell do we love Neil De Grass Tyson?</h2>
                        <ul>
                            <li>Leader</li>
                            <li>Human Lover</li>
                            <li>Science Rock Star</li>
                        </ul>
                        <img src={testImg} alt=""/>

                    </TabsContainer>
                </Tabs>
            </>
        )
    }
}
