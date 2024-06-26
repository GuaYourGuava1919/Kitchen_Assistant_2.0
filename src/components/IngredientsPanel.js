import React from 'react'
import KitchenIcon from '@mui/icons-material/Kitchen';


function IngredientsPanel() {
  return (
    <div>
      <div className="info_box">
        <div className="title">
          <KitchenIcon style={{fontSize:"20"}} />
          <p>冰箱食材數據</p>
        </div>
          <div className="items">
            <div className="item">
              <p>總數</p>
              <p>40</p>
            </div>
            <div className="item">
              <p style={{color:'#FDCE00',fontWeight:600}}>即期</p>
              <p style={{color:'#FDCE00',fontWeight:600}}>8</p>
            </div>
            <div className="item">
              <p style={{color:'#A483FE',fontWeight:600}}>過期</p>
              <p style={{color:'#A483FE',fontWeight:600}}>3</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default IngredientsPanel
