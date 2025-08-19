import  { Component } from "react";
import type { ChangeEvent } from "react";

type User = {
  firstName: string;
  lastName: string;
};

type State = {
  user: User;
};

export default class FormatName extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
      },
    };
  }

  formatName = (user: User): string => {
    return `${user.firstName} ${user.lastName}`;
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  render() {
    const { user } = this.state;

    return (
      <div style={{ padding: "20px" }}>
        <h2>Nhập tên người dùng</h2>
        <input
          type="text"
          name="firstName"
          placeholder="Nhập họ"
          value={user.firstName}
          onChange={this.handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nhập tên"
          value={user.lastName}
          onChange={this.handleChange}
        />
        <h3>Kết quả: {this.formatName(user)}</h3>
      </div>
    );
  }
}