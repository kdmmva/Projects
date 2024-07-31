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
            userAvatar: 'https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png',
            timeAgo: '5 hours ago',
            postText: 'Check out our new tire collection! High-quality and durable tires for all seasons.',
            postImage: 'https://www.gotodobbs.com/wp-content/uploads/2017/02/new-tires.jpg',
            likes: 230,
            comments: 20,
            shares: 10,
          },
          {
            id: 3,
            userName: 'Alice Johnson',
            userAvatar: 'https://w7.pngwing.com/pngs/308/71/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png',
            timeAgo: '1 day ago',
            postText: 'Our car detailing service has been rated 5 stars! Book now and give your car a fresh look.',
            postImage: 'https://www.sage.com/en-gb/blog/wp-content/uploads/sites/10/2022/03/brad-starkey-eP8h7YVhFHk-unsplash-car-wash.jpg',
            likes: 180,
            comments: 15,
            shares: 8,
          },
          {
            id: 4,
            userName: 'Bob Brown',
            userAvatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
            timeAgo: '2 days ago',
            postText: 'Our mechanics are certified experts in brake repairs. Get your brakes checked today!',
            postImage: 'https://performanceautospecialists.com/wp-content/uploads/2020/12/brake-repair-Wilmington-1.jpg',
            likes: 120,
            comments: 10,
            shares: 6,
          },
          {
            id: 5,
            userName: 'Emily Davis',
            userAvatar: 'https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg',
            timeAgo: '3 days ago',
            postText: 'Introducing our new loyalty program! Earn points with every service and enjoy great rewards.',
            postImage: 'https://visionedgemarketing.com/wp-content/uploads/2007/02/Customer-Loyaly-Program.png',
            likes: 250,
            comments: 30,
            shares: 15,
          },
          {
            id: 6,
            userName: 'Michael Lee',
            userAvatar: 'https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg',
            timeAgo: '4 days ago',
            postText: 'Don\'t miss out on our tire rotation service. Extend the life of your tires with regular rotations.',
            postImage: 'https://globalautomotiveva.com/wp-content/uploads/2018/02/large-tire-rotation-1.jpg',
            likes: 160,
            comments: 12,
            shares: 7,
          },
          {
            id: 7,
            userName: 'Sarah Wilson',
            userAvatar: 'https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png',
            timeAgo: '5 days ago',
            postText: 'Our oil change service is now faster than ever! Book your appointment online and save time.',
            postImage: 'https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg',
            likes: 200,
            comments: 18,
            shares: 9,
          },
          {
            id: 8,
            userName: 'David Kim',
            userAvatar: 'https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png',
            timeAgo: '6 days ago',
            postText: 'New car batteries in stock! Ensure your car starts smoothly every time with our quality batteries.',
            postImage: 'https://cdn.vox-cdn.com/thumbor/Msdz_ratR2cZJhWewpIv3AAgrd4=/0x0:5500x4125/1400x1050/filters:focal(0x0:5500x4125):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/50554733/car-batteries.0.jpg',
            likes: 140,
            comments: 8,
            shares: 5,
          },
          {
            id: 9,
            userName: 'Jessica Garcia',
            userAvatar: 'https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
            timeAgo: '7 days ago',
            postText: 'We offer comprehensive diagnostics for all vehicle issues. Visit us for an accurate assessment.',
            postImage: 'https://d1rz4ui464s6g7.cloudfront.net/wp-content/uploads/2018/12/08171907/shutterstock_1711212049.jpg',
            likes: 220,
            comments: 25,
            shares: 12,
          },
          {
            id: 10,
            userName: 'William Martinez',
            userAvatar: 'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg',
            timeAgo: '1 week ago',
            postText: 'Exciting news! We are expanding our services to include auto body repairs. Stay tuned for more updates.',
            postImage: 'https://www.cccollision.net/wp-content/uploads/2021/01/bigstock-Car-Service-Worker-Examining-V-354492014.jpg',
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