import React from 'react'
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';


function Profile() {
    const [dispatch] = useStateValue();
    const navigate = useNavigate();
    const handleSubmit = async function () {
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
    
  return (
    <div>
        <Header />
        <button onClick={handleSubmit}>登出</button>
        <Navbar />
    </div>
  )
}

export default Profile
