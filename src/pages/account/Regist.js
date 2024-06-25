import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../../firebase';

function Regist() {
    // const auth = getAuth();

    const [account, setAccount] = useState({
        email: "",
        displayName: "",
        password: "",
        confirmPwd: "", 
    });

    
    
    const handleChange = function (e) {
        setAccount({ ...account, [e.target.name]: e.target.value });
        console.log(account);
        console.log(e.target);
    };
    const handleSubmit = async function () {
        try{
            if(account.password !== account.confirmPwd){
                alert("密碼不一致")
            }else{
            await createUserWithEmailAndPassword(
                auth,
                account.email,
                account.password
            );
            alert("註冊成功")
            }
        }catch (error) {
            alert(error)
        }
        
    }
    

  return (
    <div className='regist_container'>
        <img className='img' src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-cooking-logo-png-image_6089722.png" alt="logo" />
        <p className='L_title'>請先註冊</p>
        <form action="" className='box'>
            <div className="item">
                <h3 className='title'>電郵</h3>
                <input
                name="email"
                onChange={handleChange}
                value={account.email}
                type="text"
                placeholder="ex.123@gmail.com"
                ></input>
            </div>
            <div className="item">
                <h3 className='title'>帳號名稱</h3>
                <input type="text" name="displayName" value={account.displayName} onChange={handleChange} placeholder="ex.王太太"/>
            </div>
            <div className="item">
                <h3 className='title'>密碼</h3>
                <input type="password" name="password" value={account.password} onChange={handleChange} placeholder="xxx"/>
            </div>
            <div className="item">
                <h3 className='title'>確認密碼</h3>
                <input type="password" name="confirmPwd" value={account.confirmPwd} onChange={handleChange} placeholder="xxx"/>
            </div>
            <button className='btn' onClick={handleSubmit}>
                註冊並登入
            </button>
        </form>
        <br></br>
        <div className="footer">
            <p>Copyright © 2023 Ryoriman. All rights reserved.</p>
            <p>版權所有© 2023 Ryoriman</p>
        </div>
    </div>
  )
}

export default Regist
