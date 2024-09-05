import React from "react";
import "./MembersView.css";

function MembersView() {

  return (
    <div className="members-view">
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
  );
}


export default MembersView;
