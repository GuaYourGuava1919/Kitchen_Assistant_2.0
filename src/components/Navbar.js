import React from 'react'
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FaceIcon from '@mui/icons-material/Face';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="btn">
            <LocalDiningIcon style={{fontSize:"20"}} />
            <p>食譜</p>
        </div>
        <div className="btn">
            <KitchenIcon style={{fontSize:"20"}} />
            <p>冰箱</p>
        </div>
        <div className="btn">
            <FaceIcon style={{fontSize:"20"}} />
            <p>個人</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
