import React from "react";
import { Link } from "react-router-dom";

import cureLogo from "../../static/img/cure-logo.png";

import routes from "../routes";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../utilities";

const staticText = {
  HomeLinkText: enAndFrContent("Home", "Home"),
  SeekingLinkText: enAndFrContent("Seeking Services", "Seeking Services"),
  OfferingLinkText: enAndFrContent("Offering Services", "Offering Services,"),
  WhyLinkText: enAndFrContent("Why Does This Exist?", "Why Does This Exist?"),
  AboutLinkText: enAndFrContent("About Us", "About Us"),
  ResourcesLinkText: enAndFrContent("Resources", "Resources"),
  //this is reversed on purpose BECAUSE this is the language switcher button
  //i.e.- FR should show up during English site and EN should show up during French site
  SwitcherButtonText: enAndFrContent("FR", "EN"),
};

const NavLink = ({ to, text }) => {
  return (
    <li>
      <Link to={to} className="clear-style">
        {text}
      </Link>
    </li>
  );
};

const Nav = ({ lang }) => {
  //note: lang = match.params.lang || "fr"; is not needed here because
  //this lang is received from a higher component that always provides that
  //from its own route
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="main-nav sticky">
        <img
          // what is up here?? why won't this image load
          src={cureLogo}
          alt="Cure Concordia Logo"
          id="logo"
        />
        <ul id="nav-links">
          <NavLink
            to={routes.homeRoute()}
            text={fillText(staticText.HomeLinkText)}
          />
          <NavLink
            to={routes.seekingRoute()}
            text={fillText(staticText.SeekingLinkText)}
          />
          <NavLink
            to={routes.offeringRoute()}
            text={fillText(staticText.OfferingLinkText)}
          />
          <NavLink
            to={routes.whyRoute()}
            text={fillText(staticText.WhyLinkText)}
          />
          <NavLink
            to={routes.aboutRoute()}
            text={fillText(staticText.AboutLinkText)}
          />
          <NavLink
            to={routes.resourcesRoute()}
            text={fillText(staticText.ResourcesLinkText)}
          />
          <li id="nav-lang">
            <a href="" className="clear-style">
              {fillText(staticText.SwitcherButtonText)}
            </a>
          </li>
        </ul>
      </nav>
      {/* this needs to be made to work */}
      <nav className="mobile-nav">
        <i className="fas fa-bars"></i>
      </nav>
    </>
  );
};

export default Nav;
