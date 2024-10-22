import React, { useEffect, useState } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { db } from "../../firebase";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import FlipMove from "react-flip-move";
import { useNavigate } from 'react-router-dom';


function Timeline({isAuth}) {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timeStamp", "desc"));
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    //リアルタイム表示
    onSnapshot(q, (querySnapShot) => {
      setPosts(querySnapShot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    if(!isAuth) {
      navigate("/login")
    }
  }, [])

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post key={post.text} displayName={post.displayName} username={post.username} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Timeline;
