import React from "react";
import "./Footer.css";
import FooterSection from "./components/FooterSection/FooterSection";
import { footerLinks } from "../../common/constants";

const Footer = () => {
  return (
    <footer
      className={`footer bg-slate-200
${window.location.pathname === "/provider/register" && "!hidden"}`}
    >
      <div className="container">
        <div className="row">
          {/* <FooterSection data={footerLinks.company} /> */}
          <FooterSection data={footerLinks.legal} />
          <FooterSection data={footerLinks.download} />
          <FooterSection data={footerLinks.contact} contact={true} />
          <FooterSection data={footerLinks.followUs} socialData={true} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
