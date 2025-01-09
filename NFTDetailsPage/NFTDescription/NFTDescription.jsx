import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

// INTERNAL IMPORT
import Style from "./NFTDescription.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";
import { NFTTabs } from "../NFTDetailsIndex";

// IMPORT SMART CONTRACT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const router = useRouter();

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user1,
    images.user8,
    images.user2,
    images.user6,
    images.user5,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;

    if (btnText == "Bid History") {
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    } else if (btnText == "Provanance") {
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    }
  };

  const openOwner = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvanance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  // SMART CONTRACT DATA
  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);

  const calculateRemainingTime = (startTime, duration) => {
    const durationInDays = parseInt(duration, 10);
    const endTime = new Date(startTime);
    endTime.setDate(endTime.getDate() + durationInDays);
    const now = new Date();
    const diffTime = endTime - now;
    if (diffTime <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
    return { days: diffDays, hours: diffHours, minutes: diffMinutes, seconds: diffSeconds };
  };

  useEffect(() => {
    const updateRemainingTime = () => {
      setRemainingTime(calculateRemainingTime(nft.time, nft.duration));
    };

    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, [nft.time, nft.duration]);

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* // Part ONE */}
        <div className={Style.NFTDescription_box_share}>
          {/* <p>Virtual Worlds</p> */}
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()}
            />

            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
                <a href="#">
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> YouTube
                </a>
              </div>
            )}
          </div>
        </div>
        {/* // Part TWO */}
        <div className={Style.NFTDescription_box_profile}>
          <h1>
            {nft.name} #{nft.tokenId}
          </h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Tác giả</small> <br />
                <Link href={{ pathname: "/author" }}>
                  <span>
                    Trung hiếu <MdVerified />
                  </span>
                </Link>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.creatorbackground1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Bộ sưu tập</small> <br />
                <span>
                  Nhiếp ảnh <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_biding}>
            <p>
              <MdTimer /> <span>Kết thúc vào: </span>
            </p>
            <div className={Style.NFTDescription_box_profile_biding_box_timer}>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>{remainingTime.days}</p>
                <span>Days</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>{remainingTime.hours}</p>
                <span>Hours</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>{remainingTime.minutes}</p>
                <span>Minutes</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>{remainingTime.seconds}</p>
                <span>Seconds</span>
              </div>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_box_price}>
              <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
                <small>Giá</small>
                <p>
                  {nft.price} ETH <span></span>
                </p>
              </div>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_box_button}>
              {currentAccount == nft.seller.toLowerCase() ? (
                <p>Bạn không thể mua sản phẩm mình đang sở hữu</p>
              ) : currentAccount == nft.owner.toLowerCase() ? (
                <Button
                  icon={<FaWallet />}
                  btnName="Đưa lên thị trường"
                  handleClick={() =>
                    router.push(
                      `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
                    )
                  }
                  classStyle={Style.button}
                />
              ) : (
                <Button
                  icon={<FaWallet />}
                  btnName="Mua"
                  handleClick={() => buyNFT(nft)}
                  classStyle={Style.button}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
