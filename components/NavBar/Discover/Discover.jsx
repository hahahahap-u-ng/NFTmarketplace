import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {
  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Bộ sưu tầm",
      link: "collection",
    },
    {
      name: "Tìm kiếm",
      link: "searchPage",
    },
    {
      name: "Hồ sơ",
      link: "author",
    },
    {
      name: "Cài đặt tài khoản",
      link: "account",
    },
    {
      name: "Tải NFT",
      link: "uploadNFT",
    },
    {
      name: "Kết nối ví",
      link: "connectWallet",
    },
  ];
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
