const convertTextToBold = (word) => {
  const upperDiff = "𝗔".codePointAt(0) - "A".codePointAt(0);
  const lowerDiff = "𝗮".codePointAt(0) - "a".codePointAt(0);

  const isUpper = (n) =>
    (n >= 65 && n <= 90) || (n >= 192 && n <= 221) || (n >= 7840 && n <= 7921);
  const isLower = (n) =>
    (n >= 97 && n <= 122) || (n >= 224 && n <= 253) || (n >= 7841 && n <= 7922);

  const bolderize = (char) => {
    const n = char.charCodeAt(0);

    // Ánh xạ ký tự tiếng Việt sang ký tự đậm tương ứng
    const vietnameseChars = {
      à: "𝗮̀",
      ả: "𝗮̉",
      ã: "𝗮̃",
      ạ: "𝗮̣",
      á: "𝗮́",
      â: "𝗮̂",
      ầ: "𝗮̂̀",
      ấ: "𝗮̂́",
      ẩ: "𝗮̂̉",
      ẫ: "𝗮̂̃",
      ậ: "𝗮̣̂",
      ă: "𝗮̆",
      ằ: "𝗮̆̀",
      ắ: "𝗮̆́",
      ẳ: "𝗮̆̉",
      ẵ: "𝗮̆̃",
      ặ: "𝗮̣̆",
      đ: "𝗱",
      è: "𝗲̀",
      ẻ: "𝗲̉",
      ẽ: "𝗲̃",
      ẹ: "𝗲̣",
      é: "𝗲́",
      ê: "𝗲̂",
      ế: "𝐞̂́",
      ề: "𝗲̂̀",
      ể: "𝗲̂̉",
      ễ: "𝗲̂̃",
      ệ: "𝗲̣̂",
      ì: "𝗶̀",
      ỉ: "𝗶̉",
      ĩ: "𝗶̃",
      ị: "𝗶̣",
      í: "𝗶́",
      ò: "𝗼̀",
      ỏ: "𝗼̉",
      õ: "𝗼̃",
      ọ: "𝗼̣",
      ó: "𝗼́",
      ô: "𝗼̂",
      ồ: "𝗼̂̀",
      ố: "𝗼̂́",
      ổ: "𝗼̂̉",
      ỗ: "𝗼̂̃",
      ộ: "𝗼̣̂",
      ơ: "𝗼̛",
      ờ: "𝗼̛̀",
      ớ: "𝗼̛́",
      ở: "𝗼̛̉",
      ỡ: "𝗼̛̃",
      ợ: "𝗼̛̣",
      ù: "𝘂̀",
      ủ: "𝘂̉",
      ũ: "𝘂̃",
      ụ: "𝘂̣",
      ú: "𝘂́",
      ư: "𝘂̛",
      ừ: "𝘂̛̀",
      ứ: "𝘂̛́",
      ử: "𝘂̛̉",
      ữ: "𝘂̛̃",
      ự: "𝘂̛̣",
      ỳ: "𝘆̀",
      ỷ: "𝘆̉",
      ỹ: "𝘆̃",
      ỵ: "𝘆̣",
      ý: "𝘆́",
      ỳ: "𝘆̀",
      ỷ: "𝘆̉",
      ỹ: "𝘆̃",
      ỵ: "𝘆̣",
      // Thêm các ký tự tiếng Việt khác vào đây nếu cần
      "0": "𝟬",
      "1": "𝟭",
      "2": "𝟮",
      "3": "𝟯",
      "4": "𝟰",
      "5": "𝟱",
      "6": "𝟲",
      "7": "𝟳",
      "8": "𝟴",
      "9": "𝟵",
    };

    if (char in vietnameseChars) {
      return vietnameseChars[char];
    }
    if (isUpper(n)) return String.fromCodePoint(n + upperDiff);
    if (isLower(n)) return String.fromCodePoint(n + lowerDiff);
    return char;
  };

  const bolderizeWord = () => [...word].map(bolderize).join("");
  return bolderizeWord();
};
export default convertTextToBold;
