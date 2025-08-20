import { Component } from 'react';


interface Person {
    name: string;
}
export default class Exercises01 extends Component<object,Person> {
    state: Person = { name: 'Atmin Trần' };
    render() {
        return (
            <div>
                <h2>Họ tên: {this.state.name}</h2>
            </div>
        );
    }
}
