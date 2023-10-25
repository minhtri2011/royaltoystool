import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Button, Select } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
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

const Form = () => {
  const postData = useSelector(getPostData);
  const dispatch = useDispatch();
  const handleResetForm = () => {
    dispatch(resetForm());
    inputProductNameRef.current.focus();
  };
  const inputProductNameRef = useRef(null);
  const iref = useRef(null);
  const handleAddNewVersion = () => {
    dispatch(addNewVersion());
    setTimeout(() => {
      iref.current && iref.current.focus();
      iref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 0);
  };

  const {
    preOrder,
    productName,
    manufacturer,
    height,
    ratio,
    width,
    fprice,
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
    link,
    type
  } = postData;

  useEffect(() => {
    inputProductNameRef.current && inputProductNameRef.current.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Kiểm tra xem phím tắt đã được nhấn hay chưa (ví dụ: Alt + A)
      if (event.altKey && event.keyCode === 65) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định (ví dụ: mở menu Alt)
        handleAddNewVersion();
      }
      if (event.altKey && event.keyCode === 68) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định (ví dụ: mở menu Alt)
        handleResetForm();
      }
    };

    // Lắng nghe sự kiện keydown trên phần tử cụ thể (ví dụ: document.body)
    document.body.addEventListener("keydown", handleKeyDown);

    // Xóa lắng nghe sự kiện khi component bị hủy
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Truyền mảng rỗng [] để đảm bảo useEffect chỉ chạy một lần sau khi component được tạo

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
      "fprice",
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
          label: "Giới hạn",
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
          label: "Phụ kiện",
          name: "accessories",
          value: version.accessories,
        },
        {
          label: "Ghi chú",
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
            "accessories accessories accessories"
            "versionNote versionNote versionNote"
            `,
            }}
          >
            {inputItems.map((inputItem, key) => {
              if (inputItem.name === "versionName") {
                return (
                  <div key={key} style={{ gridArea: inputItem.name }}>
                    <InputWithFloatingLabel
                      {...inputItem}
                      ref={iref}
                      id={version.id}
                      type={checkType(inputItem.name)}
                      onChange={handleInputChangeVersion}
                    />
                  </div>
                );
              }
              return (
                <div key={key} style={{ gridArea: inputItem.name }}>
                  <InputWithFloatingLabel
                    {...inputItem}
                    id={version.id}
                    type={checkType(inputItem.name)}
                    onChange={handleInputChangeVersion}
                  />
                </div>
              );
            })}
          </div>
          <Button
            leftIcon={<DeleteIcon />}
            className="mt-2 w-full "
            colorScheme="purple"
            variant="solid"
            onClick={() => handleDeleteVersion(version.id)}
          >
            Xóa phiên bản này
          </Button>
        </div>
      );
    });
  };

  const handleChangePreOrder = (e) => {
    const value = e.target.value;
    dispatch(setFormValue({ name: "preOrder", value }));
  };
  const handleChangeType= (e) => {
    const value = e.target.value;
    dispatch(setFormValue({ name: "type", value }));
  };

  return (
    <>
      <div className="grid gap-4 grid-cols-4 gridFormTemplateMobile sm:gridFormTemplate">

        <div style={{ gridArea: "productName" }}>
          <InputWithFloatingLabel
            label="Tên sản phẩm"
            name="productName"
            value={productName}
            ref={inputProductNameRef}
            type={checkType("productName")}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ gridArea: "preOrder" }}>
          <Select
            className="cursor-pointer !w-full"
            onChange={handleChangePreOrder}
            value={preOrder}
          >
            <option className="text-black" value="[Pre order] ">Pre-order</option>
            <option className="text-black" value="[Hàng sẵn] ">Hàng sẵn</option>
          </Select>
        </div>
        <div style={{ gridArea: "type" }}>
          <Select
            className="cursor-pointer !w-full"
            onChange={handleChangeType}
            value={type}
          >
            <option className="text-black" value="">Resin</option>
            <option className="text-black" value="Cast off">Cast off</option>
            <option className="text-black" value="Model kit">Model kit</option>
            <option className="text-black" value="Metal build">Metal build</option>
          </Select>
        </div>

        <div style={{ gridArea: "manufacturer" }}>
          <InputWithFloatingLabel
            label="Hãng sản xuất"
            name="manufacturer"
            value={manufacturer}
            type={checkType("manufacturer")}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ gridArea: "releaseDate" }}>
          <InputWithFloatingLabel
            label="Ngày phát hành"
            name="releaseDate"
            value={releaseDate}
            type={checkType("releaseDate")}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ gridArea: "limit" }}>
          <InputWithFloatingLabel
            label="Giới hạn"
            name="limit"
            value={limit}
            type={checkType("limit")}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ gridArea: "material" }}>
          <InputWithFloatingLabel
            label="Chất liệu"
            name="material"
            value={material}
            type={checkType("material")}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ gridArea: "accessories" }}>
          <InputWithFloatingLabel
            label="Phụ kiện"
            name="accessories"
            value={accessories}
            type={checkType("accessories")}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ gridArea: "ratio" }}>
          <InputWithFloatingLabel
            label="Tỉ lệ"
            name="ratio"
            value={ratio}
            type={checkType("ratio")}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ gridArea: "height" }}>
          <InputWithFloatingLabel
            label="Cao"
            name="height"
            value={height}
            type={checkType("height")}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ gridArea: "width" }}>
          <InputWithFloatingLabel
            label="Rộng"
            name="width"
            value={width}
            type={checkType("width")}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ gridArea: "depth" }}>
          <InputWithFloatingLabel
            label="Sâu"
            name="depth"
            value={depth}
            type={checkType("depth")}
            onChange={handleInputChange}
          />
        </div>

     

        <div style={{ gridArea: "price" }}>
          <InputWithFloatingLabel
            label="Giá bán"
            name="price"
            value={price}
            type={checkType("price")}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ gridArea: "deposit" }}>
          <InputWithFloatingLabel
            label="Đặt cọc"
            name="deposit"
            value={deposit}
            type={checkType("deposit")}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ gridArea: "bankFull" }}>
          <InputWithFloatingLabel
            label="Bank full"
            name="bankFull"
            value={bankFull}
            type={checkType("bankFull")}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ gridArea: "fprice" }}>
          <InputWithFloatingLabel
            label="Giá bán dự kiến"
            name="fprice"
            value={fprice}
            type={checkType("fprice")}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ gridArea: "link" }}>
          <InputWithFloatingLabel
            label="Link"
            name="link"
            value={link}
            type={checkType("link")}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ gridArea: "note" }}>
          <InputWithFloatingLabel
            label="Ghi chú"
            name="note"
            value={note}
            type={checkType("note")}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div>{renderAllVersions()}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Button
          leftIcon={<DeleteIcon />}
          colorScheme="red"
          variant="solid"
          onClick={handleResetForm}
        >
          Xóa toàn bộ (Alt + D)
        </Button>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="yellow"
          variant="solid"
          onClick={handleAddNewVersion}
        >
          Phiên bản khác (Alt + A)
        </Button>
      </div>
    </>
  );
};

export default Form;
