import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import convertTextToBold from "../feature/convertTextToBold";
import { useSelector } from "react-redux";
import { getPostData } from "../redux/slices/postSlice";

const ListButton = () => {
  const postData = useSelector(getPostData);
  const {
    productName,
    manufacturer,
    height,
    ratio,
    width,
    price,
    deposit,
    bankFull,
    depth,
    limit,
    material,
    accessories,
    releaseDate,
    note,
    versions,
  } = postData;
  const checkAndRender = (value, title, downLine) => {
    if (!value) return "";
    return `${
      downLine
        ? ""
        : `
`
    }${convertTextToBold(title)}: ${value}`;
  };
  const renderSize = (ratio, height, width, depth) => {
    let sizeString = `
𝗞𝗶́𝗰𝗵 𝘁𝗵𝘂̛𝗼̛́𝗰: `;

    if (ratio) {
      sizeString += `[ 1/${ratio} ] `;
    }

    if (height && width && depth) {
      sizeString += `Cao ${height} x ${width} x ${depth} cm`;
    } else {
      if (height) {
        sizeString += `Cao ${height} cm`;
      }
      if (width) {
        sizeString += ` x ${width} cm`;
      }
      if (depth) {
        sizeString += ` x ${depth} cm`;
      }
    }

    return sizeString;
  };

  const renderPrice = (price, deposit, bankFull) => {
    let priceString = `
𝗚𝗶𝗮́ 𝗯𝗮́𝗻: `;

    if (price) {
      priceString += `${(+price).toLocaleString("vi-VN")} VNĐ`;
    }

    if (deposit) {
      priceString += ` - 𝗖𝗼̣𝗰: ${(+deposit).toLocaleString("vi-VN")} VNĐ\n`;
    }

    if (bankFull) {
      priceString += `𝗕𝗮𝗻𝗸 𝗳𝘂𝗹𝗹: ${(+bankFull).toLocaleString("vi-VN")} VNĐ`;
    }

    return priceString;
  };

  const productDetails = [
    convertTextToBold(productName + "\n"),
    checkAndRender(manufacturer, "HSX"),
    renderSize(ratio, height, width, depth),
    renderPrice(price, deposit, bankFull),
    checkAndRender(limit, "Giới hạn"),
    checkAndRender(material, "Chất liệu"),
    checkAndRender(accessories, "Phụ kiện"),
    checkAndRender(releaseDate, "Phát hành"),
    checkAndRender(note, "Ghi chú"),
  ];
  const versionDetails = () => {
    const versionsArray = Object.values(versions);
  
    return versionsArray.map((version) => {
      const versionKeys = Object.keys(version);
      const filteredKeys = versionKeys.filter((key) => version[key]);
  
      let versionString = "";
  
      filteredKeys.forEach((key) => {
        versionString += `
  ${convertTextToBold(key)}: ${version[key]}`;
      });
  
      return versionString;
    });
  };
  

  const renderPost = () => {
    let renderedPost = "";
    productDetails.forEach((product) => {
      renderedPost += product;
    });
    return renderedPost;
  };

  const copyFaceBook = () => {
    // navigator.clipboard.writeText(renderPost());
    console.log(versionDetails())
  };
  return (
    <Stack direction={"row"} spacing="1rem">
      <Button colorScheme="facebook" onClick={copyFaceBook}>
        Facebook
      </Button>
      <Button colorScheme="orange"> Web</Button>
    </Stack>
  );
};

export default ListButton;
