import React from 'react'
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { db } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";
import { useState } from 'react';
import { useEffect } from 'react';


function Profile() {
    const [dispatch] = useStateValue();
    const [userInfo, setUserInfo] = useState([]);
    const navigate = useNavigate();
    const logOut = async function () {
        try {
          const auth = getAuth();
          await signOut(auth);
          dispatch({
            type: actionTypes.SET_USER,
            user: null,
          });
          localStorage.removeItem("uid");
          navigate("/");
          console.log("已登出");
        } catch (error) {
          console.log(error);
        }
    };
    useEffect(() => {
      const uid = localStorage.getItem("uid");
      async function fetchData() {
        const docRef = doc(db, "user", `${uid}`);
        const docSnap = await getDoc(docRef);
        const temp = [];
        if (docSnap.exists()) {
          temp.push({ ...docSnap.data() });
          setUserInfo(...temp);
          console.log(userInfo)
        } else {
          console.log("No such document!");
        }
      }
      fetchData();
    });
    
  return (
    <div>
        <Header />
        <div className="userInfo_box">
          <h3>個人資訊</h3>
          <p>姓名：{userInfo.name}</p>
          <p>電子郵件：{userInfo.email} </p>
          {userInfo.auth?(<p>權限：管理者</p>):<p>權限：一般使用者</p>}
          <div onClick={logOut} className="btn">登出</div>
        </div>
        <Navbar />
    </div>
  )
}

export default Profile
