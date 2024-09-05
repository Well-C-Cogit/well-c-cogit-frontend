import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
import "./NavigationBar.css";

function NavigationBar() {
  const user_name = "박지수";
  const user_id = "Jisu0917";
  const user_profile_img = "/images/example1.jpg";

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navigation-bar">
      <div className="nav-container">
        <div className="nav-item start">
          <img
            className="nav-icon"
            src={`${process.env.PUBLIC_URL}/images/WSCG1.png`}
            alt="user-profile-img"
          />
        </div>
        <div className="nav-item center">
          <img
            className="nav-logo"
            src={`${process.env.PUBLIC_URL}/images/ic_logo.png`}
            alt="user-profile-img"
          />
        </div>
        <div className="nav-item end" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* Overlay */}
      <div className={`overlay ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}></div>

      {/* Side Menu */}
      <div className={`side-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="side-menu-content">
          <div className="profile-section">
            <img
              className="profile-image"
              src={`${process.env.PUBLIC_URL}` + user_profile_img}
              alt="profile-img"
            />
            <div className="user-info">
              <div className="user-name">{user_name}</div>
              <div className="user-id">@{user_id}</div>
            </div>
          </div>
          <div className="menu-button">
            <Link to="/profile">내 정보</Link>
          </div>
          <div className="menu-button">
            <Link to="/">홈으로 가기</Link>
          </div>
          <div className="menu-button" onClick={() => alert('정말 로그아웃 하시겠습니까?')}>로그아웃</div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
