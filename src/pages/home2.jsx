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
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
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

  const [versions, setVersions] = useState([]);

  useEffect(() => console.log(productInfo), [productInfo]);
  useEffect(() => console.log(versions), [versions]);

  const handleInputChange = (name, label, value) => {
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [name]: { label, name: value },
    }));
  };

  const handleVersionInputChange = (index, name, label, value) => {
    setVersions((prevVersions) => {
      const updatedVersions = [...prevVersions];
      updatedVersions[index][name] = { label, name: value };
      return updatedVersions;
    });
  };

  const addVersion = () => {
    setVersions((prevVersions) => [...prevVersions, { id: Date.now() }]);
  };

  const deleteVersion = (index) => {
    setVersions((prevVersions) => {
      const updatedVersions = [...prevVersions];
      updatedVersions.splice(index, 1);
      return updatedVersions;
    });
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
        {versions.map((version, index) => (
          <div key={version.id} className="grid grid-cols-3 gap-2">
            <InputWithFloatingLabel
              label="Ghi chú"
              name={`note${index}`}
              value={version[`note${index}`]?.name}
              onChange={(name, label, value) =>
                handleVersionInputChange(index, name, label, value)
              }
            />
            <InputWithFloatingLabel
              label="Giá"
              name={`price${index}`}
              value={version[`price${index}`]?.name}
              onChange={(name, label, value) =>
                handleVersionInputChange(index, name, label, value)
              }
            />
            <InputWithFloatingLabel
              label="Cọc"
              name={`deposit${index}`}
              value={version[`deposit${index}`]?.name}
              onChange={(name, label, value) =>
                handleVersionInputChange(index, name, label, value)
              }
            />
            <Button
              leftIcon={<DeleteIcon />}
              colorScheme="red"
              variant="outline"
              onClick={() => deleteVersion(index)}
            >
              Xóa
            </Button>
          </div>
        ))}
        <Stack direction="row" spacing={4}>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="pink"
            variant="solid"
            onClick={addVersion}
          >
            Kích thước khác
          </Button>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="blue"
            variant="solid"
            onClick={addVersion}
          >
            Phiên bản khác
          </Button>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="blue"
            variant="solid"
            onClick={addVersion}
          >
            Hình ảnh
          </Button>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="blue"
            variant="solid"
            onClick={addVersion}
          >
            Dòng sản phẩm
          </Button>
        </Stack>
      </div>
    );
  };
  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Avatar size="xl" src={logo} alt="Logo" mx="auto" my={4} />
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Thông tin sản phẩm
        </Text>
        <form>
          <FormControl id="product-info">
            {formInput()}
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              width="full"
              disabled={
                !productInfo.productName.name || !productInfo.manufacturer.name
              }
            >
              Tạo sản phẩm
            </Button>
          </FormControl>
        </form>
      </Box>
    </Flex>
  );
};

export default Home;
