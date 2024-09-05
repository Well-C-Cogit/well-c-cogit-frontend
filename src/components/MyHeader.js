import React from "react";
import "./MyHeader.css";

function MyHeader() {
  const username = "박지수";
  const user_introduce = "안녕하세요 :-) 개발자 꿈나무입니다. 주력 언어는 자바입니다!";
  const user_communitiy_count = 3;
  const weekly_commits = 26;
  const total_commits = 453;

  return (
    <div className="myheader">
      <div className="myheader-content">
        <div className="myprofile-section first">
          <div className="myprofile-image">
            <img
              src={`${process.env.PUBLIC_URL}/images/example1.jpg`}
              alt="user-profile-img"
            />
          </div>
          <div className="myprofile-info">
          <div className="myuser-name">{username}</div>
            <div className="myuser-stats">
              <div>
                <p>내 모임</p> <strong>{user_communitiy_count}</strong>
              </div>
              <div>
                <p>금주 커밋</p> <strong>{weekly_commits}</strong>
              </div>
              <div>
                <p>총 커밋</p> <strong>{total_commits}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="myprofile-section second">
          <div className="myprofile-intro">
            <div className="myuser-introduce">{user_introduce}</div>
          </div>
          {/* <div className="myprofile-actions">
              <button>내 정보 가기</button>
            </div> */}
        </div>
        <div className="myheader-banner"></div>
      </div>
    </div>
  );
}

export default MyHeader;
