import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Login() {

    const [open, setOpen] = useState(false);
    const [account, setAccount] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const goTo = () => {
        navigate("account/regist");
    }

    const handleChange = (event) => {
        setAccount({
            ...account,
            [event.target.name]: event.target.value,
        });
        // console.log(account)
    }   
    
    const handleSubmit = async () =>{
        try{
            await signInWithEmailAndPassword(
                auth,
                account.email,
                account.password
            )
            console.log("登入成功",auth.currentUser.uid)
            // console.log(auth.currentUser.uid)
            localStorage.setItem("uid",auth.currentUser.uid);
            setTimeout(() => setOpen(true), 1000);
            setTimeout(() => window.location.href = '/', 3000);
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className="app">
    <div className='login_container'>
        <img className='img' src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-cooking-logo-png-image_6089722.png" alt="logo" />
        <h2 className='title'>請先登入</h2>
        <div action="" className='box'>
            <div className="item">
                <h3 className='title'>電子郵件</h3>
                <input type="text" name='email' onChange={handleChange} value={account.email}/>
            </div>
            <div className="item">
                <h3 className='title'>密碼</h3>
                <input type="password" name='password' onChange={handleChange} value={account.password}/>
            </div>
            <button className='reset_btn' type='submit'>
                忘記密碼
            </button>
            <button className='btn' onClick={handleSubmit}>
                登入
            </button>
        </div>
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
    <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogContent style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <CheckCircleIcon style={{fontSize:'50', margin:'10'}}/>
                <DialogContentText id="alert-dialog-slide-description">
                    登入成功！
                </DialogContentText>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Login
