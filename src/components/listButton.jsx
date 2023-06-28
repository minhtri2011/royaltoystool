import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import useCopy from "../hooks/useCopy";

const ListButton = () => {
  const {
    copyResinFaceBook,
    copyResinFaceBookV2,
    copyWebResin,
    copyFigure,
    copyKit,
    copyMetalBuild,
    copyWeb,
    copyNameProducer,
    copyName,
    copyTagsBasic,
  } = useCopy();

  const links = [
    "https://miraicollectibles.com/all-statues?limit=100",
    "https://www.nightwindshop.com/en/product/all/newest",
    "https://gameharbors.com/best-anime-collectibles-shop",
    "https://orzgk.com/collections/xian-huo",
    "https://sugotoys.com.au/product-category/pre-order",
    "https://www.hobbyfanclub.com/hfc/home/boardgallery.aspx?forumid=18",
    "https://www.hottoygk.com.tw/collections/all"
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
      <div className="flex gap-3 flex-wrap w-full">
        <Button colorScheme="facebook"  onClick={copyResinFaceBook}>
          Resin
        </Button>
        {/* <Button colorScheme="facebook" onClick={copyResinFaceBookV2}> Resin v2 </Button> */}
        <Button colorScheme="orange"  onClick={copyWebResin}>
          Web resin
        </Button>
        <Button colorScheme="purple"  onClick={copyKit}>
          Kit
        </Button>
        <Button colorScheme="red"  onClick={copyMetalBuild}>
          Metal Build
        </Button>
        <Button colorScheme="yellow"  onClick={copyFigure}>
          Figure
        </Button>
        <Button colorScheme="blackAlpha"  onClick={copyWeb}>
          Web
        </Button>
      </div>
      <div className="mt-2 flex gap-3 flex-wrap w-full">
        <Button colorScheme="purple" variant={"outline"} onClick={copyName}>
          Tên
        </Button>
        {/* <Button colorScheme="facebook" onClick={copyResinFaceBookV2}> Resin v2 </Button> */}
        <Button
          colorScheme="whatsapp"
          variant={"outline"}
          onClick={copyNameProducer}
        >
          Tên - Hãng
        </Button>
        <Button colorScheme="teal" variant={"outline"} onClick={copyTagsBasic}>
          Tags
        </Button>
        <Button colorScheme="red" variant={"outline"} onClick={handleOpenLinks}>
          Links cast off
        </Button>
      </div>
    </>
  );
};

export default ListButton;
