import React from "react";
import { useLocation } from "react-router-dom";
import "./UserDetailPage.css";

function UserDetailPage() {
    const location = useLocation();
    const { state } = location;
    const member = state ? state.member : {};

    return (
        <div className="user-detail-page">
            <h2>Member Detail</h2>
            <img
                className="user-profile-icon"
                src={process.env.PUBLIC_URL + member.profileImage}
                alt={`${member.name}-profile`}
            />
            <p>@{member.id}</p>
            <p>Name: {member.name}</p>
            <p>Introduce: {member.introduce}</p>
        </div>
    );
}

export default UserDetailPage;
