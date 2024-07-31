import React, { useState } from 'react';
import { FaRegHeart as HeartIcon, FaRegLaughSquint as HahaIcon, FaRegSurprise as WowIcon, FaRegSadCry as SadIcon, FaRegAngry as AngryIcon } from 'react-icons/fa';
import { FaRegCommentDots as CommentIcon, FaShareAlt as ShareIcon } from 'react-icons/fa';
import '../News.css';
import { posts } from '../data/data';

const News = () => {
    const [showReactions, setShowReactions] = useState(null);
  
    const handleReactionToggle = (postId) => {
      setShowReactions(showReactions === postId ? null : postId);
    };

    return (
        <div className="news-feed">
            {posts.map((post) => (
                <div key={post.id} className="news-post">
                    <div className="post-header">
                        <img src={post.userAvatar} alt={post.userName} className="user-avatar" />
                        <div className="post-info">
                            <h4 className="user-name">{post.userName}</h4>
                            <span className="post-time">{post.timeAgo}</span>
                        </div>
                    </div>
                    <p className="post-text">{post.postText}</p>
                    {post.postImage && <img src={post.postImage} alt="Post" className="post-image" />}
                    <div className="post-actions">
                        <button
                            className="action-btn like"
                            onClick={() => handleReactionToggle(post.id)}
                        >
                            <HeartIcon className="action-icon" />
                            Like {post.likes}
                            {showReactions === post.id && (
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
                            Comment {post.comments}
                        </button>
                        <button className="action-btn share">
                            <ShareIcon className="action-icon" />
                            Share {post.shares}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
    
export default News;
