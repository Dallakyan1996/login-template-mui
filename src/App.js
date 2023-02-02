import React from 'react';
import LoginPageComponent from './Components/LoginPageComponent/LoginPageComponent.js';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { apiService } from './API/API';
import SideBarComponent from './Components/SideBarComponent/SideBarComponent';
import PageNotFound from './Components/PageNotFound/PageNotFound.js';
import './App.css';
import routesArrFn from './Routes/routes.js';

function App() {
  let [state, setState] = useState({
    currentUser: null
  })
  const { currentUser } = state
  useEffect(() => {
    apiService.currentUser.subscribe(x => setState({ currentUser: x }));
  }, [])

  const routesArr = routesArrFn()

  return (
    <div className="App">
      {<>
        <div style={{ width: "100%", height: "100%" }}>
          {currentUser && <HeaderComponent />}
          <div style={{ display: "flex", height: "100%" }}>
            {currentUser && <SideBarComponent />}
            <div className={'appContent'} style={{ margin: !currentUser && 0 }}>
              <Routes>
                {
                  routesArr.map(route => {
                    return <Route key={route.path} exact={route.exact} path={route.path} element={route.component} />
                  })
                }
                <Route
                  path="*"
                  element={
                    <PageNotFound />
                  }
                />
              </Routes>
              {/* {!user  ? <Navigate replace to="/" />:""} */}
            </div>
          </div>
        </div>
      </>}
      {/* <Routes>

        <Route exact path="/login" element={<LoginPageComponent />} />
      </Routes> */}
    </div>
  )
}

export default App;