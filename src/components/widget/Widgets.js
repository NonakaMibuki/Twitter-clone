import { Search } from "@mui/icons-material";
import React, { useEffect } from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import "./Widgets.css"
import { useNavigate } from 'react-router-dom';


function Widgets({isAuth}) {

  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      navigate("/login")
    }
  }, [])

  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__serchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets__container">
        <h2>いまどうしてる?</h2>

        {/* ライブラリ */}
        <TwitterTweetEmbed tweetId={"1844613994709217467"} />
        <TwitterTimelineEmbed sourceType="profile" screenName="ElonMusk" options={{ height: 400 }} />
        <TwitterShareButton url={"https://x.com/elonmusk/status/1844612977967890706"} options={{ text: "Hello World" }} />
      </div>
    </div>
  );
}

export default Widgets;
