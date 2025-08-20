import { Component } from 'react';

type PropTypes = {
    userName: string;
    age: number;
};
export default class Children extends Component<PropTypes> {
    render() {
        return (
            <div>
                Children
                <h2>Username: {this.props.userName}</h2>
                <h2>Age: {this.props.age}</h2>
            </div>
        );
    }
}
