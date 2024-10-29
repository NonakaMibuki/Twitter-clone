import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./TweetBox.css"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import {db, auth} from '../../firebase';

function TweetBox() {

  const[tweetMessage, setTweetMessage] = useState("");
  const[tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault(); //ツイートボタンを押してもリロードしない

    addDoc(collection(db, "posts"), {
      displayName: "山田太郎",
      author: {
        username: "",
        id: auth.currentUser.uid
      },
      verified: true,
      text: tweetMessage,
      avatar:"https://cdn.pixabay.com/photo/2024/04/08/11/42/doggy-8683291_1280.jpg",
      image: tweetImage,
      timeStamp: serverTimestamp()
    });

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
        <form>
        <div className='tweetBox__input'>
            <Avatar />
            <input type='text' placeholder='いまどうしてる？' onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage}></input>
            </div>
            <input className='tweetBox__imageInput' placeholder='画像のURLを入力してください' type='text' onChange={(e) => setTweetImage(e.target.value)} value={tweetImage}></input>
            <Button className='tweetBox__tweetButton' type='submit' onClick={sendTweet}>ツイートする</Button>
        </form>
    </div>
  )
}

export default TweetBox