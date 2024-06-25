import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

const navigate = useNavigate();
const goTo = () => {
    navigate("account/regist");
}
  return (
    <div className='login_container'>
        <img className='img' src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-cooking-logo-png-image_6089722.png" alt="logo" />
        <h2 className='title'>請先登入</h2>
        <form action="" className='box'>
            <div className="item">
                <h3 className='title'>帳號</h3>
                <input type="text" />
            </div>
            <div className="item">
                <h3 className='title'>密碼</h3>
                <input type="password" />
            </div>
            <button className='reset_btn' type='submit'>
                忘記密碼
            </button>
            <button className='btn' type='submit'>
                登入
            </button>
        </form>
        <div className="registPwd">
            <p>還沒有帳號嗎？</p>
            <button className='btn'onClick={goTo} >
                註冊一個
            </button>
        </div>
        <div className="footer">
            <p>Copyright © 2023 Ryoriman. All rights reserved.</p>
            <p>版權所有© 2023 Ryoriman</p>
        </div>
    </div>
  )
}

export default Login
