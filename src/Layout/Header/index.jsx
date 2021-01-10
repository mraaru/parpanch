import React from "react";
import CommonHeader from "./common";
import Logo from "../../images/parpanchlogo1.jpeg";

const Header = () => {
  return (
    <>
      <CommonHeader
        brandname="Parpanch"
        logo={Logo}
        menu1="Coronavirus"
        menu2="News"
        menu2a="Middle East"
        menu2b="Africa"
        menu2c="Asia"
        menu2d="US & Canada"
        menu2e="Latin America"
        menu2f="Europe"
        menu2g="Asia Pacific"
        menu3="Features"
        menu4="Economy"
        menu5="Opinion"
        menu6="Video"
        menu7="More "
        menu7a="Invstigations"
        menu7b="Interactives"
        menu7c="In Pictures"
        menu7d="Climate"
        menu7e="Science & Tecnology"
        menu7f="Sports"
        menu7g="Podcasts"
      />
    </>
  );
};

export default Header;
