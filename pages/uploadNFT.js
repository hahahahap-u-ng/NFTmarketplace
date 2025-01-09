import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/upload-nft.module.css";
import { UploadNFT } from "../UploadNFT/uploadNFTIndex";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const uploadNFT = () => {
  const { uploadToIPFS, createNFT, uploadToPinata } = useContext(
    NFTMarketplaceContext
  );
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Tạo mới NFT</h1>
        
        </div>

        <div className={Style.uploadNFT_box_title}>
          <h2>Ảnh, Video, Âm thanh hoặc mô hình 3D</h2>
          <p>
          Các loại tệp hình ảnh, video, âm thanh hoặc mô hình 3D được hỗ trợ: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. 
          Kích thước tối đa: 100 MB
          </p>
        </div>

        <div className={Style.uploadNFT_box_form}>
          <UploadNFT
            uploadToIPFS={uploadToIPFS}
            createNFT={createNFT}
            uploadToPinata={uploadToPinata}
          />
        </div>
      </div>
    </div>
  );
};

export default uploadNFT;
