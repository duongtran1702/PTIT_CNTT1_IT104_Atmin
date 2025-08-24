import { Component } from 'react';
type InforProps = {
    name: string;
};

export default class Children_Comp extends Component<InforProps> {
    constructor(props: InforProps) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Children component</h3>
                <div>Tên nhận từ cha: {this.props.name}</div>
            </div>
        );
    }
}
