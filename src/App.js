import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import Communities from "./components/Communities";
import NavigationBar from "./components/NavigationBar";
import DetailPage from "./components/DetailPage";
import ProfilePage from "./components/ProfilePage";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <NavigationBar />
        <div className="scrollable-content">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2 className="my-profile-title">내 정보</h2>
                  <div className="my-info">
                    <MyHeader />
                    <Communities />
                  </div>
                </div>
              }
            />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
