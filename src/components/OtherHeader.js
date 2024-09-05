import React from "react";
import "./OtherHeader.css";

function OtherHeader() {
  const community_id = "CafeDongNae";
  const community_name = "카페동네 알고리즘 스터디";
  const community_introduce = "알고리즘 골드2 이상을 매일 2문제씩 풀고 인증하는 모임입니다.";
  const weekly_commits = 44;
  const total_commits = 648;

  return (
    <div className="otherheader">
      <div className="otherheader-content">
        <div className="otherprofile-section">
          <div className="otherprofile-image">
            <img
              src={`${process.env.PUBLIC_URL}/images/WSCG3.png`}
              alt="community-profile-img"
            />
          </div>
          <div className="otherprofile-info">
            <div className="othercommunity-id">@{community_id}</div>
            <div className="othercommunity-stats">
              <div>
              멤버 수 <strong>8</strong>
              </div>
              <div>
              금주 커밋 <strong>{weekly_commits}</strong>
              </div>
              <div>
              총 커밋 <strong>{total_commits}</strong>
              </div>
            </div>
            <div className="othercommunity-name">{community_name}</div>
            <div className="othercommunity-introduce">{community_introduce}</div>
          </div>
        </div>
        <div className="otherprofile-actions">
          <button>모임 정보 가기</button>
        </div>
      </div>
    </div>
  );
}

export default OtherHeader;
