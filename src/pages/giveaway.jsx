import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import InputWithFloatingLabel from "../components/inputWithFloatingLabel";
import { kitTag, metalBuildTag, resinTag, tags } from "../config/tagBasic";

const Giveaway = () => {
  const [copyValue, setCopyValue] = useState({ date: "", gift: "",content:'' });
  const handleInputChange = (name, value) => {
    setCopyValue((v) => ({ ...v, [name]: value }));
  };

  const copy = () => {
    const template = `𝐄𝐕𝐄𝐍𝐓 𝐆𝐈𝐕𝐄 𝐀𝐖𝐀𝐘  😝

Lưu ý trước khi chơi: 
_Vui lòng đọc kĩ để làm đủ các bước và nắm bắt được tình hình 
_Không quan tâm ae có mua hàng hay không, cứ tham gia hết mình vì một cộng đồng lành mạnh

𝑷𝒉𝒂̂̀𝒏 𝒕𝒉𝒖̛𝒐̛̉𝒏𝒈: ${copyValue.gift}

-------------------------------------------------
Cách thức tham gia:

𝗕𝘂̛𝗼̛́𝗰 𝟭: Like + Follow fanpage 𝐑𝐨𝐲𝐚𝐥 𝐓𝐨𝐲𝐬 và 𝐑𝐨𝐲𝐚𝐥 𝐓𝐨𝐲𝐬 - 𝐅𝐢𝐠𝐮𝐫𝐞 để không bỏ lỡ bất kỳ thông tin nào về sự kiện và cập nhật các mô hình mới nhất:
_𝐑𝐨𝐲𝐚𝐥 𝐓𝐨𝐲𝐬 - 𝐅𝐢𝐠𝐮𝐫𝐞: https://www.facebook.com/RoyaltoysCollectibles999
_𝐑𝐨𝐲𝐚𝐥 𝐓𝐨𝐲𝐬: https://www.facebook.com/royaltoys9999

𝗕𝘂̛𝗼̛́𝗰 𝟮: Like và Chia sẻ bài viết này lên trang cá nhân ở chế độ công khai ${copyValue.content ? 'kèm nội dung ' +copyValue.content: ''}

𝗕𝘂̛𝗼̛́𝗰 𝟯: Tham gia vào hai nhóm
_𝐂𝐨̣̂𝐧𝐠 đ𝐨̂̀𝐧𝐠 𝐀𝐧𝐭𝐢 𝐒𝐜𝐚𝐦 𝐆𝐮𝐧𝐝𝐚𝐦 𝐕𝐍: https://www.facebook.com/groups/311652321168639
_𝐂𝐡𝐨̛̣ đ𝐞𝐧 𝐆𝐮𝐧𝐝𝐚𝐦 𝐕𝐍: https://www.facebook.com/groups/606837867234057

𝐁𝐮̛𝐨̛́𝐜 𝟒 Comment dưới bài viết này với 3 số cuối giải đặc biệt của sổ số miền Bắc ngày ${copyValue.date} mà bạn dự đoán kèm tag ít nhất 3 người bạn để cùng tham gia
-------------------------------------------------

𝑯𝒂̣𝒏 𝒆𝒗𝒆𝒏𝒕: đến 5h ngày ${copyValue.date} 

Tui sẽ công bố kết quả vào tối ${copyValue.date} và không chấp nhận comment đã chỉnh sửa hoặc lố giờ

Đợt này chúng ta sẽ delay thêm hai ngày cuối để anh em kháng cáo kết quả, nếu qua hai ngày này không ai có ý kiến tui sẽ trao phần thưởng cho người có kết quả chính xác và sớm nhất nhé!!!
${tags}${resinTag} ${kitTag} ${metalBuildTag} #giveAway
`;

    navigator.clipboard.writeText(template);
    toast.success("Copy template give away", {
      duration: 1000,
    });
  };
  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm m-auto">
      <InputWithFloatingLabel
        name={"date"}
        autoFocus
        label="Hạn GA"
        onChange={handleInputChange}
        value={copyValue.date}
      />
      <InputWithFloatingLabel
        name={"gift"}
        label="Quà GA"
        onChange={handleInputChange}
        value={copyValue.gift}
      />
      <InputWithFloatingLabel
        name={"content"}
        label="Content"
        onChange={handleInputChange}
        value={copyValue.content}
      />
      <Button onClick={copy}>Copy</Button>
    </div>
  );
};

export default Giveaway;
