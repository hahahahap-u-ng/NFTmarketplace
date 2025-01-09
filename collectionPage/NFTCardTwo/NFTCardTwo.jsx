import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link";

// INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";
import { LikeProfile } from "../../components/componentsindex";
import images from "../../img"; // Đảm bảo nhập tất cả các hình ảnh cần thiết

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);
  const [fileType, setFileType] = useState({});

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };

  // Kiểm tra MIME type để xác định loại tệp
  const checkMimeType = async (url) => {
    const response = await fetch(url, { method: "HEAD" });
    const contentType = response.headers.get("content-type");
    return contentType.startsWith("video/")
      ? "video"
      : contentType.startsWith("audio/")
      ? "audio"
      : "image";
  };

  // Xử lý dữ liệu sau khi nhận từ props
  useEffect(() => {
    const checkFiles = async () => {
      const typeStatus = {};
      for (const item of NFTData) {
        typeStatus[item.image] = await checkMimeType(item.image);
      }
      setFileType(typeStatus);
    };
    checkFiles();
  }, [NFTData]);

  return (
    <div className={Style.NFTCardTwo}>
      {NFTData?.map((el, i) => (
        <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1}>
          <div className={Style.NFTCardTwo_box} key={i + 1}>
            <div className={Style.NFTCardTwo_box_like}>
              <div className={Style.NFTCardTwo_box_like_box}>
                <div className={Style.NFTCardTwo_box_like_box_box}>
                  <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                  <p onClick={() => likeNFT()}>
                    {like ? <AiOutlineHeart /> : <AiFillHeart />}
                    {""}
                    <span>{likeInc + 1}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={Style.NFTCardTwo_box_img}>
              {fileType[el.image] === "video" ? (
                <video
                  src={el.image}
                  alt="NFT"
                  className={Style.NFTCardTwo_box_img_img}
                  width="100%"
                  height="auto"
                  controls
                />
              ) : fileType[el.image] === "audio" ? (
                <div>
                  <Image
                    src={images.musiceWave} 
                    alt="Audio file"
                    width={200}
                    height={200}
                    style={{ cursor: "pointer" }}
                  />
                  <audio src={el.image} controls />
                </div>
              ) : (
                <img
                  src={el.image}
                  alt="NFT"
                  className={Style.NFTCardTwo_box_img_img}
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>

            <div className={Style.NFTCardTwo_box_info}>
              <div className={Style.NFTCardTwo_box_info_left}>
                <LikeProfile />
                <p>{el.name}</p>
              </div>
              {/* <small>4{i + 2}</small> */}
            </div>

            <div className={Style.NFTCardTwo_box_price}>
              <div className={Style.NFTCardTwo_box_price_box}>
                <small>Giá</small>
                <p>{el.price} ETH</p>
              </div>
              <p className={Style.NFTCardTwo_box_price_stock}>
                <MdTimer /> <span>{i + 1} phút trước</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCardTwo;
