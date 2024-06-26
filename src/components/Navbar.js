import React from 'react'
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FaceIcon from '@mui/icons-material/Face';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar">
        <div className="btn">
            <LocalDiningIcon style={{fontSize:"20"}} onClick={() => navigate('/')}/>
            <p>食譜</p>
        </div>
        <div className="btn">
            <KitchenIcon style={{fontSize:"20"}} onClick={() => navigate('/fridge')}/>
            <p>冰箱</p>
        </div>
        <div className="btn">
            <FaceIcon style={{fontSize:"20"}} onClick={() => navigate('/profile')}/>
            <p>個人</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
