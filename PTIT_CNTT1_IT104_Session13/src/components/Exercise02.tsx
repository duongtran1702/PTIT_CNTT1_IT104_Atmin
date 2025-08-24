import { Component } from 'react';

interface PersonalInfor {
    id: number;
    name: string;
    dob: string;
    adress: string;
}

export default class Exercise02 extends Component<object, PersonalInfor> {
    state: PersonalInfor = {
        id: 1702,
        name: 'Atmin Trần',
        dob: '17/02/2006',
        adress: 'Hà Đông',
    };

    render() {
        const itemStyle: React.CSSProperties = { padding: '8px 0px' };

        return (
            <div>
                <h2 style={{ ...itemStyle, marginBottom: 0 }}>Thông tin cá nhân</h2>
                <div style={itemStyle}>Id: {this.state.id}</div>
                <div style={itemStyle}>Tên: {this.state.name}</div>
                <div style={itemStyle}>Ngày sinh: {this.state.dob}</div>
                <div style={itemStyle}>Địa chỉ: {this.state.adress}</div>
            </div>
        );
    }
}
