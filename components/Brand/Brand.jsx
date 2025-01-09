import React from "react";
import Image from "next/image.js";
import { DiJqueryLogo } from "react-icons/di";
import { useRouter } from "next/router.js";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img/index.js";
import { Button } from "../componentsindex.js";

const Brand = () => {
  const router = useRouter();
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          {/* <Image src={images.logo} alt="brand logo" width={100} height={100} /> */}
          <a href="/">
            <DiJqueryLogo className={Style.Brand_box_left_logo} />
          </a>
          <h1>Kiếm tiền điện tử miễn phí với Ciscrypt</h1>
          <p>Một công ty sáng tạo dẫn đầu và truyền cảm hứng.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button
              btnName="Tạo sản phẩm"
              handleClick={() => router.push("/uploadNFT")}
            />
            <Button
              btnName="Khám phá"
              handleClick={() => router.push("/searchPage")}
            />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.earn} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
