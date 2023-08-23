import React from "react";
import { useSelector } from "react-redux";
import { getPostData } from "../redux/slices/postSlice";
import removeDiacritics from "../feature/removeDiacritics";
import { kitTag, metalBuildTag, resinTag, tags } from "../config/tagBasic";

const useRenderTags = () => {
  const postData = useSelector(getPostData);
  const { productName, manufacturer ,type} = postData;
  let finalTags = "";
  let configTags = "";

  const renderTags = () => {
    let tagRender = "";
    const converProductName = removeDiacritics(productName);
    const variables = [converProductName, manufacturer];
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
  
  switch (type) {
    case "Cast off":
      configTags += resinTag + " #castOff";
      break;
    case "Model kit":
      configTags += kitTag;
      break;
    case "Metal build":
      configTags += metalBuildTag;
      break;

    default:
      configTags += resinTag;
      break;
  }
  finalTags += tags;
  finalTags += configTags;
  finalTags += renderTags();
  return finalTags;
};

export default useRenderTags;
