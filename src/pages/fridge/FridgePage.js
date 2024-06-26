import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function FridgePage() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='fridge_container'>
        <Header />
        <div className="fridge_info_box">
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
        {/* 冰箱&購物車 */}
        <div className="function_box">
            <div className="function f1">
                <FoodBankIcon />
                <p>打開冰箱</p>
            </div>
            <div className="function f2">
                <ShoppingCartIcon />
                <p>打開購物車</p>
            </div>
        </div>
        {/* 食材使用狀況 */}
        <div className="ingredient_status">
          <div className="title">
            <OutdoorGrillIcon />
            <p>食材使用狀況</p>
          </div>
          <FormControl size="small">
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>新鮮</MenuItem>
            <MenuItem value={20}>即期</MenuItem>
            <MenuItem value={30}>過期</MenuItem>
            </Select>
          </FormControl>
          <div className="cards">
            <div className="card">
            <img src="https://kidseatincolor.com/wp-content/uploads/2022/02/eggs-e1648216350119-500x500.jpeg" alt="" />
            <div className="content">
              <h3>雞蛋</h3>
              <p>數量：3</p>
              <p>保存期限：2024/06/26</p>
              <p>登錄時間：2024/06/20</p>
              <p>狀態：新鮮</p>
            </div>
            </div>
            <div className="card">
            <img src="https://kidseatincolor.com/wp-content/uploads/2022/02/eggs-e1648216350119-500x500.jpeg" alt="" />
            <div className="content">
              <h3>雞蛋</h3>
              <p>數量：3</p>
              <p>保存期限：2024/06/26</p>
              <p>登錄時間：2024/06/20</p>
              <p>狀態：新鮮</p>
            </div>
            </div>
            <div className="card">
            <img src="https://kidseatincolor.com/wp-content/uploads/2022/02/eggs-e1648216350119-500x500.jpeg" alt="" />
            <div className="content">
              <h3>雞蛋</h3>
              <p>數量：3</p>
              <p>保存期限：2024/06/26</p>
              <p>登錄時間：2024/06/20</p>
              <p>狀態：新鮮</p>
            </div>
            </div>
          </div>
        </div>
        <Navbar />
    </div>
  )
}

export default FridgePage
