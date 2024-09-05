import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./DetailPage.css";

function DetailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const community = state ? state.community : {};

    const handleMemberClick = (memberData) => {
        navigate('/user-detail', { state: { member: memberData } });
    };

    let iconSrc;

    if (community.score >= 10000) {
      iconSrc = "/images/ic_score1.png";
    } else if (community.score >= 7000 && community.score < 10000) {
      iconSrc = "/images/ic_score2.png";
    } else if (community.score >= 5000 && community.score < 7000) {
      iconSrc = "/images/ic_score3.png";
    } else if (community.score >= 3000 && community.score < 5000) {
      iconSrc = "/images/ic_score4.png";
    } else if (community.score >= 2000 && community.score < 3000) {
      iconSrc = "/images/ic_score5.png";
    } else {
      iconSrc = "/images/ic_score6.png";
    }

    return (
      <div className="detail-page">
        <div className="detail-scroll-content">
        
        <div className="detail-banner">
          <p><b>@{community.members_id[1]}</b>님이 <b>{community.lastCommit}</b>에 커밋을 올렸어요!</p>
          <p className="detail-button">커밋 내역 보러가기 👉🏻</p>
        </div>

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

        <div className="detail-body">

        <div className="detail-boxes">
            <h2>🏆 모임 통계</h2>
            <div className="detail-grid">
              <div className="detail-card">
              <strong>(통계 지표 1)</strong>
              <p>통계... 또는 그래프</p>
              </div>
              <div className="detail-card">
              <strong>(통계 지표 2)</strong>
              <p>통계... 또는 그래프</p>
              </div>
              <div className="detail-card">
              <strong>(통계 지표 3)</strong>
              <p>통계... 또는 그래프</p>
              </div>
              <div className="detail-card">
              <strong>(통계 지표 4)</strong>
              <p>통계... 또는 그래프</p>
              </div>
            </div>
          </div>


          <div className="detail-active">
            <h2>🔔 멤버 활동 내역</h2>
            <div className="detail-card">
                <strong>최근 커밋</strong>
                <p><b>@{community.members_id[2]}</b>님이 <br/> <b>"백준 1971번 문제 풀이"</b> 커밋을 올렸어요!</p>
                <p><b>@{community.members_id[0]}</b>님이 <br/> <b>"Canopy 테이블 업데이트"</b> 커밋을 올렸어요!</p>
            </div>
            <div className="detail-card">
                <strong>조회수 많은 레포</strong>
                <p><b>@{community.members_id[1]}</b>님의 <br/> <b>"심전도 그래프 Android 앱"</b> 레포가 인기예요!</p>
                <p><b>@{community.members_id[3]}</b>님의 <br/> <b>"Piano LED Visulalizer"</b> 레포가 인기예요!</p>
            </div>
          </div>

          
        </div>

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
