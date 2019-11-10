import React from "react";
import { NavLink } from "react-router-dom";
import ChangeLanguage from "../../change-language";
import { translate, Trans } from "react-i18next";
// import Logo from "../../asset/tcad.png";
const path = "./public/tcad.png";

const Icon = () => {
  return(
    <img src='' alt='Logo'/>
  )
}
const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        <Trans i18nKey="Mint" />
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        <Trans i18nKey="about_us" />
      </NavLink>
      {" | "}
      {/*<Icon className="tcad_img"  />*/}
      {/*<img src={path} />*/}
      <NavLink to="/home" activeStyle={activeStyle} exact>
        <Trans i18nKey="dashboard" />
      </NavLink>
      {" | "}
      <NavLink to="/issues" activeStyle={activeStyle}>
        <Trans i18nKey="buy_tcad" />
      </NavLink>
        {" | "}
      <NavLink to="/trade" activeStyle={activeStyle}>
        <Trans i18nKey="redeem" />
      </NavLink>

      <ChangeLanguage />
    </nav>
  );
};

export default translate("translations")(Header);
