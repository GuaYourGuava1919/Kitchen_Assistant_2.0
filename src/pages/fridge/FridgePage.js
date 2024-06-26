import React from 'react'
import { useEffect } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../firebase'

import Navbar from '../../components/Navbar'
import Header from '../../components/Header'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


function FridgePage() {
  const [status, setStatus] = React.useState('');
  // const [{ ingredients }, dispatch] = useStateValue();
  const [ingredients, setIngredients] = React.useState([]);


  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const formatDate = (v) => {
    const expSeconds = v; // 获取 Unix 时间戳（秒）
    const expDate = new Date(expSeconds * 1000); // 将秒转换为毫秒并创建 Date 对象

    const year = expDate.getFullYear();
    const month = String(expDate.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始，所以需要加 1，并保证两位数
    const day = String(expDate.getDate()).padStart(2, '0'); // 确保两位数

    const formattedDate = `${year}/${month}/${day}`; // 格式化为 yyyy-mm-dd

    console.log(formattedDate); // 输出 yyyy-mm-dd 格式的日期
    return formattedDate;
}

  async function fetchFridge() {
    const user = localStorage.getItem("uid");
    //全部食材
    var statusRef = collection(db, "user", `${user}`, "fridge");
    const q = query(statusRef);
    const querySnapshot = await getDocs(q);
    const temp = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      const expSeconds = doc.data().exp.seconds; // 獲取文檔中保存的 Unix 時間戳（秒）
      const nowSeconds = Math.floor(Date.now() / 1000); // 獲取當前時間的 Unix 時間戳（秒）
      const totalSeconds = expSeconds - nowSeconds; // 計算時間戳之間的總秒數差異
      const days = Math.floor(totalSeconds / 86400); // 將秒數差異轉換為天數（1天 = 86400秒）
      const formattedDate = formatDate(expSeconds);

      let status = "新鮮"; // 默认状态为新鲜
      if (days < 0) {
        status = "過期";
        console.log("過期", days);
      } else if (days <= 5 && days >= 0) { // 修正即期的判断条件，包括0天
        status = "即期";
        console.log("即期", days);
      }
        temp.push({
          status: status,
          formattedDate: formattedDate, // 添加转换后的日期
          ...doc.data()
        });
      setIngredients([...temp]);
      console.log(temp);
  });
  }

  useEffect(() => {
    fetchFridge();
  });


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
            value={status}
            label="狀態"
            onChange={handleChange}
          >
            <MenuItem value={10}>新鮮</MenuItem>
            <MenuItem value={20}>即期</MenuItem>
            <MenuItem value={30}>過期</MenuItem>
            </Select>
          </FormControl>
          <div className="cards">
          {ingredients.length > 0 ? (
              ingredients.map((ingredient, index) => (
                <div className="card" key={index}>
                  <img src="https://kidseatincolor.com/wp-content/uploads/2022/02/eggs-e1648216350119-500x500.jpeg" alt="" />
                  <div className="content">
                    <h3>{ingredient.name}</h3>
                    <p>數量：{ingredient.quantity}</p>
                    <p>保存期限：{ingredient.formattedDate}</p>
                    <p>登錄時間：{}</p>
                    <p>狀態：{ingredient.status}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>沒有資料顯示</p>
            )}
          </div>
        </div>
        <Navbar />
    </div>
  )
}

export default FridgePage
