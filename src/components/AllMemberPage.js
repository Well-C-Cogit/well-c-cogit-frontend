import React from "react";
import { useLocation } from 'react-router-dom';
import MyHeader from "./MyHeader";
import './AllMemberPage.css'

function AllMemberPage() {
    const location = useLocation();
    const { state } = location;
    const community = state ? state.community : {};

    return (
        <div className="all-members-page">
        <h2 className="detail-members-title">👨🏻‍💻 전체 멤버</h2>
        <div className="detail-community-members">
            <div className="detail-members-list">
            {community.members.map((member, index) => (
                <MyHeader
                key={index}
                username={community.members_name[index]}
                user_id={community.members_id[index]}
                user_introduce={community.members_introduce[index]}
                profileImage={member}
                hideCommunityCount={true} // This hides the "내 모임" section
                />
            ))}
            </div>
        </div>
        </div>
    );
};

export default AllMemberPage;
