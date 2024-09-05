import React, { useState, useEffect, useRef } from "react";
import "./MyCommunities.css";

function MyCommunities() {
  const myCommunities = [
    {
      name: "카페동네 알고리즘 스터디",
      community_img: "/images/WSCG3.png",
      lastCommit: "4분 전",
      total_commits: 648,
      member_count: 5,
      members_id: ["Jisu0917", "Suzy94", "THV1230", "Dohyun911", "Jiwon33"],
      members_img: ["/images/example.png", "/images/example1.jpg", "/images/example2.jpg", "/images/example3.jpg", "/images/example4.jpg"],
      days: 88,
      location: "관악구 신림동",
      score: 10000,
    },
    {
      name: "코틀린 오프라인 스터디",
      community_img: "/images/WSCG2.png",
      lastCommit: "55분 전",
      total_commits: 709,
      member_count: 4,
      members_id: ["Jisu0917", "Suzy94", "Dohyun911", "Jiwon33"],
      members_img: ["/images/example.png", "/images/example1.jpg", "/images/example3.jpg", "/images/example4.jpg"],
      days: 35,
      location: "강남구 논현동",
      score: 6000,
    },
    {
      name: "퇴근 후 7시 모각코",
      community_img: "/images/WSCG1.png",
      lastCommit: "34분 전",
      total_commits: 244,
      member_count: 3,
      members_id: ["Jisu0917", "THV1230", "Dohyun911"],
      members_img: ["/images/example.png", "/images/example3.jpg", "/images/example4.jpg"],
      days: 56,
      location: "동작구 상도동",
      score: 8000,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentIndex(index);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (index) => {
    const container = containerRef.current;
    const scrollPosition = container.clientWidth * index;
    container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    setCurrentIndex(index);
  };

  return (
    <div className="my-communities-container">
      <div className="my-communities" ref={containerRef}>
        {myCommunities.map((community, index) => (
          <CommunityItem
            key={index}
            name={community.name}
            commits={community.total_commits}
            lastCommit={community.lastCommit}
            type={community.type}
            profileImg={community.community_img}
            members={community.members_img}
            members_id={community.members_id}
            days={community.days}
            location={community.location}
            member_count={community.member_count}
            score={community.score}
          />
        ))}
      </div>
      <div className="my-dots-container">
        {myCommunities.map((_, index) => (
          <div
            key={index}
            className={`my-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
      
    </div>
  );
}

function CommunityItem({ name, commits, lastCommit, profileImg, members, members_id, days, location, member_count, score }) {
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
    <div className="my-communities-item">
      <div className="my-communities-inner">
      <div className="my-communities-header">
        <div className="my-profile-image">
          <img
            className="my-profile-icon"
            src={process.env.PUBLIC_URL + profileImg}
            alt="my-community-profile-img"
          />
        </div>
        <div className="my-communities-profile">
          <div className="my-communities-info">
            <strong>
              <img className="my-score-icon" src={process.env.PUBLIC_URL + iconSrc} alt="score-icon" />
              {name}
            </strong>
            <p className="my-current-info">
            <span className="my-location">{location}</span>
            <span className="my-last-commit">{lastCommit} 활동</span>
            </p>
          </div>
        </div>
      </div>
      <div className="my-commits">
        <p>🔥 &nbsp;<strong>{member_count}명</strong>이 활동 중인 모임이에요.</p>
        <p>✨ <strong>{days}일</strong> 동안 총 커밋 <strong>{commits}회</strong>를 달성했어요!</p>
      </div>

      <div className="my-members">
        <p className="my-members-title">참여 멤버</p>
        <div className="my-members-list">
          {members.map((member, index) => (
            <div key={index} className="my-member-item">
              <img
                className="my-profile-icon my-member"
                src={process.env.PUBLIC_URL + member}
                alt={`my-member-profile-img-${index}`}
              />
              <span className="my-member-id">{members_id[index]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="my-banner"></div>
    </div>
    </div>
  );
}

export default MyCommunities;
