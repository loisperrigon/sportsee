// sideBar.js
import React from "react";

import "./sideBar.scss";

import BoutonSport from "../modules/boutonSport/boutonSport";

import srcYoga from "../../assets/yoga.png";

import srcNager from "../../assets/nager.png";

import srcMuscu from "../../assets/muscu.png";

import srcVelo from "../../assets/velo.png";

const SideBar = () => {
  return (
    <section className="sideBar">
      <section className="menu">
        <BoutonSport src={srcYoga} name={"Yoga"} />
        <BoutonSport src={srcNager} name={"Natation"} />
        <BoutonSport src={srcMuscu} name={"Musculation"} />
        <BoutonSport src={srcVelo} name={"Velo"} />
      </section>
      <small>Copiryght, SportSee 2020</small>
    </section>
  );
};

export default SideBar;
