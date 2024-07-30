import React, { useState } from 'react';
import { FaRegHeart as HeartIcon, FaRegLaughSquint as HahaIcon, FaRegSurprise as WowIcon, FaRegSadCry as SadIcon, FaRegAngry as AngryIcon } from 'react-icons/fa';
import { FaRegCommentDots as CommentIcon, FaShareAlt as ShareIcon } from 'react-icons/fa';
import './News.css';

const News = () => {
    const [showReactions, setShowReactions] = useState(null);
  
    const handleReactionToggle = (postId) => {
      setShowReactions(showReactions === postId ? null : postId);
    };

    const newsPosts = [
        {
            id: 2,
            userName: 'Jane Smith',
            userAvatar: 'https://via.placeholder.com/50',
            timeAgo: '5 hours ago',
            postText: 'Check out our new tire collection! High-quality and durable tires for all seasons.',
            postImage: 'https://via.placeholder.com/800x400?text=New+Tires',
            likes: 230,
            comments: 20,
            shares: 10,
          },
          {
            id: 3,
            userName: 'Alice Johnson',
            userAvatar: 'https://via.placeholder.com/50',
            timeAgo: '1 day ago',
            postText: 'Our car detailing service has been rated 5 stars! Book now and give your car a fresh look.',
            postImage: 'https://via.placeholder.com/800x400?text=Car+Detailing',
            likes: 180,
            comments: 15,
            shares: 8,
          },
          {
            id: 4,
            userName: 'Bob Brown',
            userAvatar: 'https://via.placeholder.com/50',
            timeAgo: '2 days ago',
            postText: 'Our mechanics are certified experts in brake repairs. Get your brakes checked today!',
            postImage: 'https://via.placeholder.com/800x400?text=Brake+Repairs',
            likes: 120,
            comments: 10,
            shares: 6,
          },
          {
            id: 5,
            userName: 'Emily Davis',
            userAvatar: 'https://via.placeholder.com/50',
            timeAgo: '3 days ago',
            postText: 'Introducing our new loyalty program! Earn points with every service and enjoy great rewards.',
            postImage: 'https://via.placeholder.com/800x400?text=Loyalty+Program',
            likes: 250,
            comments: 30,
            shares: 15,
          },
          {
            id: 6,
            userName: 'Michael Lee',
            userAvatar: 'https://via.placeholder.com/50',
            timeAgo: '4 days ago',
            postText: 'Don\'t miss out on our tire rotation service. Extend the life of your tires with regular rotations.',
            postImage: 'https://via.placeholder.com/800x400?text=Tire+Rotation',
            likes: 160,
            comments: 12,
            shares: 7,
          },
          {
            id: 7,
            userName: 'Sarah Wilson',
            userAvatar: 'https://via.placeholder.com/50',
            timeAgo: '5 days ago',
            postText: 'Our oil change service is now faster than ever! Book your appointment online and save time.',
            postImage: 'https://via.placeholder.com/800x400?text=Oil+Change',
            likes: 200,
            comments: 18,
            shares: 9,
          },
          {
            id: 8,
            userName: 'David Kim',
            userAvatar: 'https://via.placeholder.com/50',
            timeAgo: '6 days ago',
            postText: 'New car batteries in stock! Ensure your car starts smoothly every time with our quality batteries.',
            postImage: 'https://via.placeholder.com/800x400?text=Car+Batteries',
            likes: 140,
            comments: 8,
            shares: 5,
          },
          {
            id: 9,
            userName: 'Jessica Garcia',
            userAvatar: 'https://via.placeholder.com/50',
            timeAgo: '7 days ago',
            postText: 'We offer comprehensive diagnostics for all vehicle issues. Visit us for an accurate assessment.',
            postImage: 'https://via.placeholder.com/800x400?text=Vehicle+Diagnostics',
            likes: 220,
            comments: 25,
            shares: 12,
          },
          {
            id: 10,
            userName: 'William Martinez',
            userAvatar: 'https://via.placeholder.com/50',
            timeAgo: '1 week ago',
            postText: 'Exciting news! We are expanding our services to include auto body repairs. Stay tuned for more updates.',
            postImage: 'https://via.placeholder.com/800x400?text=Auto+Body+Repairs',
            likes: 190,
            comments: 22,
            shares: 11,
          },
        ];

        return (
            <div className="news-feed">
                {newsPosts.map((post) => (
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