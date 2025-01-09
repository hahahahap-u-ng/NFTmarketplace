import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "Giới thiệu",
      link: "aboutus",
    },
    {
      name: "Liên hệ",
      link: "contactus",
    },
    {
      name: "Đăng ký tài khoản",
      link: "signUp",
    },
    {
      name: "Đăng nhập",
      link: "login",
    },
    {
      name: "Đăng ký gói",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <div className={Style.helpCenter} key={i + 1}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
