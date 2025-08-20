import { Component } from 'react';

export default class DemoEvent extends Component {
    render() {
        const handleClick = (id: number) => {
            console.log('Clicked: ', id);
        };
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log('Value: ', e.target.value);
        };
        return (
            <div>
                DemoEvent <br />
                <button onClick={() => handleClick(1)}>click me</button>
                <br />
                <br />
                <input type="text" onChange={handleChange} />
            </div>
        );
    }
}
