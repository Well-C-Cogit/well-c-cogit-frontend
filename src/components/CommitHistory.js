import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CommitHistory.css';

const CommitHistory = ({ commits }) => {
  const navigate = useNavigate();

  const handleProfileClick = (profileLink) => {
    navigate(profileLink);
  };

  const handleCommitClick = (commitLink) => {
    window.open(commitLink, '_blank');
  };

  return (
    <div className="commit-history">
      <h2>🔔 최근 멤버 활동</h2>
      {commits.map((commitDate, index) => (
        <div key={index} className="commit-date-block">
          <h3>Commits on {commitDate.date}</h3>
          {commitDate.history.map((commit, idx) => (
            <div key={idx} className="commit-entry"
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
              <span
              className="commit-title"
              onClick={() => handleCommitClick(commit.commitLink)}
              >|&nbsp;&nbsp;{commit.title}</span>
              <span className="commit-time-ago">{commit.timeAgo}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CommitHistory;
