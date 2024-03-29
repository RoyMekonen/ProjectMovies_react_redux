import React from "react";
import loginImg from "../../images/login.jpg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="login" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Enter UserName" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Enter password" />
            </div>
          </div>
        </div>
        <div className="footer">
            <button type="button" className="btn">Login</button>
        </div>
      </div>
    );
  }
}
