import { Component } from 'react';
import Children from './Children';

export default class Parent extends Component {
    render() {
        const userName: string = 'Atmin';
        return (
            <>
                <div>Parent username:{userName}</div>
                <Children userName={userName} age={30}/>
            </>
        );
    }
}
