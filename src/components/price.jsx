import { Box, Select, Text, Tooltip } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import InputWithFloatingLabel from "./inputWithFloatingLabel";
import { ChevronUpIcon } from "@chakra-ui/icons";

const Price = () => {
  const [price, setPrice] = useState(0);
  const [ship, setShip] = useState(0);
  const [currencyExchange, setCurrencyExchange] = useState(3.5);
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
    if (price === 0) return 0;
    const money = price * currencyExchange * 1000;
    if (money < 1000001) return (money + 200000 + ship).toLocaleString();
    if (money > 1000000 && money < 2000001)
      return (money + 300000 + ship).toLocaleString();
    if (money > 2000000 && money < 3000001)
      return (money + 400000 + ship).toLocaleString();

    return (money * profit + ship).toLocaleString();
  };
  const totalProfit = () => {
    if (price === 0) return 0;
    const money = price * currencyExchange * 1000;
    if (money < 1000001) return (200000).toLocaleString();
    if (money > 1000000 && money < 2000001) return (300000).toLocaleString();
    if (money > 2000000 && money < 3000001) return (400000).toLocaleString();

    return (money * (profit - 1)).toLocaleString();
  };

  return (
    <>
      <Tooltip label="Toggle tool bar (Alt + S)">
        <div
          onClick={() => setActive((v) => !v)}
          className={`fixed scale-75 left-1/2 -translate-x-1/2 !bg-[#b98d27] rounded-full w-52 h-7 flex justify-center cursor-pointer [&:hover]:scale-105 transition-all -bottom-3 z-50`}
        >
          <ChevronUpIcon className="text-3xl" />
        </div>
      </Tooltip>
      <Box
        className={`!fixed right-0 transition-all ease-in-out duration-300 left-0 bg-gradient-to-br from-red-500 to-black text-white z-10 p-5 
      items-center justify-center
      sm:[&>*]:!w-[calc(100%/2-0.5rem)]
      md:[&>*]:!w-[calc(100%/3-0.5rem)]
      lg:[&>*]:!w-[calc(100%/6-0.5rem)]
      [&>*]:!w-[calc(100%-0.5rem)]
      gap-2 flex-wrap
      flex
      ${active ? "bottom-0" : "-bottom-full"}
      `}
        // gap-3 grid-cols-1 sm:grid-cols-3  xl:grid-cols-6 md:grid
      >
        <Tooltip label="Alt + Q - Alt + E">
          <InputWithFloatingLabel
            type="number"
            onChange={handleChangePrice}
            label="Giá"
            ref={priceRef}
            value={price !== 0 ? price : ""}
          />
        </Tooltip>
        <Select
          className="cursor-pointer "
          value={ship}
          onChange={(e) => setShip(Number(e.target.value))}
        >
          <option className="text-black" value={2000000}>
            2.000.000
          </option>
          <option className="text-black" value={1200000}>
            1.200.000
          </option>
          <option className="text-black" value={1000000}>
            1.000.000
          </option>
          <option className="text-black" value={800000}>
            800.000
          </option>
          <option className="text-black" value={600000}>
            600.000
          </option>
          <option className="text-black" value={500000}>
            500.000
          </option>
          <option className="text-black" value={400000}>
            400.000
          </option>
          <option className="text-black" value={300000}>
            300.000
          </option>
          <option className="text-black" value={200000}>
            200.000
          </option>
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

        <Text
          fontWeight={"bold"}
          className="cursor-default self-center"
          as={"span"}
        >
          Kèm phí ship:{" "}
          <Text as={"span"} fontWeight={"normal"}>
            {(price * currencyExchange * 1000 + ship).toLocaleString()} VND
          </Text>
        </Text>
        <Tooltip label="Click to copy">
          <div className="flex flex-col gap-3 sm:gap-0">
            <Text
              fontWeight={"bold"}
              className="cursor-pointer "
              onClick={handleCopyMoney}
              as={"span"}
            >
              Tiền lời:{" "}
              <Text as={"span"} fontWeight={"normal"}>
                {totalProfit()} VND
              </Text>
            </Text>
            <Text
              fontWeight={"bold"}
              className="cursor-pointer"
              onClick={handleCopyMoney}
              as={"span"}
            >
              Thành tiền:{" "}
              <Text as={"span"} fontWeight={"normal"}>
                {totalPrice()} VND
              </Text>
            </Text>
          </div>
        </Tooltip>
        {/* </Box> */}
      </Box>
    </>
  );
};

export default Price;
