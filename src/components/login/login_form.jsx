import React from 'react';
import { TextField, Button } from '@material-ui/core';
// password min length 6
class LoginForm extends React.Component {

  handleClick = () => {
    const audio = new Audio('http://localhost/Tinh%20Nhan%20Oi%20-%20Orange_%20Binz_%20Superbrothe.m4a')
    audio.play()
  }
  render() {

    return (
      <form onSubmit={this.props.handleSubmit}>
        <TextField variant="outlined" label="Tên đăng nhập" />
        <TextField variant="outlined" label="Mật khẩu" />
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Đăng nhập
        </Button>
      </form>
    )
  }
}

export default LoginForm;
