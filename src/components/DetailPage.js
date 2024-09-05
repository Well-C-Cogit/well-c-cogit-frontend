import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./DetailPage.css";
import CommitHistory from './CommitHistory'; 
import PieChart from './PieChart';

const commits = [
  // Sample commits data
  {
    date: 'Sep 5, 2024',
    history: [
      {
        title: '메인페이지, 디테일페이지 1차 구성',
        author: {
          name: '박지수',
          id: '@Jisu0917',
          profileImage: '/images/example.png',
          profileLink: '/user-detail'
        },
        timeAgo: '10분 전'
      },
      {
        title: 'PieChart 그리기 & DetailPage 레이아웃 수정',
        author: {
          name: '강민희',
          id: '@minhee02',
          profileImage: '/images/example3.jpg',
          profileLink: '/user-detail'
        },
        timeAgo: '30분 전'
      }
    ]
  },
  {
    date: 'Sep 4, 2024',
    history: [
      {
        title: 'Initial commit',
        author: {
          name: '정선교',
          id: '@tjsry0466',
          profileImage: '/images/WSCG.png',
          profileLink: '/user-detail'
        },
        timeAgo: '20시간 전'
      }
    ]
  }
];



function DetailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const community = state ? state.community : {};

    const handleMemberClick = (memberData) => {
        navigate('/user-detail', { state: { member: memberData } });
    };

    let iconSrc;
    const scoreIconSrc = ["/images/ic_score1.png", "/images/ic_score2.png", "/images/ic_score3.png",
      "/images/ic_score4.png", "/images/ic_score5.png", "/images/ic_score6.png"
    ];

    if (community.score >= 10000) {
      iconSrc = scoreIconSrc[0];
    } else if (community.score >= 7000 && community.score < 10000) {
      iconSrc = scoreIconSrc[1];
    } else if (community.score >= 5000 && community.score < 7000) {
      iconSrc = scoreIconSrc[2];
    } else if (community.score >= 3000 && community.score < 5000) {
      iconSrc = scoreIconSrc[3];
    } else if (community.score >= 2000 && community.score < 3000) {
      iconSrc = scoreIconSrc[4];
    } else {
      iconSrc = scoreIconSrc[5];
    }

    // 파이 차트에 사용될 데이터 (예시 데이터)
    const pieChartData = [
    { name: community.members_name[0], commits: 120 },
    { name: community.members_name[1], commits: 102 },
    { name: community.members_name[2], commits: 205 },
    { name: community.members_name[3], commits: 134 },
    { name: community.members_name[4], commits: 87 },
  ];

    return (
      <div className="detail-page">
        <div className="detail-scroll-content">
        
        <div className="detail-banner">
          <p><b>@{community.members_id[1]}</b>님이 <b>{community.lastCommit}</b>에 커밋을 올렸어요!</p>
          <p className="detail-button">커밋 내역 보러가기 👉🏻</p>
        </div>

        <div className="detail-header-box">
        <div className="detail-header">
            <div className="detail-profile-image">
                <img
                className="detail-profile-icon"
                src={process.env.PUBLIC_URL + community.profileImg}
                alt="community-profile-img"
                />
            </div>
            <div className="detail-info">
                <div className="detail-main-info">
                    <img className="detail-score-icon" src={process.env.PUBLIC_URL + iconSrc} alt="detail-score-icon" />
                    <h2>{community.name}</h2>
                </div>
                <div className="detail-sub-info">
                    <p><span>🚀 {community.location}</span>|<span>👨🏻‍💻 {community.member_count}명</span></p>
                </div>
            </div>
        </div>

        <div className="detail-primary-members">
          <strong className="detail-primary-members-title">🐶 주요 활동 멤버</strong>
          <div className="detail-primary-members-list">
          {community.members.map((member, index) => (
            <div key={index} className="detail-primary-member-item">
              <img
                style={{
                  zIndex: index,
                  position: 'relative',
                  marginLeft: `-15px`
                }}
                className="detail-primary-profile-icon detail-primary-member"
                src={process.env.PUBLIC_URL + member}
                alt={`detail-primary-member-profile-img-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

        <strong className="detail-medals-title">🏆 최근 받은 메달</strong>
        <div className="detail-medals">
          <img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[0]} alt="detail-score-icon" />
          <img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[1]} alt="detail-score-icon" />
          <img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[0]} alt="detail-score-icon" />
          <img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[3]} alt="detail-score-icon" />
          <img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[0]} alt="detail-score-icon" />
          <img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[3]} alt="detail-score-icon" />
          <img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[2]} alt="detail-score-icon" />
          <img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[5]} alt="detail-score-icon" />
          <img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[4]} alt="detail-score-icon" />
        </div>


      </div>

      <div className="detail-body">
        <div className="detail-boxes">
            <h2>🐾 모임 통계</h2>
              <div className="detail-card commits" >
                <div className="detail-commits">
                  <strong>총 커밋</strong> <strong>{community.commits}회</strong>
                  {pieChartData.map((data, index) => (
                        <div 
                            key={index}
                            className="detail-piedata-commits"
                            >
                            <span>{index + 1}위. </span>
                            <span>{data.name}</span> <span>{data.commits}회</span>
                            </div>
                            ))}
                </div>
                <PieChart data={pieChartData} />
              </div>
              
              <div className="detail-grid">
              <div className="detail-card">
              <strong>받은 메달</strong>
              <p>
              <span>8월 </span>
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[1]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[0]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[3]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[2]} alt="detail-score-icon" />
              </p>
              <p>
              <span>7월 </span>
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[4]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[4]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[5]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[3]} alt="detail-score-icon" />
              </p>
              <p>
              <span>6월 </span>
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[1]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[3]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[1]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[4]} alt="detail-score-icon" />
              </p>
              <p>
              <span>5월 </span>
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[2]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[4]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[3]} alt="detail-score-icon" />
              &nbsp;<img className="detail-score-icon" src={process.env.PUBLIC_URL + scoreIconSrc[5]} alt="detail-score-icon" />
              </p>
              </div>
              <div className="detail-card">
              <strong>(통계 지표 3)</strong>
              <p>통계... 또는 그래프</p>
              </div>
            </div>
          </div>

        <div className="detail-commit-history">
          <CommitHistory commits={commits} />
        </div>

        <div className="detail-active">
            <h2>⭐ 조회수 많은 레포</h2>
            <div className="detail-card">
                <p><b>@{community.members_id[1]}</b>님의 <br/> <b>"심전도 그래프 Android 앱"</b> 레포가 인기예요!</p>
                <p><b>@{community.members_id[3]}</b>님의 <br/> <b>"Piano LED Visulalizer"</b> 레포가 인기예요!</p>
            </div>
        </div>
    </div>

      <h2 className="detail-members-title">👨🏻‍💻 전체 멤버</h2>
        <div className="detail-community-members">
            <div className="detail-members-list">
                {community.members.map((member, index) => (
                    <div 
                        key={index} 
                        className="detail-member-item" 
                        onClick={() => handleMemberClick({
                            profileImage: member,
                            id: community.members_id[index],
                            name: community.members_name[index],
                            introduce: community.members_introduce[index]
                        })}
                    >
                        <img
                            className="detail-profile-icon detail-member"
                            src={process.env.PUBLIC_URL + member}
                            alt={`detail-member-profile-img-${index}`}
                        />
                        <div className="detail-member-info">
                            <div className="detail-member-id">
                                <span>{community.members_name[index]}</span>
                                <strong>@{community.members_id[index]}</strong>
                            </div>
                            <p className="detail-member-introduce">
                                {community.members_introduce[index]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        
        </div>
      </div>
    );
}

export default DetailPage;
