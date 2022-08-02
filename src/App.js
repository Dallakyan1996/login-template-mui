import './App.css';
import LoginPageComponent from './Components/LoginPageComponent/LoginPageComponent.js';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import { loginTokenStorage } from './Utils/constants';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { history } from './Components/helpers/history';
import { apiService } from './API/API';
import { useLocation } from 'react-router-dom';
import SideBarComponent from './SideBarComponent.js/SideBarComponent';
function App(props) {
  let [state, setState] = useState({
    currentUser: null
  })

  const location = useLocation()
  let currentUserLocal = null
  useEffect(() => {
    apiService.currentUser.subscribe(x => setState({ currentUser: x }));
    currentUserLocal = JSON.parse(localStorage.getItem(loginTokenStorage))
  }, [])
  useEffect(() => {
    // if (!currentUserLocal) {
    //   const { from } = { from: { pathname: "/login" } };
    //   history.push(from);
    // }
  }, [location])
  const { currentUser } = state
  return (
    <div className="App">
      {currentUser && <>
        <div style={{ width: "100%", height: "100%" }}>
          <HeaderComponent />
          <div style={{ display: "flex" }}>
            <SideBarComponent />
            <Routes history={history}>
              <Route exact path="/dashboard" element={<div>test</div>} />
              <Route element={<div>not found</div>} />
            </Routes>
          </div>
        </div>
      </>}
      {!currentUser &&
        <LoginPageComponent />
      }
    </div>
  );
}

export default App;
