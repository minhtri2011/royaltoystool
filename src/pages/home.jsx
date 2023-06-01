import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import InputWithFloatingLabel from "../components/inputWithFloatingLabel";
import { AddIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.jpg";

const Home = () => {
  const [productInfo, setProductInfo] = useState({
    productName: { label: "", name: "" },
    manufacturer: { label: "", name: "" },
    releaseDate: { label: "", name: "" },
    limit: { label: "", name: "" },
    material: { label: "", name: "" },
    accessories: { label: "", name: "" },
    note: { label: "", name: "" },
    ratio: { label: "", name: "" },
    height: { label: "", name: "" },
    width: { label: "", name: "" },
    depth: { label: "", name: "" },
    price: { label: "", name: "" },
    deposit: { label: "", name: "" },
    bankFull: { label: "", name: "" },
  });
  useEffect(() => console.log(productInfo), [productInfo]);

  const handleInputChange = (name, label, value) => {
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [name]: { label, name: value },
    }));
  };

  const formInput = () => {
    return (
      <div className="gap-4 flex flex-col">
        <InputWithFloatingLabel
          label="Tên sản phẩm"
          name="productName"
          value={productInfo.productName.name}
          onChange={handleInputChange}
        />

        <div className="grid grid-cols-3 gap-2">
          <InputWithFloatingLabel
            label="Hãng sản xuất"
            name="manufacturer"
            value={productInfo.manufacturer.name}
            onChange={handleInputChange}
          />
          <InputWithFloatingLabel
            label="Ngày phát hành"
            name="releaseDate"
            value={productInfo.releaseDate.name}
            onChange={handleInputChange}
          />
          <InputWithFloatingLabel
            label="Giới hạn"
            name="limit"
            value={productInfo.limit.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <InputWithFloatingLabel
            label="Chất liệu"
            name="material"
            value={productInfo.material.name}
            onChange={handleInputChange}
          />
          <InputWithFloatingLabel
            label="Phụ kiện"
            name="accessories"
            value={productInfo.accessories.name}
            onChange={handleInputChange}
          />
        </div>
        <InputWithFloatingLabel
          label="Ghi chú"
          name="note"
          value={productInfo.note.name}
          onChange={handleInputChange}
        />
        <div className="grid grid-cols-4 gap-2">
          <InputWithFloatingLabel
            label="Tỉ lệ"
            name="ratio"
            value={productInfo.ratio.name}
            onChange={handleInputChange}
          />
          <InputWithFloatingLabel
            label="Cao"
            name="height"
            value={productInfo.height.name}
            onChange={handleInputChange}
          />
          <InputWithFloatingLabel
            label="Rộng"
            name="width"
            value={productInfo.width.name}
            onChange={handleInputChange}
          />
          <InputWithFloatingLabel
            label="Sâu"
            name="depth"
            value={productInfo.depth.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <InputWithFloatingLabel
            label="Giá bán"
            name="price"
            value={productInfo.price.name}
            onChange={handleInputChange}
          />
          <InputWithFloatingLabel
            label="Đặt cọc"
            name="deposit"
            value={productInfo.deposit.name}
            onChange={handleInputChange}
          />
          <InputWithFloatingLabel
            label="Bank full"
            name="bankFull"
            value={productInfo.bankFull.name}
            onChange={handleInputChange}
          />
        </div>
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<AddIcon />} colorScheme="pink" variant="solid">
            Kích thước khác
          </Button>
          <Button leftIcon={<AddIcon />} colorScheme="blue" variant="solid">
            Phiên bản khác
          </Button>
          <Button leftIcon={<AddIcon />} colorScheme="blue" variant="outline">
            Giá mua combo
          </Button>
        </Stack>
      </div>
    );
  };

  const previewFacebook = () => {
    const {
      productName,
      manufacturer,
      releaseDate,
      limit,
      material,
      accessories,
      note,
      ratio,
      height,
      width,
      depth,
      price,
      deposit,
      bankFull,
    } = productInfo;

    return (
      <div className="rounded-sm border-solid border-black border-[1px]">
        <Flex>
          <Avatar src={logo} />
          <Box ml="3">
            <Text fontWeight="bold">Royal Toys</Text>
            <Text fontSize="sm">1 phút trước</Text>
          </Box>
        </Flex>
        <Box ml="3">
          <Text fontSize="sm" className="pt-1 pb-3">
            {productName.name}
          </Text>
          <Text fontSize="sm">
            <Text as={"span"} fontWeight={"bold"}>
              {manufacturer.name && manufacturer.label + ": "}
            </Text>
            {manufacturer.name}
          </Text>

          <Text fontSize="sm">
            <Text as={"span"} fontWeight={"bold"}>
              {(height.name || ratio.name) && "Kích thước: "}
            </Text>
            <Text as={"span"}>
              {"[" + ratio.name + "] "}
              {height.name && "Cao " + height.name} {width.name && " x "}{" "}
              {width.name} {depth.name && " x "} {depth.name}{" "}
              {height.name && " cm"}{" "}
            </Text>
          </Text>
          <Text fontSize="sm">
            <Text as={"span"} fontWeight={"bold"}>
              {price.name && price.label + ": "}
            </Text>
            {price.name && Number(price.name).toLocaleString() + " VNĐ - "}
            <Text as={"span"} fontWeight={"bold"}>
              {deposit.name && deposit.label + ": "}
            </Text>
            {deposit.name && Number(deposit.name).toLocaleString() + " VNĐ"}
          </Text>
          <Text fontSize="sm">
            <Text as={"span"} fontWeight={"bold"}>
              {bankFull.name && bankFull.label + ": "}
            </Text>
            {bankFull.name && Number(bankFull.name).toLocaleString() + " VNĐ"}
          </Text>
          <Text fontSize="sm">
            <Text as={"span"} fontWeight={"bold"}>
              {limit.name && limit.label + ": "}
            </Text>
            {limit.name} {limit.name && " bản"}
          </Text>
          <Text fontSize="sm">
            <Text as={"span"} fontWeight={"bold"}>
              {material.name && material.label + ": "}
            </Text>
            {material.name}
          </Text>
          <Text fontSize="sm">
            <Text as={"span"} fontWeight={"bold"}>
              {accessories.name && accessories.label + ": "}
            </Text>
            {accessories.name}
          </Text>
          <Text fontSize="sm">
            <Text as={"span"} fontWeight={"bold"}>
              {releaseDate.name && releaseDate.label + ": "}
            </Text>
            {releaseDate.name}
          </Text>
          <Text fontSize="sm">
            <Text as={"span"} fontWeight={"bold"}>
              {note.name && note.label + ": "}
            </Text>
            {note.name}
          </Text>
        </Box>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 p-4">
      <div className="p-4">{formInput()}</div>
      <div className="p-4">{previewFacebook()}</div>
    </div>
  );
};

export default Home;
