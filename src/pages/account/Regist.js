import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../../firebase';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useNavigate } from 'react-router-dom';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Regist() {

    const [account, setAccount] = useState({
        email: "",
        displayName: "",
        password: "",
        confirmPwd: "", 
    });

    const navigate = useNavigate();
    const goTo = () => {
        navigate("/");
    }

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAccount({
            ...account,
            [event.target.name]: event.target.value,
        });
        // console.log(account)
    }    

    const handleSubmit = async () =>{
        try{
            if(account.password !== account.confirmPwd){
                alert("密碼不一致")
                return
            }
            else if(account.password.length > 5){
                const res = await createUserWithEmailAndPassword(
                    auth,
                    account.email,
                    account.password
                )
                // console.log(res)
                setTimeout(() => setOpen(true), 1000);
                setTimeout(() => window.location.href = '/', 3000);
            }
            else{
                alert("密碼長度不足")
                return
            }
        }catch(error){
            console.log(error)
        }
    }
    

  return (
    <div className="app">
    <div className='regist_container'>
        <img className='img' src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-cooking-logo-png-image_6089722.png" alt="logo" />
        <p className='L_title'>請先註冊</p>
        <div className='box'>
            <div className="item">
                <h3 className='title'>電子郵件</h3>
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
                <input type="password" name="password" value={account.password} onChange={handleChange} placeholder="*至少6為密碼"/>
            </div>
            <div className="item">
                <h3 className='title'>確認密碼</h3>
                <input type="password" name="confirmPwd" value={account.confirmPwd} onChange={handleChange} placeholder="*兩次密碼需一致"/>
            </div>
            <button className='btn' onClick={handleSubmit}>
                註冊並登入
            </button>
            <button className='login_btn'onClick={goTo} >
                返回登入
            </button>
        </div>
        <br></br>
        <div className="footer">
            <p>Copyright © 2023 Ryoriman. All rights reserved.</p>
            <p>版權所有© 2023 Ryoriman</p>
        </div>
        <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogContent style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <CheckCircleIcon style={{fontSize:'50', margin:'10', color:'green'}}/>
                <DialogContentText id="alert-dialog-slide-description">
                    註冊成功！稍候將為您登入...
                </DialogContentText>
            </DialogContent>
        </Dialog>
    </div>
    </div>
  )
}

export default Regist
