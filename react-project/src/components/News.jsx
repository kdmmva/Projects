import React, { useState, useEffect } from 'react';
import { FaRegHeart as HeartIcon, FaRegLaughSquint as HahaIcon, FaRegSurprise as WowIcon, FaRegSadCry as SadIcon, FaRegAngry as AngryIcon } from 'react-icons/fa';
import { FaRegCommentDots as CommentIcon, FaShareAlt as ShareIcon } from 'react-icons/fa';
import '../News.css';
import { users as initialUsers } from '../data/data';

const News = () => {
    const [users, setUsers] = useState([]);
    const [showReactions, setShowReactions] = useState(null);
    const [selectedReaction, setSelectedReaction] = useState({});

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users'));
        if (savedUsers) {
            setUsers(savedUsers);
            const reactions = savedUsers.reduce((acc, user) => {
                if (user.selectedReaction) acc[user.id] = user.selectedReaction;
                return acc;
            }, {});
            setSelectedReaction(reactions);
        } else {
            setUsers(initialUsers);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const handleReactionToggle = (userId) => { 
        setShowReactions(showReactions === userId ? null : userId);
    };

    const handleReactionClick = (userId, reaction) => {
        setUsers(users.map(user => {
            if (user.id === userId) {
                if (user.selectedReaction === reaction) {
                    // если нажать дважды лайк можно убрать с поста
                    return {
                        ...user,
                        likes: user.likes - 1, 
                        selectedReaction: null 
                    };
                } else {
                    return {
                        ...user,
                        likes: user.likes + 1, 
                        selectedReaction: reaction 
                    };
                }
            }
            return user;
        }));
        setSelectedReaction(prevReactions => ({
            ...prevReactions,
            [userId]: reaction === selectedReaction[userId] ? null : reaction
        }));
    };

    return (
        <div className="news-feed">
            {users.map((user) => ( 
                <div key={user.id} className="news-post">
                    <div className="post-header">
                        <img src={user.userAvatar} alt={user.userName} className="user-avatar" />
                        <div className="post-info">
                            <h4 className="user-name">{user.userName}</h4>
                            <span className="post-time">{user.timeAgo}</span>
                        </div>
                    </div>
                    <p className="post-text">{user.postText}</p>
                    {user.postImage && <img src={user.postImage} alt="Post" className="post-image" />}
                    <div className="post-actions">
                        <button
                            className={`action-btn like ${selectedReaction[user.id] ? 'active' : ''}`}
                            onClick={() => handleReactionToggle(user.id)} 
                        >
                            <HeartIcon className="action-icon" />
                            {user.likes} {selectedReaction[user.id] && `(${selectedReaction[user.id]})`}
                            {showReactions === user.id && ( 
                                <div className="reactions-popup">
                                    <div className="reaction" onClick={() => handleReactionClick(user.id, 'Love')}>
                                        <HeartIcon className="reaction-icon" />
                                        Love
                                    </div>
                                    <div className="reaction" onClick={() => handleReactionClick(user.id, 'Haha')}>
                                        <HahaIcon className="reaction-icon" />
                                        Haha
                                    </div>
                                    <div className="reaction" onClick={() => handleReactionClick(user.id, 'Wow')}>
                                        <WowIcon className="reaction-icon" />
                                        Wow
                                    </div>
                                    <div className="reaction" onClick={() => handleReactionClick(user.id, 'Sad')}>
                                        <SadIcon className="reaction-icon" />
                                        Sad
                                    </div>
                                    <div className="reaction" onClick={() => handleReactionClick(user.id, 'Angry')}>
                                        <AngryIcon className="reaction-icon" />
                                        Angry
                                    </div>
                                </div>
                            )}
                        </button>
                        <button className="action-btn comment">
                            <CommentIcon className="action-icon" />
                            Comment {user.comments}
                        </button>
                        <button className="action-btn share">
                            <ShareIcon className="action-icon" />
                            Share {user.shares}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
    
export default News;
