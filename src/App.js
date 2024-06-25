import './App.css';
import './scss/all.css'
import Login from './pages/account/Login';
import Regist from './pages/account/Regist';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/recipe/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              {/* <Route path="/">
                <Route index element={<Login />} />
                <Route path="account/regist" element={<Regist />}/>
              </Route> */}
              <Route path='/'>
                <Route index element={<HomePage />}/>
              </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
