"use client";
import React, { useState } from "react";
import Image from "next/image";

import GpayIcon from "../../public/icons/g-pay.svg";
import MasterCardIcon from "../../public/icons/mastercard.svg";
import OpayIcon from "../../public/icons/Opay.svg";
import PayPalIcon from "../../public/icons/paypal.svg";
import AmexIcon from "../../public/icons/amex.svg";
import ApplePayIcon from "../../public/icons/apple-pay.svg";

import LangIcon from "../../public/icons/Language.svg";

import Arrow from "../../public/icons/arrow-right.svg";

import InstaIcon from "../../public/icons/Insta.svg";
import LinkedInIcon from "../../public/icons/linkedin.svg";



import "./Footer.css";

const Footer = () => {

  const [mettaMuse, setMettaMuse] = useState(false);
  const [quickLinks, setQuickLinks] = useState(false);
  const [followUs, setFollowUs] = useState(false);

  
  return (
    <footer>
      <div>
        <div className="letterAndcontact">
          <div className="newsLetter">
            <p className="footHead">Be the first to know</p>
            <p>Sign up for updates from mettā muse.</p>
            <div className="inputsBtn">
              <input
                className=""
                type="email"
                placeholder="Enter your e-mail..."
              />
              <button className="subscribeBtn">subscribe</button>
            </div>
          </div>

          <div className="contactDetails">
            <div className="contactUs">
              <p className="footHead">contact us</p>
              <div className="contactUsdetails">
                <p>+44 221 133 5360</p>
                <span className="diamond mdsrc">&diams;</span>
                <p>customercare@mettamuse.com</p>
              </div>
            </div>
            <div className="currency">
              <p className="footHead">Currency</p>
              <Image src={LangIcon} alt="" style={{}} />
              <p className="smallText lgsrc">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="actionsLinksContainer">
          <div className="mettaMuse lgsrc">
            <div className="footHeadCont">
              <p className="metta-muse">mettā muse</p>
            </div>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="mettaMuse mdsrc">
            <div
              className="footHeadCont"
              onClick={() => setMettaMuse((prev) => !prev)}
            >
              <p className="metta-muse">mettā muse</p>
              <Image
                src={Arrow}
                alt="Arrow"
                height={20}
                width={20}
                style={{
                  rotate: `${mettaMuse ? "180deg" : "0deg"}`,
                  transition: "rotate 0.15s ease-in-out",
                }}
              />
            </div>
            {mettaMuse ? (
              <ul className={`${mettaMuse ? "mt20" : ""}`}>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            ) : null}
          </div>
          <div className="quickLinks lgsrc">
            <div className="footHeadCont">
              <p className="footHead">Quick Links</p>
            </div>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="quickLinks mdsrc">
            <div
              className="footHeadCont"
              onClick={() => setQuickLinks((prev) => !prev)}
            >
              <p className="footHead">Quick Links</p>
              <Image
                src={Arrow}
                alt="Arrow"
                height={20}
                width={20}
                style={{
                  rotate: `${quickLinks ? "180deg" : "0deg"}`,
                  transition: "rotate 0.15s ease-in-out",
                }}
              />
            </div>
            {quickLinks ? (
              <ul className={`${quickLinks ? "mt20" : ""}`}>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            ) : null}
          </div>
          <div className="followus">
            <div className="socialLinksContainer lgsrc">
              <div className="footHeadCont">
                <p className="footHead">Follow Us</p>
              </div>
              <div className="socialAcc">
                <Image src={InstaIcon} alt="InstaIcon" />
                <Image src={LinkedInIcon} alt="LinkedInIcon" />
              </div>
            </div>
            <div className="socialLinksContainer mdsrc">
              <div
                className="footHeadCont"
                onClick={() => setFollowUs((prev) => !prev)}
              >
                <p className="footHead">Follow Us</p>
                <Image
                  src={Arrow}
                  alt="Arrow"
                  height={20}
                  width={20}
                  style={{
                    rotate: `${followUs ? "180deg" : "0deg"}`,
                    transition: "rotate 0.15s ease-in-out",
                  }}
                />
              </div>
              <div className="socialAcc">
                {followUs ? (
                  <div className={`${followUs ? "mt20" : ""}`}>
                    <Image src={InstaIcon} alt="InstaIcon" />
                    <Image src={LinkedInIcon} alt="LinkedInIcon" />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="paymentMethodsContainer">
              <p className="metta-muse">mettā muse ACCEPTS</p>
              <div className="payments">
                <Image src={GpayIcon} alt="GpayIcon" />
                <Image src={MasterCardIcon} alt="MasterCardIcon" />
                <Image src={PayPalIcon} alt="PayPalIcon" />
                <Image src={AmexIcon} alt="AmexIcon" />
                <Image src={ApplePayIcon} alt="ApplePayIcon" />
                <Image src={OpayIcon} alt="OpayIcon" />
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
