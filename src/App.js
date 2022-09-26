import React from 'react';
import LoginPageComponent from './Components/LoginPageComponent/LoginPageComponent.js';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import { useEffect, useState } from 'react';
import { Routes, Route} from "react-router-dom";
import { apiService } from './API/API';
import SideBarComponent from './Components/SideBarComponent/SideBarComponent';
import DashboardComponent from './Components/DashboardComponent/DashboardComponent';
import PageNotFound from './Components/PageNotFound/PageNotFound.js';
import './App.css';

function App() {
  let [state, setState] = useState({
    currentUser: null
  })

  useEffect(() => {
    apiService.currentUser.subscribe(x => setState({ currentUser: x }));
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
              <Routes>
                <Route exact path="/dashboard" element={<DashboardComponent />} />
                <Route exact path="/" element={<input
                  type="text"
                  aria-label={"labelText"}
                  aria-required="true"
                  // onChange={onchangeHandler}
                  // value={inputValue}
                  name="name"
                />} />
                {/* <Route component={<div>not found</div>} /> */}
                <Route
                  path="*"
                  element={
                    <PageNotFound />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </>}
      {
        !currentUser &&
        <LoginPageComponent />
      }
    </div>
  )
}

export default App;