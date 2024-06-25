import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header_container">
    <div className="box">
      <h3>今晚我想來點</h3>
      <div className="search">
        <input type="text" />
        <SearchIcon/>
        </div>
    </div>
      <NotificationsIcon style={{fontSize:"30"}}/>
    </div>
  )
}

export default Header
