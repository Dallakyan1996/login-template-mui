import React from 'react';
import LoginPageComponent from './Components/LoginPageComponent/LoginPageComponent.js';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import { loginTokenStorage } from './Utils/constants';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { history } from './Components/helpers/history';
import { apiService } from './API/API';
// import { useLocation } from 'react-router-dom';
import SideBarComponent from './SideBarComponent.js/SideBarComponent';
import DashboardComponent from './Components/DashboardComponent/DashboardComponent';
import './App.css';

function App() {
  let [state, setState] = useState({
    currentUser: null
  })

  let currentUserLocal = null
  useEffect(() => {
    apiService.currentUser.subscribe(x => setState({ currentUser: x }));
    currentUserLocal = JSON.parse(localStorage.getItem(loginTokenStorage))
  }, [])
  const { currentUser } = state
  return (
    <div className="App">
      {currentUser && <>
        <div style={{ width: "100%", height: "100%" }}>
          <HeaderComponent />
          <div style={{ display: "flex" }}>
            <SideBarComponent />
            <div className='appContent'>
              <Routes history={history}>
                <Route exact path="/dashboard" element={<DashboardComponent />} />
                <Route exact path="/" element={<div>home</div>} />
                <Route component={<div>not found</div>} />
              </Routes>
            </div>
          </div>
        </div>
      </>}

    </div>
  );





  
}

export default App;
