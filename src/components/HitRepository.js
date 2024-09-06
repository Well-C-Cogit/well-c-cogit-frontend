import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HitRepository.css';

const HitRepository = ({ repositories }) => {
    const navigate = useNavigate();

    const handleProfileClick = (profileLink) => {
        navigate(profileLink);
    };
    
    const handleRepoClick = (repoLink) => {
        window.open(repoLink, '_blank');
    };
    
    return (
        <div className="hit-repository">
        <h2>⚡ 커밋 많은 레포</h2>
        {repositories.map((repo, index) => (
            <div key={index} className="repo-entry">
            <div className='repo-info'>
                <img
                    src={repo.author.profileImage}
                    alt={repo.author.name}
                    className="repo-author-img"
                    onClick={() => handleProfileClick(repo.author.profileLink)}
                />
                <span 
                className="repo-author-name"
                onClick={() => handleProfileClick(repo.author.profileLink)}
                >{repo.author.name}</span>
                <span 
                className="repo-name"
                onClick={() => handleRepoClick(repo.repoLink)}
                >|&nbsp;&nbsp;{repo.name}</span>
            </div>
            <div className='repo-commit-container'>
                <img src="/images/ic_commit.PNG" alt="commit-icon" className="repo-commit-icon" />
                <span className="repo-commits">{repo.commits}회</span>
            </div>
            </div>
        ))}
        </div>
    );
};

export default HitRepository;
