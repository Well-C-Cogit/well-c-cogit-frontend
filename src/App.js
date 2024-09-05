import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import Communities from "./components/Communities";
import NavigationBar from "./components/NavigationBar";
import DetailPage from "./components/DetailPage";
import ProfilePage from "./components/ProfilePage";
import AllMemberPage from "./components/AllMemberPage";
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
                  <MyHeader
                    username={'박지수'}
                    user_id={'Jisu0917'}
                    user_introduce={'안녕하세요 ;-) 안드로이드 개발자입니다. 주력 언어는 코틀린입니다.'}
                    profileImage={'/images/example1.jpg'}
                    hideCommunityCount={false}
                   />
                    <Communities />
                  </div>
                </div>
              }
            />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/members" element={<AllMemberPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
