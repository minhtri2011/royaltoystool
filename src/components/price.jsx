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
import { ChevronUpIcon } from "@chakra-ui/icons";

const Price = () => {
  const [price, setPrice] = useState(0);
  const [ship, setShip] = useState(0);
  const [currencyExchange, setCurrencyExchange] = useState(3.55);
  const [profit, setProfit] = useState(1.1);
  const priceRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Kiểm tra xem phím tắt đã được nhấn hay chưa (ví dụ: Alt + A)
      if (event.altKey && event.keyCode === 81) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định (ví dụ: mở menu Alt)
        if (!active) setActive(true);
        setPrice(0);
        setShip(0);
        priceRef.current && priceRef.current.focus();
      }
      if (event.altKey && event.keyCode === 69) {
        // alt e
        event.preventDefault(); // Ngăn chặn hành vi mặc định (ví dụ: mở menu Alt)
        if (!active) setActive(true);
        setPrice(0);
        priceRef.current && priceRef.current.focus();
      }
      if (event.altKey && event.keyCode === 83) {
        setActive((v) => !v);
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
  const totalPrice = () => {
    const money = price * currencyExchange * 1000;
    if (money < 1000001) return (money + 200000 + ship).toLocaleString();
    if (money > 1000000 && money < 2000001)
      return (money + 300000 + ship).toLocaleString();
    if (money > 2000000 && money < 3000001)
      return (money + 400000 + ship).toLocaleString();

    return (money * profit + ship).toLocaleString();
  };

  return (
    <Box
      className={`!fixed right-0 transition-all ease-in-out duration-300 left-0 !bg-orange-400 z-10 p-5 gap-3 grid grid-cols-1 sm:grid-cols-3  xl:grid-cols-6  ${
        active ? "bottom-0" : "-bottom-full"
      }`}
    >
      <Tooltip label="Toggle tool bar (Alt + S)">
        <div
          onClick={() => setActive((v) => !v)}
          className={`absolute scale-75 left-1/2 -translate-x-1/2 bg-orange-400 rounded-full w-10 h-10 flex justify-center cursor-pointer [&:hover]:scale-125 transition-all ${
            !active ? " !fixed left-0 -bottom-4" : "-top-4"
          }`}
        >
          <ChevronUpIcon className="text-3xl" />
        </div>
      </Tooltip>
      <InputWithFloatingLabel
        type="number"
        onChange={handleChangePrice}
        label="Giá (Alt + Q - Alt + E)"
        ref={priceRef}
        value={price !== 0 ? price : ""}
      />
      <Select
        className="cursor-pointer"
        value={ship}
        onChange={(e) => setShip(Number(e.target.value))}
      >
        <option value={0}> Không tính phí ship</option>
        <option value={200000}> 200.000</option>
        <option value={300000}> 300.000</option>
        <option value={500000}> 500.000</option>
        <option value={600000}> 600.000</option>
        <option value={1000000}> 1.000.000</option>
      </Select>
      <InputWithFloatingLabel
        type="number"
        value={currencyExchange ? currencyExchange : 0}
        onChange={handleChangeCurrency}
        label="Quy đổi ngoại tệ"
      />
      {/* <InputWithFloatingLabel
        type="number"
        value={profit ? profit : 0}
        onChange={handleChangeProfit}
        label="Tiền lời (mặc định 10%)"
      /> */}

      {/* <Box className="flex items-center gap-2"> */}
      <Tooltip label="Click to copy">
        <Text
          fontWeight={"bold"}
          className="cursor-pointer self-center"
          onClick={handleCopyPrice}
          as={"span"}
        >
          Quy đổi:{" "}
          <Text as={"span"} fontWeight={"normal"}>
            {price && (price * currencyExchange * 1000).toLocaleString()} VND
          </Text>
        </Text>
      </Tooltip>

        <Text fontWeight={"bold"} className="cursor-pointer self-center" as={"span"}>
          Kèm phí ship:{" "}
          <Text as={"span"} fontWeight={"normal"}>
            {(price * currencyExchange * 1000 + ship).toLocaleString()} VND
          </Text>
        </Text>
        <Tooltip label="Click to copy">
          <Text
            fontWeight={"bold"}
            className="cursor-pointer self-center"
            onClick={handleCopyMoney}
            as={"span"}
          >
            Thành tiền:{" "}
            <Text as={"span"} fontWeight={"normal"}>
              {totalPrice()} VND
            </Text>
          </Text>
        </Tooltip>
      {/* </Box> */}
    </Box>
  );
};

export default Price;
