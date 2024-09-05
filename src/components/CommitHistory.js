import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CommitHistory.css';

const CommitHistory = ({ commits }) => {
  const navigate = useNavigate();

  const handleProfileClick = (profileLink) => {
    navigate(profileLink);
  };

  const handleCommitClick = (commitTitle) => {
    // Navigate to commit detail page with commitTitle
    console.log(`Navigating to details of commit: ${commitTitle}`);
  };

  return (
    <div className="commit-history">
      <h2>🔔 멤버 활동 내역</h2>
      {commits.map((commitDate, index) => (
        <div key={index} className="commit-date-block">
          <h3>Commits on {commitDate.date}</h3>
          {commitDate.history.map((commit, idx) => (
            <div
              key={idx}
              className="commit-entry"
              onClick={() => handleCommitClick(commit.title)}
            ><div className='commit-author'>
              <img
                src={commit.author.profileImage}
                alt={commit.author.name}
                className="commit-author-img"
                onClick={() => handleProfileClick(commit.author.profileLink)}
              />
              <div
                className="commit-author-name"
                onClick={() => handleProfileClick(commit.author.profileLink)}
              >
                {commit.author.name}
              </div></div>
              <span className="commit-title">|&nbsp;&nbsp;{commit.title}</span>
              <span className="commit-time-ago">{commit.timeAgo}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CommitHistory;
