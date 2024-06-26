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
        <div className="btn" onClick={() => navigate('/')}>
            <LocalDiningIcon style={{fontSize:"20"}} />
            <p>食譜</p>
        </div>
        <div className="btn" onClick={() => navigate('/fridge')}>
            <KitchenIcon style={{fontSize:"20"}} />
            <p>冰箱</p>
        </div>
        <div className="btn" onClick={() => navigate('/profile')}>
            <FaceIcon style={{fontSize:"20"}} />
            <p>個人</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
