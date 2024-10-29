import { ChatBubbleOutline, PublishOutlined, Repeat, VerifiedUser } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import { forwardRef } from "react";

const Post = forwardRef((props, ref) => {
  const { displayName, username, id, verified, text, image, avatar, liked, toggleLiked } = props;

  // onSnapshot(q, (querySnapShot) => {
  //     setPosts(querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  //   });

  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />@{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          <img src={image} />
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <button className="btn" onClick={toggleLiked}>
              <img
                src={
                  liked
                    ? `${process.env.PUBLIC_URL}/heart-icon-red.png`
                    : `${process.env.PUBLIC_URL}/heart-icon.png`
                }
                className="favorite__icon"
                alt="heart"
              />
            </button>
            <PublishOutlined fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Post;
