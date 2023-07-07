import { useSelector } from "react-redux";
import { getPostData } from "../redux/slices/postSlice";

import { toast } from "react-hot-toast";
import {
  figureTag,
  kitTag,
  metalBuildTag,
  resinTag,
  tags,
} from "../config/tagBasic";
import convertTextToBold from "../feature/convertTextToBold";

const useCopy = () => {
  const postData = useSelector(getPostData);
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

  const renderTags = () => {
    let tagRender = "";
    const variables = [productName, manufacturer];
    variables.forEach(function (variable) {
      // Kiểm tra biến có giá trị không rỗng
      if (variable.trim() !== "") {
        // Xóa tất cả các kí tự đặc biệt
        var cleanedString = variable.replace(/[^\w\s]/g, "");

        // Tách từ trong chuỗi đã làm sạch
        var words = cleanedString
          .split(" ")
          .filter((variable) => variable.trim() !== "");
        // Tạo tag cho từng từ
        var tags = words.map(function (word) {
          // Loại bỏ khoảng trắng thừa trước và sau từ
          var trimmedWord = word.trim();
          return "#" + trimmedWord;
        });

        // In các tag
        tagRender += " " + tags.join(" ");
      }
    });
    return tagRender;
  };

  const checkTypeAndRenderName = (productName, type) => {
    if (type) return convertTextToBold(productName) + " (" + type + ")" + "\n";
    return convertTextToBold(productName + "\n");
  };

  const checkAndRender = (value, title, downLine) => {
    if (!value) return "";
    return `${downLine ? "" : "\n"}${convertTextToBold(title)}: ${value}`;
  };
  const checkAndRenderLimitNumber = (value, title, downLine) => {
    if (!value) return "";
    return `${downLine ? "" : "\n"}${convertTextToBold(title)}: ${value} bản`;
  };
  const checkAndRenderVersionName = (value, downLine) => {
    if (!value) return "";
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

  const renderFPrice = (price, deposit, bankFull) => {
    if (!price) return "";
    if (!price && !deposit && !bankFull) return "";
    let priceString = `\n𝗚𝗶𝗮́ 𝗯𝗮́𝗻 𝐝𝐮̛̣ 𝐤𝐢𝐞̂́𝐧: `;
    if (price) {
      priceString += `${(+price).toLocaleString("vi-VN")} VNĐ`;
    }

    if (deposit) {
      priceString += ` - 𝗖𝗼̣𝗰: ${(+deposit).toLocaleString("vi-VN")} VNĐ`;
    }

    if (bankFull) {
      priceString += `\n𝗕𝗮𝗻𝗸 𝗳𝘂𝗹𝗹: ${(+bankFull).toLocaleString("vi-VN")} VNĐ`;
    }

    return priceString;
  };
  const renderPrice = (price, deposit, bankFull) => {
    if (!price) return "";
    if (!price && !deposit && !bankFull) return "";
    let priceString = `\n𝗚𝗶𝗮́ 𝗯𝗮́𝗻: `;
    if (price) {
      priceString += `${(+price).toLocaleString("vi-VN")} VNĐ`;
    }

    if (deposit) {
      priceString += ` - 𝗖𝗼̣𝗰: ${(+deposit).toLocaleString("vi-VN")} VNĐ`;
    }

    if (bankFull) {
      priceString += `\n𝗕𝗮𝗻𝗸 𝗳𝘂𝗹𝗹: ${(+bankFull).toLocaleString("vi-VN")} VNĐ`;
    }

    return priceString;
  };

  const resinWebDetails = [
    productName + "\n",
    checkAndRender(manufacturer, "HSX"),
    renderSize(ratio, height, width, depth),
    renderPrice(price, deposit, bankFull),
    renderFPrice(fprice, deposit, bankFull),
    checkAndRenderLimitNumber(limit, "Giới hạn"),
    checkAndRender(material, "Chất liệu"),
    checkAndRender(accessories, "Phụ kiện"),
    checkAndRender(releaseDate, "Phát hành"),
    checkAndRender(note, "Ghi chú"),
    checkAndRender(link, "Link"),
  ];

  const resinDetails = [
    convertTextToBold(preOrder),
    checkTypeAndRenderName(productName, type),
    checkAndRender(manufacturer, "HSX"),
    renderSize(ratio, height, width, depth),
    renderPrice(price, deposit, bankFull),
    renderFPrice(fprice, deposit, bankFull),
    checkAndRenderLimitNumber(limit, "Giới hạn"),
    checkAndRender(material, "Chất liệu"),
    checkAndRender(accessories, "Phụ kiện"),
    checkAndRender(releaseDate, "Phát hành"),
    checkAndRender(note, "Ghi chú"),
    checkAndRender(link, "Link"),
  ];

  const resinDetailsV2 = [
    convertTextToBold(preOrder),
    checkTypeAndRenderName(productName, type),
    checkAndRender(manufacturer, "HSX"),
    renderSize(ratio, height, width, depth),
    checkAndRenderLimitNumber(limit, "Giới hạn"),
    checkAndRender(material, "Chất liệu"),
    checkAndRender(accessories, "Phụ kiện"),
    checkAndRender(releaseDate, "Phát hành"),
    checkAndRender(note, "Ghi chú"),
    checkAndRender(link, "Link"),
    "\n",
    renderPrice(price, deposit, bankFull),
    renderFPrice(fprice, deposit, bankFull),
  ];

  const webNoPrice = [
    productName + "\n",
    checkAndRender(manufacturer, "HSX"),
    renderSize(ratio, height, width, depth),
    checkAndRenderLimitNumber(limit, "Giới hạn"),
    checkAndRender(material, "Chất liệu"),
    checkAndRender(accessories, "Phụ kiện"),
    checkAndRender(releaseDate, "Phát hành"),
    checkAndRender(link, "Link"),
    checkAndRender(note, "Ghi chú"),
  ];
  const versionDetails = () => {
    const arr = [];
    versions.forEach((item) =>
      arr.push([
        checkAndRenderVersionName(item.versionName),
        renderSize(item.ratio, item.height, item.width, item.depth),
        checkAndRenderLimitNumber(item.versionLimit, "Giới hạn"),
        renderPrice(item.price, item.deposit, item.bankFull),
        checkAndRender(item.accessories, "Phụ kiện"),
        checkAndRender(item.versionNote, "Ghi chú"),
      ])
    );
    return arr;
  };

  //todo: config template

  const renderPost = () => {
    let renderedPost = "";
    resinDetails.forEach((product) => {
      renderedPost += product;
    });
    versionDetails().forEach((version) => {
      version.forEach((product) => {
        renderedPost += product;
      });
    });

    renderedPost += tags;

    switch (type) {
      case "Cast off":
        renderedPost += resinTag + " #castOff";
        break;
      case "Model kit":
        renderedPost += kitTag;
        break;
      case "Metal build":
        renderedPost += metalBuildTag;
        break;

      default:
        renderedPost += resinTag;
        break;
    }
    renderedPost += renderTags();
    return renderedPost;
  };
  const renderPostV2 = () => {
    let renderedPost = "";
    resinDetailsV2.forEach((product) => {
      renderedPost += product;
    });
    versionDetails().forEach((version) => {
      version.forEach((product) => {
        renderedPost += product;
      });
    });

    renderedPost += tags;

    switch (type) {
      case "Cast off":
        renderedPost += resinTag + " #castOff";
        break;
      case "Model kit":
        renderedPost += kitTag;
        break;
      case "Metal build":
        renderedPost += metalBuildTag;
        break;

      default:
        renderedPost += resinTag;
        break;
    }
    renderedPost += renderTags();
    return renderedPost;
  };

  const renderPostWebResin = () => {
    let renderedPost = "";
    resinWebDetails.forEach((product) => {
      renderedPost += product;
    });
    versionDetails().forEach((version) => {
      version.forEach((product) => {
        renderedPost += product;
      });
    });
    return renderedPost;
  };
  const renderPostWeb = () => {
    let renderedPost = "";
    webNoPrice.forEach((product) => {
      renderedPost += product;
    });
    versionDetails().forEach((version) => {
      version.forEach((product) => {
        renderedPost += product;
      });
    });
    return renderedPost;
  };

  //todo: copy func

  const copyWebResin = () => {
    navigator.clipboard.writeText(renderPostWebResin());
    toast.success("Copy Web Resin", {
      duration: 1000,
    });
  };
  const copyWeb = () => {
    navigator.clipboard.writeText(renderPostWeb());
    toast.success("Copy web basic", {
      duration: 1000,
    });
  };

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
    const value = `${productName} - ${manufacturer}`;
    navigator.clipboard.writeText(value);
    toast.success("resin/Copy name - producer", {
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
    navigator.clipboard.writeText(renderPost());
    toast.success("Copy facebook", {
      duration: 1000,
    });
  };
  const copyFaceBookV2 = () => {
    navigator.clipboard.writeText(renderPostV2());
    toast.success("Copy facebook v2", {
      duration: 1000,
    });
  };

  return {
    copyWebResin,
    copyWeb,
    copyName,
    copyTagsBasic,
    copyNameProducer,
    copyResinDownloadToolNameProducer,
    copyPrice,
    copyFaceBook,
    copyFaceBookV2,
  };
};

export default useCopy;
