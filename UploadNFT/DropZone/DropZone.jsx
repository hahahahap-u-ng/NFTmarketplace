import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./DropZone.module.css";
import images from "../../img"; // Nhập tất cả hình ảnh từ thư mục img

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  uploadToIPFS,
  uploadToPinata,
  setImage,
}) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const [isAudio, setIsAudio] = useState(false);

  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToPinata(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);

    const fileType = acceptedFile[0].type; // Lấy loại MIME của tệp
    setIsVideo(fileType.startsWith('video/')); // Kiểm tra xem tệp có phải là video hay không
    setIsAudio(fileType.startsWith('audio/')); // Kiểm tra xem tệp có phải là audio hay không
    console.log(fileType); // In ra loại MIME để kiểm tra
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*,audio/*,video/*",
    maxSize: 100000000, // 100 MB
  });

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <Image
              src={images.upload}
              alt="upload"
              width={100}
              height={100}
              objectFit="contain"
              className={Style.DropZone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {fileUrl && (
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
            {isVideo ? (
              <video width={200} height={200} controls>
                <source src={fileUrl} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>
            ) : isAudio ? (
              <div
                onClick={() => {
                  const audio = new Audio(fileUrl);
                  audio.play();
                }}
              >
                <Image
                  src={images.musiceWave} 
                  alt="Audio file"
                  width={200}
                  height={200}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ) : (
              <img src={fileUrl} alt="uploaded file" width={200} height={200} />
            )}

            <div className={Style.DropZone_box_aside_box_preview}>
              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p>
                  <samp>NFT Name:</samp>
                  {name || ""}
                </p>
                <p>
                  <samp>Website:</samp>
                  {website || ""}
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_two}>
                <p>
                  <span>Description</span>
                  {description || ""}
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_three}>
                <p>
                  <span>Royalties</span>
                  {royalties || ""}
                </p>
                <p>
                  <span>FileSize</span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties</span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category</span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
