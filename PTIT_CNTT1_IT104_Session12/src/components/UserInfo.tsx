import  { Component } from "react";

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <h3>Thông tin cá nhân</h3>
        <ul>
          <li>Họ và tên: <b>Atmin</b></li>
          <li>Giới tính: <b>Nam</b></li>
          <li>Ngày sinh: <b>17/02/2006</b></li>
          <li>Email: <b>atmin@gmail.com</b></li>
          <li>Địa chỉ: <b>Thanh Xuân, Hà Nội</b></li>
        </ul>
      </div>
    );
  }
}
