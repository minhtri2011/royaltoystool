import { Avatar, Box, Card, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/logo.jpg";
import { getPostData } from "../redux/slices/postSlice";

const Preview = () => {
  const postData = useSelector(getPostData);

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
    link,
    note,
    type,
    versions,
  } = postData;

  const renderInfo = (data, title, final) => {
    if (!data) return;
    return (
      <Text fontSize="sm">
        {title && (
          <Text as={"span"} fontWeight={"bold"}>
            {title + ": "}
          </Text>
        )}
        {final || data}
      </Text>
    );
  };

  const renderAllVersionsPost = () => {
    return versions.map((version) => {
      return (
        <div key={version.id} className="mt-2">
          <Text>- {version.versionName} -</Text>
          <Text fontSize="sm">
            <Text as={"span"} fontWeight={"bold"}>
              {(version.height || version.ratio) && "Kích thước: "}
            </Text>
            <Text as={"span"}>
              {version.ratio && "[ 1/" + version.ratio + " ] "}
              {version.height && "Cao " + version.height}{" "}
              {version.width && " x "} {version.width} {version.depth && " x "}{" "}
              {version.depth} {version.height && " cm"}{" "}
            </Text>
          </Text>

          {renderInfo(
            version.versionLimit,
            "Giới hạn",
            Number(version.versionLimit).toLocaleString() + " bản"
          )}
          {(version.price || version.deposit) && (
            <Text className="inline-flex">
              {renderInfo(
                version.price,
                "Giá bán",
                Number(version.price).toLocaleString() + " VNĐ"
              )}
              {version.deposit && <p> &nbsp;-&nbsp;</p>}
              {renderInfo(
                version.deposit,
                "Cọc",
                Number(version.deposit).toLocaleString() + " VNĐ"
              )}
            </Text>
          )}

          {renderInfo(
            version.bankFull,
            "Bank full",
            Number(version.bankFull).toLocaleString() + " VNĐ"
          )}
          {renderInfo(version.accessories, "Phụ kiện")}
          {renderInfo(version.versionNote, "Ghi chú")}
        </div>
      );
    });
  };

  return (
    <Card className="p-2">
      <Flex>
        <Avatar src={logo} />
        <Box ml="3">
          <Text fontWeight="bold">Royal Toys</Text>
          <Text fontSize="sm">1 phút trước</Text>
        </Box>
      </Flex>

      <Box ml="3">
        <Text fontSize="sm" className="pt-1 pb-3 font-bold">
          {preOrder}
          {productName}
          <Text fontSize="sm" className="pt-1 pb-3 font-normal" as={"span"}>
            {type && ' (' + type + ')'}
          </Text>
        </Text>

        {renderInfo(manufacturer, "Hãng sản xuất")}

        <Text fontSize="sm">
          <Text as={"span"} fontWeight={"bold"}>
            {(height || ratio) && "Kích thước: "}
          </Text>
          <Text as={"span"}>
            {ratio && "[ 1/" + ratio + " ] "}
            {height && "Cao " + height} {width && " x "} {width}{" "}
            {depth && " x "} {depth} {height && " cm"}{" "}
          </Text>
        </Text>
        {(fprice || price || deposit) && (
          <Text as="span" className="inline-flex">
            {renderInfo(
              fprice,
              "Giá bán dự kiến",
              Number(fprice).toLocaleString() + " VNĐ"
            )}
            {renderInfo(
              price,
              "Giá bán",
              Number(price).toLocaleString() + " VNĐ"
            )}
            {deposit && <p> &nbsp;-&nbsp;</p>}
            {renderInfo(
              deposit,
              "Cọc",
              Number(deposit).toLocaleString() + " VNĐ"
            )}
          </Text>
        )}

        {renderInfo(
          bankFull,
          "Bank full",
          Number(bankFull).toLocaleString() + " VNĐ"
        )}
        {renderInfo(limit, "Giới hạn", Number(limit).toLocaleString() + " bản")}
        {renderInfo(material, "Chất liệu")}
        {renderInfo(accessories, "Phụ kiện")}
        {renderInfo(releaseDate, "Phát hành")}
        {renderInfo(note, "Ghi chú")}
        {renderInfo(link, "Link Uncensored")}

        {/* //todo: render all version */}
        {renderAllVersionsPost()}
      </Box>
    </Card>
  );
};

export default Preview;
