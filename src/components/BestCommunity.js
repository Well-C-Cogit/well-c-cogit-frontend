import React from "react";
import "./BestCommunity.css";

function BestCommunity() {
  const bestCommunity = {
    name: "카페동네 알고리즘 스터디",
    commits: "3,500",
    lastCommit: "2분 전",
    type: "best",
    profileImg: "/images/WSCG3.png",
    members: ["/images/example.png", "/images/example1.jpg", "/images/example2.jpg", "/images/example3.jpg", "/images/example4.jpg", "/images/WSCG.png"],
    members_id: ["Jisu0917", "Suzy94", "THV1230", "Dohyun911", "Jiwon33", "Minhee02"],
    days: 88,
    location: "관악구 신림동",
    member_count: 6,
    score: 10000
  };

  const otherCommunities = [
    {
      name: "상도동 코틀린 플젝 모임",
      commits: "3,000",
      lastCommit: "8분 전",
      type: "regular",
      profileImg: "/images/WSCG4.png",
      members: ["/images/example.png", "/images/example1.jpg", "/images/example2.jpg", "/images/example3.jpg", "/images/example4.jpg", "/images/WSCG.png"],
      members_id: ["Jisu0917", "Suzy94", "THV1230", "Dohyun911", "Jiwon33", "Minhee02"],
      days: 67,
      location: "동작구 상도동",
      member_count: 6,
      score: 7400
    },
    {
      name: "신림동 매일 커밋하기 모임",
      commits: "1,000",
      lastCommit: "12분 전",
      type: "regular",
      profileImg: "/images/WSCG1.png",
      members: ["/images/example.png", "/images/example1.jpg", "/images/example2.jpg", "/images/example3.jpg"],
      members_id: ["Jisu0917", "Dohyun911", "Jiwon33", "Minhee02"],
      days: 45,
      location: "관악구 신림동",
      member_count: 4,
      score: 6000
    },
    {
      name: "신사동 CS 책 스터디 모임",
      commits: "800",
      lastCommit: "44분 전",
      type: "regular",
      profileImg: "/images/WSCG2.png",
      members: ["/images/example.png", "/images/example1.jpg", "/images/example2.jpg", "/images/example3.jpg", "/images/example4.jpg"],
      members_id: ["Jisu0917", "Suzy94", "Dohyun911", "Jiwon33", "Minhee02"],
      days: 23,
      location: "강남구 신사동",
      member_count: 5,
      score: 3500
    },
  ];

  return (
    <div className="bestcommunity">
      <div className="bestcommunity-list">
        <h2>오늘의 베스트 모임</h2>
        <CommunityItem
          name={bestCommunity.name}
          commits={bestCommunity.commits}
          lastCommit={bestCommunity.lastCommit}
          type={bestCommunity.type}
          profileImg={bestCommunity.profileImg}
          members={bestCommunity.members}
          members_id={bestCommunity.members_id}
          days={bestCommunity.days}
          location={bestCommunity.location}
          member_count={bestCommunity.member_count}
          score={bestCommunity.score}
        />
      </div>

      <div className="other-communities">
        <h2>기타 커뮤니티</h2>
        {otherCommunities.map((community, index) => (
          <CommunityItem
            key={index}
            name={community.name}
            commits={community.commits}
            lastCommit={community.lastCommit}
            type={community.type}
            profileImg={community.profileImg}
            members={community.members}
            members_id={community.members_id}
            days={community.days}
            location={community.location}
            member_count={community.member_count}
            score={community.score}
          />
        ))}
      </div>
    </div>
  );
}

function CommunityItem({ name, commits, lastCommit, type, profileImg, members, members_id, days, location, member_count, score }) {
  let iconSrc;

  if (score >= 10000) {
    iconSrc = "/images/ic_score1.png";
  } else if (score >= 7000 && score < 10000) {
    iconSrc = "/images/ic_score2.png";
  } else if (score >= 5000 && score < 7000) {
    iconSrc = "/images/ic_score3.png";
  } else if (score >= 3000 && score < 5000) {
    iconSrc = "/images/ic_score4.png";
  } else if (score >= 2000 && score < 3000) {
    iconSrc = "/images/ic_score5.png";
  } else {
    iconSrc = "/images/ic_score6.png";
  }
  
  return (
    <div className={`bestcommunity-item ${type}`}>
      <div className="bestcommunity-header">
        <div className="profile-image">
          <img
            className="profile-icon"
            src={process.env.PUBLIC_URL + profileImg}
            alt="community-profile-img"
          />
        </div>

        <div className="bestcommunity-profile">
          <div className="bestcommunity-info">
            <strong>
              <img className="score-icon" src={process.env.PUBLIC_URL + iconSrc} alt="score-icon" />
              {name}
            </strong>
            <p className="bestcommunity-current-info">
              <span className="location">{location}</span>
              <span className="last-commit">{lastCommit} 활동</span>
            </p>
          </div>
        </div>
      </div>

      <div className="commits">
        <p>🔥 &nbsp;<strong>{member_count}명</strong>이 활동 중인 모임이에요.</p>
        <p>✨ <strong>{days}일</strong> 동안 총 커밋 <strong>{commits}회</strong>를 달성했어요!</p>
      </div>

      <div className="bestcommunity-members">
        <p className="bestcommunity-members-title">참여 멤버</p>
        <div className="members-list">
          {members.map((member, index) => (
            <div key={index} className="member-item">
              <img
                className="profile-icon member"
                src={process.env.PUBLIC_URL + member}
                alt={`member-profile-img-${index}`}
              />
              <span className="member-id">{members_id[index]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`bestcommunity-banner ${type}`}></div>
    </div>
  );
}

export default BestCommunity;
