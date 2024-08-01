import React, { useState } from 'react';
import { FaRegHeart as HeartIcon, FaRegLaughSquint as HahaIcon, FaRegSurprise as WowIcon, FaRegSadCry as SadIcon, FaRegAngry as AngryIcon } from 'react-icons/fa';
import { FaRegCommentDots as CommentIcon, FaShareAlt as ShareIcon } from 'react-icons/fa';
import '../News.css';
import { users } from '../data/data'; 

const News = () => {
    const [showReactions, setShowReactions] = useState(null);
  
    const handleReactionToggle = (userId) => { 
      setShowReactions(showReactions === userId ? null : userId);
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
                            className="action-btn like"
                            onClick={() => handleReactionToggle(user.id)} 
                        >
                            <HeartIcon className="action-icon" />
                            Like {user.likes}
                            {showReactions === user.id && ( 
                                <div className="reactions-popup">
                                    <div className="reaction">
                                        <HeartIcon className="reaction-icon" />
                                        Love
                                    </div>
                                    <div className="reaction">
                                        <HahaIcon className="reaction-icon" />
                                        Haha
                                    </div>
                                    <div className="reaction">
                                        <WowIcon className="reaction-icon" />
                                        Wow
                                    </div>
                                    <div className="reaction">
                                        <SadIcon className="reaction-icon" />
                                        Sad
                                    </div>
                                    <div className="reaction">
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
