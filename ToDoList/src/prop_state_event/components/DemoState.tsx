import { Component } from 'react';

type PropTypes = {
    username?: string;
};

type StateTypes = {
    count: number;
};

export default class DemoState extends Component<PropTypes, StateTypes> {
    constructor(props: PropTypes) {
        super(props);
        this.state = {
            count: 10,
        };
    }

    render() {
        const handleIncrease = () => {
            this.setState((prevState)=>({ count: prevState.count + 1 }));
            this.setState((prevState)=>({ count: prevState.count + 2 }));
            this.setState((prevState)=>({ count: prevState.count + 3 }));
        };
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={handleIncrease}>Increase</button>
            </div>
        );
    }
}
