import React from 'react'
//icon
import KitchenIcon from '@mui/icons-material/Kitchen';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarIcon from '@mui/icons-material/Star';
//components
import Header from '../../components/Header'
import Navbar from '../../components/Navbar';
// import IngredientsPanel from '../../components/IngredientsPanel';


function HomePage() {
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

