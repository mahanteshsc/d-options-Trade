import React from "react";
import { translate } from "react-i18next";
import { NavLink } from "react-router-dom";
import en from "./en";
import fr from "./fr";

const ChangeLanguage = ({ i18n }) => {
  const activeStyle = { color: "#F15B2A" };
  console.log(i18n.language);
  return (
    <React.Fragment>
      {" | "}
      {i18n.language=='en'? (
      <NavLink to="#" onClick={() => i18n.changeLanguage("fr")}  activeStyle={activeStyle} exact>
        FR
      </NavLink>):(
      <NavLink to="#" onClick={() => i18n.changeLanguage("en")} activeStyle={activeStyle} exact>
        EN
      </NavLink>)}
    </React.Fragment>
  );
};

// extended main view with translate hoc
export default translate("translations")(ChangeLanguage);
