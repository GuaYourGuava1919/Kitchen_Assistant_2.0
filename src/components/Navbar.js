import React from 'react'
import LocalDiningIcon from '@mui/icons-material/LocalDining';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="btn">
            <LocalDiningIcon style={{fontSize:"20"}} />
            <p>食譜</p>
        </div>
        <div className="btn">
            <LocalDiningIcon style={{fontSize:"20"}} />
            <p>冰箱</p>
        </div>
        <div className="btn">
            <LocalDiningIcon style={{fontSize:"20"}} />
            <p>個人</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
