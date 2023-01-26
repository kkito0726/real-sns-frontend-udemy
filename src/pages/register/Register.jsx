import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Real SNS</h3>
            <span className="loginDesc">本格的なSNSを、自分の手で。</span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <p className="loginMsg">新規登録はこちら</p>
              <input
                type="text"
                className="loginInput"
                placeholder="User Name"
              />
              <input type="text" className="loginInput" placeholder="Email" />
              <input
                type="text"
                className="loginInput"
                placeholder="パスワード"
              />
              <input
                type="text"
                className="loginInput"
                placeholder="確認用パスワード"
              />
              <button className="loginButton">サインアップ</button>
              <button className="loginRegisterButton">ログインはこちら</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
