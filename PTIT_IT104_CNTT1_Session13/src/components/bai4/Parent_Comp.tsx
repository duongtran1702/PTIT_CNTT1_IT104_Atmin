import { Component } from 'react';
import Children_Comp from './Children_Comp';
type Infor = {
    name: string;
};
export default class Parent_Comp extends Component {
    state: { infor: Infor } = { infor: { name: 'Atmin Trần' } };
    render() {
        return (
            <div>
                <h3>Parent Component</h3>
                <div>Tên gửi đi: {this.state.infor.name}</div>
                <Children_Comp name={this.state.infor.name} />
            </div>
        );
    }
}
