import { useSelector } from "react-redux";
import { getPostData } from "../redux/slices/postSlice";

import { toast } from "react-hot-toast";
import { tags } from "../config/tagBasic";
import convertTextToBold from "../feature/convertTextToBold";
import useRenderTags from "./useRenderTags";

const useCopy = () => {
  const postData = useSelector(getPostData);
  const tagsFinal = useRenderTags();
  const {
    productName,
    manufacturer,
    height,
    ratio,
    width,
    price,
    fprice,
    deposit,
    bankFull,
    depth,
    type,
    limit,
    material,
    accessories,
    releaseDate,
    note,
    versions,
    link,
    preOrder,
  } = postData;

  const checkTypeAndRenderName = (productName, type) => {
    if (type) return productName + " (" + type + ")" + "\n";
    return productName + "\n";
  };
  const checkAndRender = (value, title, downLine) => {
    if (!value) return "";
    return `${downLine ? "" : "\n"}${convertTextToBold(title)}: ${value}`;
  };
  const checkAndRenderReleaseDate = (value, title, downLine) => {
    if (!value) return "";
    return `${downLine ? "" : "\n"}${convertTextToBold(title)}: ${value} \n*Lưu ý: Thời gian phát hàng có thể delay phụ thuộc vào hãng`;
  };
  const checkAndRenderLink = (value, title, downLine) => {
    if (!value) return "";
    return `${
      downLine ? "" : "\n"
    }<strong>${title}</strong>: <a href="${value}">Link</a>`;
  };
  const checkAndRenderLimitNumber = (value, title, downLine) => {
    if (!value) return "";
    return `${downLine ? "" : "\n"}${convertTextToBold(title)}: ${value} bản`;
  };
  const checkAndRenderVersionName = (value, downLine) => {
    if (!value) return "\n\n--";
    return `${downLine ? "" : `\n`}\n-${value}-`;
  };
  const renderSize = (ratio, height, width, depth) => {
    if (!ratio && !height && !width && !depth) return "";
    let sizeString = `\n𝗞𝗶́𝗰𝗵 𝘁𝗵𝘂̛𝗼̛́𝗰: `;

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
  const renderPrice = (price, deposit, bankFull, fprice) => {
    // if (!price || !bankFull) return "";
    if (!price && !deposit && !bankFull) return "";
    let priceString = `\n`;

    if (price) {
      priceString += `\n𝗚𝗶𝗮́ 𝗯𝗮́𝗻: ${(+price).toLocaleString("vi-VN")} VNĐ`;
    }

    if (fprice) {
      priceString += `𝗚𝗶𝗮́ 𝗯𝗮́𝗻 𝐝𝐮̛̣ 𝐤𝐢𝐞̂́𝐧: ${(+fprice).toLocaleString(
        "vi-VN"
      )} VNĐ`;
    }

    if (deposit) {
      priceString += ` - 𝗖𝗼̣𝗰: ${(+deposit).toLocaleString("vi-VN")} VNĐ`;
    }

    if (bankFull) {
      priceString += `\n𝗕𝗮𝗻𝗸 𝗳𝘂𝗹𝗹: ${(+bankFull).toLocaleString("vi-VN")} VNĐ`;
    }

    return priceString;
  };
  const renderPriceVersion = (price, deposit, bankFull, fprice) => {
    // if (!price || !bankFull) return "";
    if (!price && !deposit && !bankFull) return "";
    let priceString = ``;

    if (price) {
      priceString += `\n𝗚𝗶𝗮́ 𝗯𝗮́𝗻: ${(+price).toLocaleString("vi-VN")} VNĐ`;
    }

    if (fprice) {
      priceString += `𝗚𝗶𝗮́ 𝗯𝗮́𝗻 𝐝𝐮̛̣ 𝐤𝐢𝐞̂́𝐧: ${(+fprice).toLocaleString(
        "vi-VN"
      )} VNĐ`;
    }

    if (deposit) {
      priceString += ` - 𝗖𝗼̣𝗰: ${(+deposit).toLocaleString("vi-VN")} VNĐ`;
    }

    if (bankFull) {
      priceString += `\n𝗕𝗮𝗻𝗸 𝗳𝘂𝗹𝗹: ${(+bankFull).toLocaleString("vi-VN")} VNĐ`;
    }

    return priceString;
  };

  // todo: config for web
  const checkAndRenderVersionNameForWeb = (value, downLine) => {
    if (!value) return "\n\n--";
    return `${downLine ? "" : `\n`}\n-<strong>${value}</strong>-`;
  };
  const renderPriceWeb = (price, deposit, bankFull, fprice) => {
    if (!price && !deposit && !bankFull) return "";
    let priceString = `\n`;
    if (price) {
      priceString += `\n<strong>Giá bán</strong>: ${(+price).toLocaleString(
        "vi-VN"
      )} VNĐ`;
    }

    if (fprice) {
      priceString += `<strong>Giá bán dự kiến</strong>: ${(+fprice).toLocaleString(
        "vi-VN"
      )} VNĐ`;
    }

    if (deposit) {
      priceString += ` - <strong>Cọc</strong>: ${(+deposit).toLocaleString(
        "vi-VN"
      )} VNĐ`;
    }

    if (bankFull) {
      priceString += `\n<strong>Bank full</strong>: ${(+bankFull).toLocaleString(
        "vi-VN"
      )} VNĐ`;
    }

    return priceString;
  };
  const renderPriceWebForVersions = (price, deposit, bankFull, fprice) => {
    if (!price && !deposit && !bankFull) return "";
    let priceString = ``;
    if (price) {
      priceString += `\n<strong>Giá bán</strong>: ${(+price).toLocaleString(
        "vi-VN"
      )} VNĐ`;
    }

    if (fprice) {
      priceString += `<strong>Giá bán dự kiến</strong>: ${(+fprice).toLocaleString(
        "vi-VN"
      )} VNĐ`;
    }

    if (deposit) {
      priceString += ` - <strong>Cọc</strong>: ${(+deposit).toLocaleString(
        "vi-VN"
      )} VNĐ`;
    }

    if (bankFull) {
      priceString += `\n<strong>Bank full</strong>: ${(+bankFull).toLocaleString(
        "vi-VN"
      )} VNĐ`;
    }

    return priceString;
  };
  const renderSizeForWeb = (ratio, height, width, depth) => {
    if (!ratio && !height && !width && !depth) return "";
    let sizeString = `\n<strong>Kích thước</strong>: `;

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
  const checkAndRenderForWeb = (value, title, downLine) => {
    if (!value) return "";
    return `${downLine ? "" : "\n"}<strong>${title}</strong>: ${value}`;
  };
  const checkAndRenderLimitNumberForWeb = (value, title, downLine) => {
    if (!value) return "";
    return `${downLine ? "" : "\n"}<strong>${title}</strong>: ${value} bản`;
  };

  // todo: render detail off template
  const resinWebDetails = [
    productName + "\n",
    checkAndRenderForWeb(manufacturer, "HSX"),
    renderSizeForWeb(ratio, height, width, depth),
    checkAndRenderLimitNumberForWeb(limit, "Giới hạn"),
    checkAndRenderForWeb(material, "Chất liệu"),
    checkAndRenderForWeb(accessories, "Phụ kiện"),
    checkAndRenderForWeb(releaseDate, "Phát hành dự kiến"),
    checkAndRenderForWeb(note, "Ghi chú"),
    checkAndRenderLink(link, "Link Uncensored"),
    renderPriceWeb(price, deposit, bankFull, fprice),
  ];
  const postFacebookDetail = [
    convertTextToBold(preOrder),
    checkTypeAndRenderName(productName, type),
    checkAndRender(manufacturer, "HSX"),
    renderSize(ratio, height, width, depth),
    checkAndRenderLimitNumber(limit, "Giới hạn"),
    checkAndRender(material, "Chất liệu"),
    checkAndRender(accessories, "Phụ kiện"),
    checkAndRenderReleaseDate(releaseDate, "Phát hành dự kiến"),
    checkAndRender(note, "Ghi chú"),
    checkAndRender(link, "Link Uncensored"),
    renderPrice(price, deposit, bankFull, fprice),
  ];

  // todo: render all version
  const versionDetailsForWeb = () => {
    const arr = [];
    versions.forEach((item) =>
      arr.push([
        checkAndRenderVersionNameForWeb(item.versionName),
        renderSizeForWeb(item.ratio, item.height, item.width, item.depth),
        checkAndRenderLimitNumberForWeb(item.versionLimit, "Giới hạn"),
        renderPriceWebForVersions(item.price, item.deposit, item.bankFull),
        checkAndRenderForWeb(item.accessories, "Phụ kiện"),
        checkAndRenderForWeb(item.versionNote, "Ghi chú"),
      ])
    );
    return arr;
  };
  const versionDetails = () => {
    const arr = [];
    versions.forEach((item) =>
      arr.push([
        checkAndRenderVersionName(item.versionName),
        renderSize(item.ratio, item.height, item.width, item.depth),
        checkAndRenderLimitNumber(item.versionLimit, "Giới hạn"),
        renderPriceVersion(item.price, item.deposit, item.bankFull),
        checkAndRender(item.accessories, "Phụ kiện"),
        checkAndRender(item.versionNote, "Ghi chú"),
      ])
    );
    return arr;
  };

  //todo: config template
  const renderPostFacebook = () => {
    let renderedPost = "";
    postFacebookDetail.forEach((product) => {
      renderedPost += product;
    });
    versionDetails().forEach((version) => {
      version.forEach((product) => {
        renderedPost += product;
      });
    });
    renderedPost += tagsFinal;
    return renderedPost;
  };
  const renderPostWeb = () => {
    let renderedPost = "";
    resinWebDetails.forEach((product) => {
      renderedPost += product;
    });
    versionDetailsForWeb().forEach((version) => {
      version.forEach((product) => {
        renderedPost += product;
      });
    });
    return renderedPost;
  };

  //todo: copy func
  const copyName = () => {
    navigator.clipboard.writeText(productName);
    toast.success("Copy name", {
      duration: 1000,
    });
  };
  const copyNameProducer = () => {
    const value = `${productName} - ${manufacturer}`;
    navigator.clipboard.writeText(value);
    toast.success("Copy name - producer", {
      duration: 1000,
    });
  };
  const copyResinDownloadToolNameProducer = () => {
    const value = `resin/${productName} - ${manufacturer}`;
    navigator.clipboard.writeText(value);
    toast.success("Copy name - producer", {
      duration: 1000,
    });
  };
  const copyTagsBasic = () => {
    navigator.clipboard.writeText(tags);
    toast.success("Copy tags basic", {
      duration: 1000,
    });
  };
  const copyPrice = () => {
    if (price && price > 0) {
      navigator.clipboard.writeText(price);
      toast.success("Copy price success", {
        duration: 1000,
      });
      return;
    }
    if (versions && versions.length > 0) {
      navigator.clipboard.writeText(versions[0].price);
      toast.success("Copy price success", {
        duration: 1000,
      });
      return;
    }
  };
  const copyFaceBook = () => {
    navigator.clipboard.writeText(renderPostFacebook());
    toast.success("Copy facebook template", {
      duration: 1000,
    });
  };
  const copyWeb = () => {
    navigator.clipboard.writeText(renderPostWeb());
    toast.success("Copy web template", {
      duration: 1000,
    });
  };

  return {
    copyWeb,
    copyNameProducer,
    copyName,
    copyTagsBasic,
    copyResinDownloadToolNameProducer,
    copyPrice,
    copyFaceBook,
  };
};

export default useCopy;
