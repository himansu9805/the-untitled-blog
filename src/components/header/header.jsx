import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { GrLogout, GrUserSettings } from "react-icons/gr";
import { ImProfile } from "react-icons/im";

import "./header.css";

function Header(props) {
  const [headerType, setHeaderType] = useState("nav");
  const [headerItemType, setHeaderItemType] = useState("nav__item");
  const history = useHistory();
  const location = useLocation();

  const gotoHome = () => history.push(`/`);

  const gotoBlog = () => history.push(`/blog`);

  const gotoLogin = () => history.push(`/login`);

  const gotoProfile = () => history.push("/profile");

  const signout = () => {
    supabase.auth.signOut();
    window.location.reload();
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setHeaderType("nav__home");
    } else if (location.pathname === "/blog/create") {
      setHeaderType("nav__blog");
      setHeaderItemType("nav__item__blog");
    } else {
      setHeaderType("nav");
      setHeaderItemType("nav__item");
    }
  }, [location, props]);

  return (
    <header className={headerType}>
      <div className="nav__bar">
        <div className="nav__container">
          <span className={headerItemType} onClick={() => gotoHome()}>
            Home
          </span>
          <span className={headerItemType} onClick={() => gotoBlog()}>
            Blog
          </span>
          <span className={headerItemType}>About</span>
          <span className={headerItemType}>Contact</span>
        </div>
        <div className="nav__container">
          {props.user !== null ? (
            <div className="dropdown">
              <div className="nav__user">
                <img
                  className="image"
                  src={props.image}
                  alt={props.user.name[0]}
                />
                <span className="name">{props.user.name}</span>
              </div>
              <div className="dropdown__content">
                <span onClick={() => gotoProfile()}>
                  <ImProfile /> Profile
                </span>
                <span>
                  <GrUserSettings /> Settings
                </span>
                <span onClick={() => signout()}>
                  <GrLogout /> Sign out
                </span>
              </div>
            </div>
          ) : (
            <span className="nav__item" onClick={() => gotoLogin()}>
              Login
            </span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
