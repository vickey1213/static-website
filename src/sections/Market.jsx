import React from "react";
import { Button } from "@mui/material";
import tech from "../assets/Technology_Reports.png";
import search from "../assets/Deep-Search.png";
import phone from "../assets/Email_&_Phone_Number_Lists.png";
import zone from "../assets/Zone_Files.png";
import email from "../assets/Email_Verification.png";
import { color, height, width } from "@mui/system";
import "./market.css";
const Market = () => {
  return (
    <div style={{ background: "#f2f5ff" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Power Your Sales And Marketing Teams</h1>
      </div>
      <div className="salesGridContainer">
        <div className="salesDiv">
          <div className="salesImgDiv">
            <img src={tech} alt="" className="salesImg" />
          </div>
          <p className="salesTitle">Technology Reports</p>
          <p className="salesDescription">
            Download lists of websites using a specific technology. We track
            over 3,000 technologies across 280+ million websites.
          </p>
        </div>
        <div className="salesDiv">
          <div className="salesImgDiv">
            <img src={phone} alt="" className="salesImg" />
          </div>
          <p className="salesTitle">Rich Data</p>
          <p className="salesDescription">
            Technology Reports include email, phone numbers, and website
            profiling metadata like IP, Hostname, DNS, titles, and other
            information.
          </p>
        </div>
        <div className="salesDiv">
          <div className="salesImgDiv">
            <img src={email} alt="" className="salesImg" />
          </div>
          <p className="salesTitle">Email Verification</p>
          <p className="salesDescription">
            Industry-leading 9-step email verification engine. Never worry about
            email non-delivery again!
          </p>
        </div>
        <div className="salesDiv">
          <div className="salesImgDiv">
            <img src={zone} alt="" className="salesImg" />
          </div>
          <p className="salesTitle">Zone</p>
          <p className="salesDescription">
            Download lists of active domains across 100s of gTLDs and ccTLDs
            updated daily.
          </p>
        </div>
        <div className="salesDiv">
          <div className="salesImgDiv">
            <img src={search} alt="" className="salesImg" />
          </div>
          <p className="salesTitle">Deep Search</p>
          <p className="salesDescription">
            Custom deploy our technology to search domains for contact
            information.
          </p>
        </div>
      </div>
      <div className="bttn">
        <button className="try">Try for free</button>
        <button className="better">How we are better</button>
      </div>
    </div>
  );
};

export default Market;
