import React from 'react'
//icon
import KitchenIcon from '@mui/icons-material/Kitchen';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleIcon from '@mui/icons-material/People';

//components
import Header from '../../components/Header'
import Navbar from '../../components/Navbar';
// import IngredientsPanel from '../../components/IngredientsPanel';

import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';


function HomePage() {
  const [recipe, setRecipe] = useState([]);
  const query_recipe = query(
    collection(db, "recipe"),
    where("likes", ">=", 80)
  );

  useEffect(() => {
    const fetchRecipe = async () => {
        const querySnapshot = await getDocs(query_recipe);
        const newRecipes = [];
        querySnapshot.forEach((doc) => {
            const data = { ...doc.data(), id: doc.id };
            newRecipes.push(data);
        });
        console.log(newRecipes)
        setRecipe(newRecipes);
    };
    fetchRecipe();
  }, []); 

  return (
    <div>
      <Header />
      {/* 冰箱食材數據 */}
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
      {/* 熱門討論 */}
      <div className="popRecipe_box">
      <div className="title">
          <WhatshotIcon style={{fontSize:"20"}} />
          <p>熱門討論</p>
      </div>
        <div className="cards">
          {recipe?.map((item,index) => (
            <div className="card" key={index}>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>{item.name}</h3>
                <p>{item.author}</p>
              </div>
              <div className="data_box">
                  <div className="index">
                    <FavoriteBorderIcon />
                    <p>{item.likes}</p>
                  </div>
                  <div className="index">
                    <BookmarkBorderIcon />
                  </div> 
                  <div className="index">
                    <PeopleIcon />
                    <p>{item.serving}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 推薦清單 */}
      <div className="foryou_box">
        <div className="title">
            <StarIcon style={{fontSize:"20"}} />
            <p>推薦清單</p>
        </div>
        <div className="cards">
          <div className="card">
            <img src="https://image-cdn-flare.qdm.cloud/q6967964a11062/image/data/recipe/Kung%20Pao%20Chicken/-06_1.jpg" alt="" />
            <div className="content">
              <h3>宮保雞丁</h3>
              <p>左大師</p>
            </div>
          </div>
          <div className="card">
            <img src="https://image-cdn-flare.qdm.cloud/q6967964a11062/image/data/recipe/Kung%20Pao%20Chicken/-06_1.jpg" alt="" />
            <div className="content">
              <h3>宮保雞丁</h3>
              <p>左大師</p>
            </div>
          </div>
          <div className="card">
            <img src="https://image-cdn-flare.qdm.cloud/q6967964a11062/image/data/recipe/Kung%20Pao%20Chicken/-06_1.jpg" alt="" />
            <div className="content">
              <h3>宮保雞丁</h3>
              <p>左大師</p>
            </div>
          </div>
          <div className="card">
            <img src="https://image-cdn-flare.qdm.cloud/q6967964a11062/image/data/recipe/Kung%20Pao%20Chicken/-06_1.jpg" alt="" />
            <div className="content">
              <h3>宮保雞丁</h3>
              <p>左大師</p>
            </div>
          </div>
      </div>
      </div>
      <Navbar />
    </div>
  )
}

export default HomePage

