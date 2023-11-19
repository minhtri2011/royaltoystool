import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useCopy from "../hooks/useCopy";

const ListButton = () => {
  const {
    copyWeb,
    copyNameProducer,
    copyName,
    copyTagsBasic,
    copyResinDownloadToolNameProducer,
    copyPrice,
    copyFaceBook,
  } = useCopy();

  const links = [
    "https://www.fanaticanimestore.com/pre-order/?sort=newest",
    // "https://orzgk.com/collections/newest-pre-order",
    "https://www.anitoysgk.com/Preorder/",
    "https://www.nightwindshop.com/en/product/all/newest",
    "https://www.hobbyfanclub.com/hfc/home/boardgallery.aspx?forumid=18",
    "https://toystation.waca.tw/category/126396/newest",
    "https://twitter.com/hamajippaR18?lang=zh-Hant",
    "https://twitter.com/orz_GK",
  ];

  const handleOpenLinks = () => {
    links.forEach((link) => {
      const newWindow = window.open(link, "_blank");
      if (newWindow) {
        newWindow.opener = null;
      }
    });
  };

  return (
    <>
      <div className=" flex gap-3 flex-wrap w-full">
        <Button
          colorScheme="purple"
          variant={"outline"}
          onClick={copyResinDownloadToolNameProducer}
        >
          Resin / Tên - Hãng
        </Button>
        <Button colorScheme="red" variant={"outline"} onClick={handleOpenLinks}>
          Links cast off
        </Button>
        <Button colorScheme="teal" variant={"outline"} onClick={copyTagsBasic}>
          Tags
        </Button>
        <Link to="/giveaway">
          <Button colorScheme="pink" variant={"outline"}>
            Give away
          </Button>
        </Link>
      </div>
      {/* <div className=" flex gap-3 flex-wrap w-full mt-2 border-t-2 pt-2">
        <Button colorScheme="facebook" onClick={copyFaceBook}>
          Facebook
        </Button>
      </div> */}

      <div className="mt-2 flex gap-3 flex-wrap w-full border-t-2 pt-2">
        <Button colorScheme="facebook" onClick={copyFaceBook}>
          Facebook
        </Button>
        <Button
          colorScheme="whatsapp"
          variant={"solid"}
          onClick={copyNameProducer}
        >
          Tên - Hãng
        </Button>
        <Button colorScheme="purple" onClick={copyWeb}>
          Web
        </Button>
        <Button colorScheme="orange" variant={"solid"} onClick={copyPrice}>
          Giá
        </Button>
        <Button colorScheme="pink" variant={"solid"} onClick={copyName}>
          Tên
        </Button>
      </div>
    </>
  );
};

export default ListButton;
