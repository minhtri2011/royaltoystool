import { useSelector } from "react-redux";
import { getPostData } from "../redux/slices/postSlice";

import convertTextToBold from "../feature/convertTextToBold";
import { figureTag, kitTag, metalBuildTag, resinTag, tags } from "../config/tagBasic";
import { toast } from "react-hot-toast";

const useCopy = () => {
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

  const renderTags = () => {
    let tagRender = "";
    const variables = [productName, manufacturer];
    variables.forEach(function (variable) {
      // Kiểm tra biến có giá trị không rỗng
      if (variable.trim() !== "") {
        // Xóa dấu "-"
        var cleanedString = variable.replace(/-/g, "");

        // Tạo tag từ các từ được phân tách bởi dấu khoảng trắng
        var words = cleanedString.split(" ");
        var tags = words.map(function (word) {
          return "#" + word;
        });

        // In các tag
        tagRender += " " + tags.join(" ");
      }
    });
    return tagRender;
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

  const renderPrice = (price, deposit, bankFull) => {
    if (!price && !deposit && !bankFull) return "";
    let priceString = `\n𝗚𝗶𝗮́ 𝗯𝗮́𝗻: `;
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
  const resinDetails = [
    convertTextToBold(productName + "\n"),
    checkAndRender(manufacturer, "HSX"),
    renderSize(ratio, height, width, depth),
    renderPrice(price, deposit, bankFull),
    checkAndRenderLimitNumber(limit, "Giới hạn"),
    checkAndRender(material, "Chất liệu"),
    checkAndRender(accessories, "Phụ kiện"),
    checkAndRender(releaseDate, "Phát hành"),
    checkAndRender(note, "Ghi chú"),
  ];
  const resinDetailsV2 = [
    convertTextToBold(productName + "\n"),
    checkAndRender(manufacturer, "HSX"),
    renderSize(ratio, height, width, depth),
    checkAndRenderLimitNumber(limit, "Giới hạn"),
    checkAndRender(material, "Chất liệu"),
    checkAndRender(accessories, "Phụ kiện"),
    checkAndRender(releaseDate, "Phát hành"),
    checkAndRender(note, "Ghi chú"),
    "\n",
    renderPrice(price, deposit, bankFull),
  ];
  const webNoPrice= [
    convertTextToBold(productName + "\n"),
    checkAndRender(manufacturer, "HSX"),
    renderSize(ratio, height, width, depth),
    checkAndRenderLimitNumber(limit, "Giới hạn"),
    checkAndRender(material, "Chất liệu"),
    checkAndRender(accessories, "Phụ kiện"),
    checkAndRender(releaseDate, "Phát hành"),
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
    renderedPost += resinTag;
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
    renderedPost += resinTag;
    renderedPost += renderTags();
    return renderedPost;
  };
  const renderkit = () => {
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
    renderedPost += kitTag;
    renderedPost += renderTags();
    return renderedPost;
  };
  const renderMB = () => {
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
    renderedPost += metalBuildTag;
    renderedPost += renderTags();
    return renderedPost;
  };
  const renderFigure = () => {
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
    renderedPost += figureTag;
    renderedPost += renderTags();
    return renderedPost;
  };
  const renderPostWebResin = () => {
    let renderedPost = "";
    resinDetails.forEach((product) => {
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

  const copyResinFaceBook = () => {
    navigator.clipboard.writeText(renderPost());
    toast.success('Copy resin facebook v1',{
      duration: 1000,
    })
  };
  const copyResinFaceBookV2 = () => {
    navigator.clipboard.writeText(renderPostV2());
    toast.success('Copy resin facebook v2',{
      duration: 1000,
    })
  };
  const copyWebResin = () => {
    navigator.clipboard.writeText(renderPostWebResin());
    toast.success('Copy Web Resin',{
      duration: 1000,
    })
  };
  const copyKit = () => {
    navigator.clipboard.writeText(renderkit());
    toast.success('Copy facebook kit',{
      duration: 1000,
    })
  };
  const copyMetalBuild = () => {
    navigator.clipboard.writeText(renderMB());
    toast.success('Copy facebook metal build',{
      duration: 1000,
    })
  };
  const copyFigure = () => {
    navigator.clipboard.writeText(renderFigure());
    toast.success('Copy facebook figure',{
      duration: 1000,
    })
  };
  const copyWeb = () => {
    navigator.clipboard.writeText(renderPostWeb());
    toast.success('Copy web basic',{
      duration: 1000,
    })
  };

  return {
    copyResinFaceBook,
    copyResinFaceBookV2,
    copyWebResin,
    copyKit,
    copyMetalBuild,
    copyFigure,
    copyWeb,
  };
};

export default useCopy;
