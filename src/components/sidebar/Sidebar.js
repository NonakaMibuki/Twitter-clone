import React, { useEffect } from "react";
import XIcon from "@mui/icons-material/X";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import "./Sidebar.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Sidebar({isAuth}) {

  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      navigate("/login")
    }
  }, [])

  return (
    <div className="sidebar">
      {/* Icon */}
      <XIcon className="sidebar__xIcon" />

      {/* Sidebar Option */}
      <SidebarOption text="ホーム" Icon={HomeIcon} active/>
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon} />
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      <SidebarOption text="リスト" Icon={ListAltIcon} />
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      <SidebarOption text="もっとみる" Icon={MoreHorizIcon} />
      
       {/* Tweet Button */}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>ツイートする</Button>
        <Link to="/logout" className="logout__link">ログアウト</Link>
    </div>
  );
}

export default Sidebar;
