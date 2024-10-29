import React, { useEffect, useState } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { db } from "../../firebase";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import FlipMove from "react-flip-move";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { ChatBubbleOutline, PublishOutlined, Repeat, VerifiedUser } from "@mui/icons-material";

function Timeline({ isAuth }) {
  const [posts, setPosts] = useState([]);
  const [liked, setLiked] = useState({});

  const toggleLiked = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timeStamp", "desc"));
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    //リアルタイム表示
    onSnapshot(q, (querySnapShot) => {
      setPosts(querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            {...post}
            liked={liked[post.id] || false}
            toggleLiked={() => toggleLiked(post.id)}
          />
        ))}
      </div>

    </div>
  );
}

export default Timeline;
