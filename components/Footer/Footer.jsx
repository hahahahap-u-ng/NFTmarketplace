import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../img";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          {/* <Image src={images.logo} alt="footer logo" height={100} width={100} /> */}
          <a href="/">
            <DiJqueryLogo className={Style.footer_box_social_logo} />
          </a>
          <p>
          Thị trường kỹ thuật số đầu tiên và lớn nhất thế giới dành cho các tệp phương tiện không thể thay thế (NFT). Mua, bán và khám phá các mặt hàng kỹ thuật số độc quyền..
          </p>

          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Khám phá</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Trung tâm trợ giúp</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>Đặt mua</h3>

          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Email của bạn *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
            Khám phá, thu thập và bán NFT đặc biệt OpenSea là thị trường NFT đầu tiên và lớn nhất thế giới
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
