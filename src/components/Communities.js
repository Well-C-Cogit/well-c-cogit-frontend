import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./Communities.css";

function Communities() {  
  const community = {
    name: "카페동네 알고리즘 스터디",
    commits: "3,500",
    lastCommit: "2분 전",
    type: "best",
    profileImg: "/images/WSCG3.png",
    members: ["/images/example.png", "/images/example1.jpg", "/images/example2.jpg", "/images/example3.jpg", "/images/example4.jpg", "/images/WSCG.png"],
    members_id: ["Jisu0917", "Suzy94", "THV1230", "Dohyun911", "Jiwon33", "Minhee02"],
    members_name: ["박지수", "배수지", "김태형", "이도현", "김지원", "강민희"],
    members_introduce: ["안녕하세요 저는 자바 개발자입니다. :-)", "저는 안드로이드 앱 개발하고 있습니다. 잘 부탁드림다.", 
      "초보 개발자입니당 잘 부탁드려용 >.<", "안녕하세요~ 백엔드 3년차 개발자입니다!", "웹 프론트 개발자입니다. 모두들 잘 부탁드립니다!!",
       "안녕하세요! 코린이입니다 :) 열심히 하겠습니다!!!"
    ],
    days: 88,
    location: "관악구 신림동",
    member_count: 6,
    score: 10000
  };

  const communities = [
    {
      name: "상도동 코틀린 플젝 모임",
      commits: "3,000",
      lastCommit: "8분 전",
      type: "regular",
      profileImg: "/images/WSCG4.png",
      members: ["/images/example.png", "/images/example1.jpg", "/images/example2.jpg", "/images/example3.jpg", "/images/example4.jpg", "/images/WSCG.png"],
      members_id: ["Jisu0917", "Suzy94", "THV1230", "Dohyun911", "Jiwon33", "Minhee02"],
      members_name: ["박지수", "배수지", "김태형", "이도현", "김지원", "강민희"],
      members_introduce: ["안녕하세요 저는 자바 개발자입니다. :-)", "저는 안드로이드 앱 개발하고 있습니다. 잘 부탁드림다.", 
        "초보 개발자입니당 잘 부탁드려용 >.<", "안녕하세요~ 백엔드 3년차 개발자입니다!", "웹 프론트 개발자입니다. 모두들 잘 부탁드립니다!!",
         "안녕하세요! 코린이입니다 :) 열심히 하겠습니다!!!"
      ],
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
      members_name: ["박지수", "이도현", "김지원", "강민희"],
      members_introduce: ["안녕하세요 저는 자바 개발자입니다. :-)", "저는 안드로이드 앱 개발하고 있습니다. 잘 부탁드림다.", 
        "안녕하세요~ 백엔드 3년차 개발자입니다!", "웹 프론트 개발자입니다. 모두들 잘 부탁드립니다!!",
      ],
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
      members_name: ["박지수", "배수지", "이도현", "김지원", "강민희"],
      members_introduce: ["안녕하세요 저는 자바 개발자입니다. :-)", 
        "초보 개발자입니당 잘 부탁드려용 >.<", "안녕하세요~ 백엔드 3년차 개발자입니다!", "웹 프론트 개발자입니다. 모두들 잘 부탁드립니다!!",
         "안녕하세요! 코린이입니다 :) 열심히 하겠습니다!!!"
      ],
      days: 23,
      location: "강남구 신사동",
      member_count: 5,
      score: 3500
    },
  ];

  const myCommunities = [
    {
      name: "카페동네 알고리즘 스터디",
      commits: 648,
      lastCommit: "4분 전",
      type: "my",
      profileImg: "/images/WSCG3.png",
      members: ["/images/example.png", "/images/example1.jpg", "/images/example2.jpg", "/images/example3.jpg", "/images/example4.jpg"],
      members_id: ["Jisu0917", "Suzy94", "THV1230", "Dohyun911", "Jiwon33"],
      members_name: ["박지수", "배수지", "김태형", "이도현", "김지원"],
      members_introduce: ["안녕하세요 저는 자바 개발자입니다. :-)", "저는 안드로이드 앱 개발하고 있습니다. 잘 부탁드림다.", 
        "초보 개발자입니당 잘 부탁드려용 >.<", "안녕하세요~ 백엔드 3년차 개발자입니다!", "웹 프론트 개발자입니다. 모두들 잘 부탁드립니다!!",
      ],
      days: 88,
      location: "관악구 신림동",
      member_count: 5,
      score: 10000,
    },
    {
      name: "코틀린 오프라인 스터디",
      commits: 709,
      lastCommit: "55분 전",
      type: "my",
      profileImg: "/images/WSCG2.png",
      members: ["/images/example.png", "/images/example1.jpg", "/images/example3.jpg", "/images/example4.jpg"],
      members_id: ["Jisu0917", "Suzy94", "Dohyun911", "Jiwon33"],
      members_name: ["박지수", "배수지", "이도현", "김지원"],
      members_introduce: ["안녕하세요 저는 자바 개발자입니다. :-)", "저는 안드로이드 앱 개발하고 있습니다. 잘 부탁드림다.", 
        "초보 개발자입니당 잘 부탁드려용 >.<",
         "안녕하세요! 코린이입니다 :) 열심히 하겠습니다!!!"
      ],
      days: 35,
      location: "강남구 논현동",
      member_count: 4,
      score: 6000,
    },
    {
      name: "퇴근 후 7시 모각코",
      commits: 244,
      lastCommit: "34분 전",
      type: "my",
      profileImg: "/images/WSCG1.png",
      members: ["/images/example.png", "/images/example3.jpg", "/images/example4.jpg"],
      members_id: ["Jisu0917", "THV1230", "Dohyun911"],
      members_name: ["박지수", "김태형", "이도현"],
      members_introduce: ["안녕하세요 저는 자바 개발자입니다. :-)",
        "초보 개발자입니당 잘 부탁드려용 >.<", "안녕하세요~ 백엔드 3년차 개발자입니다!",
      ],
      days: 56,
      location: "동작구 상도동",
      member_count: 3,
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
    <div className="communities-container">
        <div className="my-communities-container">
            <div className="my-communities" ref={containerRef}>
            {myCommunities.map((community, index) => (
                <CommunityItem
                key={index}
                name={community.name}
                commits={community.commits}
                lastCommit={community.lastCommit}
                type={community.type}
                profileImg={community.profileImg}
                members={community.members}
                members_id={community.members_id}
                members_name={community.members_name}
                members_introduce={community.members_introduce}
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
      
        <div className="communities-section">
            <h2>오늘의 베스트 모임</h2>
            <CommunityItem
            name={community.name}
            commits={community.commits}
            lastCommit={community.lastCommit}
            type={community.type}
            profileImg={community.profileImg}
            members={community.members}
            members_id={community.members_id}
            members_name={community.members_name}
            members_introduce={community.members_introduce}
            days={community.days}
            location={community.location}
            member_count={community.member_count}
            score={community.score}
            />
        </div>

        <div className="communities-section">
            <h2>기타 커뮤니티</h2>
            {communities.map((community, index) => (
            <CommunityItem
                key={index}
                name={community.name}
                commits={community.commits}
                lastCommit={community.lastCommit}
                type={community.type}
                profileImg={community.profileImg}
                members={community.members}
                members_id={community.members_id}
                members_name={community.members_name}
                members_introduce={community.members_introduce}
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

function CommunityItem({ name, commits, lastCommit, type, profileImg, members, members_id, days, location, member_count, score, members_name, members_introduce }) {   
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

    const navigate = useNavigate();

    const goToDetailPage = (community) => {
      navigate('/detail', {
        state: { community }
      });
    };
  
    // Example community data
    const thisCommunity = {
      name: name,
      type: type,
      lastCommit: lastCommit,
      profileImg: profileImg,
      commits: commits,
      members: members,
      members_id: members_id,
      members_name: members_name,
      members_introduce: members_introduce,
      member_count: member_count,
      days: days,
      location: location,
      score: score
    };
    
    return (
      <div onClick={() => goToDetailPage(thisCommunity)} className={`community-item ${type}`}>
        <div className={`community-inner ${type}`}>
        <div className="community-header">
          <div className="profile-image">
            <img
              className="profile-icon"
              src={process.env.PUBLIC_URL + profileImg}
              alt="community-profile-img"
            />
          </div>
  
          <div className="community-profile">
            <div className="community-info">
              <strong>
                <img className="score-icon" src={process.env.PUBLIC_URL + iconSrc} alt="score-icon" />
                {name}
              </strong>
              <p className="community-current-info">
                <span className="location">{location}</span>
                <span className="last-commit">{lastCommit} 활동</span>
              </p>
            </div>
          </div>
        </div>
  
        <div className="commits">
          <p>🔥 &nbsp;<b>{member_count}명</b>이 활동 중인 모임이에요.</p>
          <p>✨ <b>{days}일</b> 동안 총 커밋 <b>{commits}회</b>를 달성했어요!</p>
        </div>
  
        <div className="community-members">
          <p className="community-members-title">참여 멤버</p>
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
        <div className={`community-banner ${type}`}></div>
        </div>
      </div>
    );
  }

export default Communities;
