import './App.css';
// import './scss/all.css'
import Login from './pages/account/Login';
import Regist from './pages/account/Regist';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/recipe/HomePage';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import Profile from './pages/account/Profile';
import FridgePage from './pages/fridge/FridgePage';

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (!user && localStorage.getItem("uid")) {
      const uid = localStorage.getItem("uid");
      dispatch({
        type: actionTypes.SET_USER,
        user: uid,
      });
    }
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
        {!user ? (
              <Route path="/">
                <Route index element={<Login />} />
                <Route path="account/regist" element={<Regist />}/>
              </Route>
        ) : (
              <Route path='/'>
                <Route index element={<HomePage />}/>
              </Route> 
        )}
              <Route path="/fridge">
                <Route index element={<FridgePage />} />
              </Route>
              <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
