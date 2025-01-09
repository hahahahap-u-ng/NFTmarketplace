import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./NFTDetailsImg.module.css";
import images from "../../img";

const NFTDetailsImg = ({ nft }) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);
  const [fileType, setFileType] = useState("");

  useEffect(() => {
    const checkMimeType = async () => {
      const response = await fetch(nft.image, { method: "HEAD" });
      const contentType = response.headers.get("content-type");
      setFileType(
        contentType.startsWith("video/")
          ? "video"
          : contentType.startsWith("audio/")
          ? "audio"
          : "image"
      );
    };
    checkMimeType();
  }, [nft.image]);

  const openDescription = () => {
    setDescription((prev) => !prev);
  };

  const openDetails = () => {
    setDetails((prev) => !prev);
  };

  const likeNFT = () => {
    setLike((prev) => !prev);
  };

  return (
    <div className={Style.NFTDetailsImg}>
      <div className={Style.NFTDetailsImg_box}>
        <div className={Style.NFTDetailsImg_box_NFT}>
          <div className={Style.NFTDetailsImg_box_NFT_like}>
            <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiOutlineHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              ) : (
                <AiFillHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              )}
              <span>23</span>
            </p>
          </div>

          <div className={Style.NFTDetailsImg_box_NFT_img}>
            {fileType === "video" ? (
              <video
                src={nft.image}
                className={Style.NFTDetailsImg_box_NFT_img_img}
                alt="NFT video"
                width="100%"
                height="auto"
                controls
                preload="auto"
              />
            ) : fileType === "audio" ? (
              <div>
                <Image
                  src={images.nft_1} 
                  alt="Audio file"
                  width={200}
                  height={200}
                  style={{ cursor: "pointer" }}
                />
                <audio src={nft.image} controls autoPlay />
              </div>
            ) : (
              <img
                src={nft.image}
                className={Style.NFTDetailsImg_box_NFT_img_img}
                alt="NFT image"
                objectFit="cover"
              />
            )}
          </div>
        </div>

        <div
          className={Style.NFTDetailsImg_box_description}
          onClick={() => openDescription()}
        >
          <p>Mô tả</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={Style.NFTDetailsImg_box_description_box}>
            <p>{nft.description}</p>
          </div>
        )}

        <div
          className={Style.NFTDetailsImg_box_details}
          onClick={() => openDetails()}
        >
          <p>Chi tiết</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className={Style.NFTDetailsImg_box_details_box}>
            <small>2000 x 2000 px.IMAGE(685KB)</small>
            <p>
              <small>Địa chỉ hợp đồng</small>
              <br></br>
              {nft.seller}
            </p>
            <p>
              <small>Token ID</small>
              &nbsp; &nbsp; {nft.tokenId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImg;
