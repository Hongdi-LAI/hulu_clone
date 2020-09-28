import React from "react";
import "./Header.css";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        {/* All the icons go here */}
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header__icon header__icon--active">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon header__icon--active">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon header__icon--active">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div className="header__icon header__icon--active">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="header__icon header__icon--active">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt=""
      />
    </div>
  );
}

export default Header;
