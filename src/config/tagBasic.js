const address = `🏴󠁶󠁵󠁭󠁡󠁰󠁿 Địa chỉ: D'Lusso Quận 2, An Phú, Quận 2, Thành phố Hồ Chí Minh`;

const tiktok = `🎮 𝐓𝐢𝐤𝐭𝐨𝐤: 
-Relax: https://www.tiktok.com/@tringuyendev
-RoyalToys: https://www.tiktok.com/@royaltoys_999`;

// 🤖 Cung cấp sỉ lẻ mô hình
const figureContent = `
-------------------------------------------------
🚢 Hỗ trợ vận chuyển trong và ngoài nước
💰 Hỗ trợ trả góp (Thẻ tín dụng, Ví momo trả sau, Shopee Spay later)
-------------------------------------------------`;

// for kit metalbuild template 
const basicContent = `
-------------------------------------------------
💸 Hỗ trợ cọc ít cho học sinh, sinh viên
❤️‍🔥 Hỗ trợ trả hàng pre-order qua shopee để anh em áp mã
🚢 Hỗ trợ vận chuyển trong và ngoài nước
💰 Hỗ trợ trả góp (Thẻ tín dụng, Ví momo trả sau, Shopee Spay later)
-------------------------------------------------`;

const basicUrl = `🛒 𝐒𝐡𝐨𝐩𝐞𝐞: https://shopee.vn/royaltoys999
🌐 𝐖𝐞𝐛𝐬𝐢𝐭𝐞: https://royaltoys.com.vn
▶️ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: https://www.youtube.com/@royaltoys9765`;

// another tags for facebook (kit, metalbuild,..)
// 🎗️ Cộng đồng Anti Scam Gundam VN: https://www.facebook.com/groups/311652321168639
// 💸 Chợ đen Gundam VN: https://www.facebook.com/groups/606837867234057
// -------------------------------------------------

const tags = `
${basicContent}

${basicUrl}
${tiktok}

${address}

`;

// figure tags for facebook
const tagsFigureFB = `
${figureContent}

${basicUrl}
${tiktok}

${address}

`;

const basicTag = "#RoyalToys #MoHinh #Decor #DoChoi #Royal #Toys ";
const resinTag = basicTag + `#resin #figure #resinArt #anime`;
const figureTag = basicTag + `#figure #anime`;
const kitTag = basicTag + `#kit #modelKit`;
const metalBuildTag = basicTag + `#metalBuild #actionFigure`;

export {
  basicTag,
  tags,
  tagsFigureFB,
  resinTag,
  figureTag,
  kitTag,
  metalBuildTag,
};
