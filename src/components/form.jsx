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
  } = postData;
  const inputArr = [
    {
      label: "Tên sản phẩm",
      name: "productName",
      value: productName,
      ref: inputProductNameRef,
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
      label: "Link",
      name: "link",
      value: link,
    },
    {
      label: "Ghi chú",
      name: "note",
      value: note,
    },
  ];
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

  const handleChangePreOrder=e=>{
    const value = e.target.value;
    dispatch(setFormValue({name:'preOrder',value}))
  }

  return (
    <>
      <div className="grid gap-4 grid-cols-4 gridFormTemplateMobile sm:gridFormTemplate">
        <Select className="cursor-pointer" style={{ gridArea: "preOrder" }} onChange={handleChangePreOrder} value={preOrder} placeholder="Trạng thái">
          <option value="[Pre-order] ">Pre-order</option>
          <option value="[Hàng sẵn] ">Hàng sẵn</option>
        </Select>
        {inputArr.map((inputItem, key) => (
          <div key={key} style={{ gridArea: inputItem.name }}>
            <InputWithFloatingLabel
              {...inputItem}
              ref={inputItem.ref ? inputItem.ref : null}
              type={checkType(inputItem.name)}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
      <div>{renderAllVersions()}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Button
          leftIcon={<DeleteIcon />}
          colorScheme="pink"
          variant="solid"
          onClick={handleResetForm}
        >
          Xóa toàn bộ (Alt + D)
        </Button>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="blue"
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
