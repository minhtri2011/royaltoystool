import {
  Box,
  Button,
  Card,
  Input,
  Select,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import InputWithFloatingLabel from "./inputWithFloatingLabel";
import { toast } from "react-hot-toast";

const Price = () => {
  const [price, setPrice] = useState(0);
  const [ship, setShip] = useState(0);
  const [currencyExchange, setCurrencyExchange] = useState(3.5);
  const [profit, setProfit] = useState(1.1);
  const priceRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Kiểm tra xem phím tắt đã được nhấn hay chưa (ví dụ: Alt + A)
      if (event.altKey && event.keyCode === 81) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định (ví dụ: mở menu Alt)
        setPrice(0);
        setShip(0);
        priceRef.current && priceRef.current.focus();
      }
    };

    // Lắng nghe sự kiện keydown trên phần tử cụ thể (ví dụ: document.body)
    document.body.addEventListener("keydown", handleKeyDown);

    // Xóa lắng nghe sự kiện khi component bị hủy
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChangePrice = (name, value, id) => {
    setPrice(+value);
  };
  const handleChangeCurrency = (name, value, id) => {
    setCurrencyExchange(+value);
  };
  const handleChangeProfit = (name, value, id) => {
    setProfit(+value);
  };

  const handleCopyPrice = () => {
    if (!price) return toast.error("Nhập giá vô đi thằng ngu");
    navigator.clipboard.writeText(price * currencyExchange * 1000);
    toast.success("Copy tiền quy đổi");
  };
  const handleCopyMoney = () => {
    if (!price) return toast.error("Nhập giá vô đi thằng ngu");
    navigator.clipboard.writeText(
      (price * currencyExchange * 1000 * profit + ship).toFixed()
    );
    toast.success("Copy thành tiền");
  };

  return (
    <Box
      className="!fixed bottom-0 right-0 left-0 !bg-orange-400 z-10 p-5 gap-3"
      style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)" }}
    >
      <InputWithFloatingLabel
        type="number"
        onChange={handleChangePrice}
        label="Giá (Alt + Q)"
        ref={priceRef}
        value={price !== 0 ? price : ""}
      />
      <InputWithFloatingLabel
        type="number"
        value={currencyExchange ? currencyExchange : 0}
        onChange={handleChangeCurrency}
        label="Quy đổi ngoại tệ"
      />
      <InputWithFloatingLabel
        type="number"
        value={profit ? profit : 0}
        onChange={handleChangeProfit}
        label="Tiền lời (mặc định 10%)"
      />
      <Select
        className="cursor-pointer"
        value={ship}
        onChange={(e) => setShip(Number(e.target.value))}
      >
        <option value={0}> Không tính phí ship</option>
        <option value={150000}> Dưới 20 cm</option>
        <option value={400000}> 21-40 cm</option>
        <option value={500000}> 41-60 cm</option>
        <option value={1000000}> Trên 60 cm</option>
      </Select>

      {/* <Box className="flex items-center gap-2"> */}
      <Tooltip label="Click to copy">
        <Text className="cursor-pointer self-center" onClick={handleCopyPrice}>
          Quy đổi: {price && (price * currencyExchange * 1000).toLocaleString()}
        </Text>
      </Tooltip>

      <Tooltip label="Click to copy">
        <Text className="cursor-pointer self-center" onClick={handleCopyMoney}>
          Thành tiền:{" "}
          {(price * currencyExchange * 1000 * profit + ship).toLocaleString()}
        </Text>
      </Tooltip>
      {/* </Box> */}
    </Box>
  );
};

export default Price;
