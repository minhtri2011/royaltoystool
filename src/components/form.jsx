import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewVersion,
  deleteVersion,
  getPostData,
  resetForm,
  setFormValue,
  setFormVersion,
} from "../redux/slices/postSlice";
import InputWithFloatingLabel from "./inputWithFloatingLabel";
import convertTextToBold from "../feature/convertTextToBold";

const Form = () => {
  const postData = useSelector(getPostData);
  const dispatch = useDispatch();
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

  const inputArr = [
    {
      label: "Tên sản phẩm",
      name: "productName",
      value: productName,
    },
    {
      label: "Hãng sản xuất",
      name: "manufacturer",
      value: manufacturer,
    },
    {
      label: "Ngày phát hành",
      name: "releaseDate",
      value: releaseDate,
    },
    {
      label: "Giới hạn",
      name: "limit",
      value: limit,
    },
    {
      label: "Chất liệu",
      name: "material",
      value: material,
    },
    {
      label: "Phụ kiện",
      name: "accessories",
      value: accessories,
    },
    {
      label: "Tỉ lệ",
      name: "ratio",
      value: ratio,
    },
    {
      label: "Cao",
      name: "height",
      value: height,
    },
    {
      label: "Rộng",
      name: "width",
      value: width,
    },
    {
      label: "Sâu",
      name: "depth",
      value: depth,
    },
    {
      label: "Giá bán",
      name: "price",
      value: price,
    },
    {
      label: "Đặt cọc",
      name: "deposit",
      value: deposit,
    },
    {
      label: "Bank full",
      name: "bankFull",
      value: bankFull,
    },
    {
      label: "Ghi chú",
      name: "note",
      value: note,
    },
  ];

  const handleAddNewVersion = () => dispatch(addNewVersion());
  const handleResetForm = () => dispatch(resetForm());
  const handleInputChange = (name, value) => {
    dispatch(setFormValue({ name, value }));
  };
  const handleInputChangeVersion = (name, value, id) => {
    dispatch(setFormVersion({ name, value, id }));
  };
  const handleDeleteVersion = (id) => {
    dispatch(deleteVersion(id));
  };
  const checkType = (value) => {
    const arr = [
      "limit",
      "ratio",
      "height",
      "width",
      "price",
      "depth",
      "bankFull",
      "deposit",
      "versionLimit",
    ];
    return arr.includes(value) ? "number" : "text";
  };

  const renderAllVersions = () => {
    return versions.map((version) => {
      const inputItems = [
        {
          label: "Tên phiên bản",
          name: "versionName",
          value: version.versionName,
        },
        { label: "Tỉ lệ", name: "ratio", value: version.ratio },
        {
          label: "Giới hạn riêng",
          name: "versionLimit",
          value: version.versionLimit,
        },
        { label: "Cao", name: "height", value: version.height },
        { label: "Rộng", name: "width", value: version.width },
        { label: "Sâu", name: "depth", value: version.depth },
        { label: "Giá bán", name: "price", value: version.price },
        { label: "Đặt cọc", name: "deposit", value: version.deposit },
        { label: "Bank full", name: "bankFull", value: version.bankFull },
        {
          label: "Ghi chú riêng",
          name: "versionNote",
          value: version.versionNote,
        },
      ];

      return (
        <div key={version.id}>
          <hr className="w-full border-red-600 mt-4" />
          <div
            className="mt-[1rem]"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, 1fr)",
              gridAutoRows: "minmax(0, auto)",
              gap: "1rem",
              gridTemplateAreas: `
            "versionName versionName versionName"
            "ratio versionLimit versionLimit"
            "height width depth"
            "price deposit bankFull"
            "versionNote versionNote versionNote"
            `,
            }}
          >
            {inputItems.map((inputItem, key) => (
              <div key={key} style={{ gridArea: inputItem.name }}>
                <InputWithFloatingLabel
                  {...inputItem}
                  id={version.id}
                  type={checkType(inputItem.name)}
                  onChange={handleInputChangeVersion}
                />
              </div>
            ))}
          </div>
          <Button
            leftIcon={<DeleteIcon />}
            className="mt-2 w-full"
            colorScheme="red"
            variant="solid"
            onClick={() => handleDeleteVersion(version.id)}
          >
            Xóa phiên bản này
          </Button>
        </div>
      );
    });
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "minmax(0, auto)",
          gap: "1rem",
          gridTemplateAreas: `
          "productName productName productName productName"
          "manufacturer manufacturer releaseDate releaseDate"
          "limit material accessories accessories"
          "ratio height width depth"
          "price price deposit bankFull"
          "note note note note"
          `,
        }}
      >
        {inputArr.map((inputItem, key) => (
          <div key={key} style={{ gridArea: inputItem.name }}>
            <InputWithFloatingLabel
              {...inputItem}
              type={checkType(inputItem.name)}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
      <div>{renderAllVersions()}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "minmax(0, auto)",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Button
          leftIcon={<DeleteIcon />}
          colorScheme="pink"
          variant="solid"
          onClick={handleResetForm}
        >
          Xóa toàn bộ
        </Button>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="blue"
          variant="solid"
          onClick={handleAddNewVersion}
        >
          Phiên bản khác
        </Button>
        <Button leftIcon={<AddIcon />} colorScheme="blue" variant="outline">
          Giá mua combo
        </Button>
      </div>
    </>
  );
};

export default Form;
