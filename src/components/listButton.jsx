import { Button } from "@chakra-ui/react";
import React from "react";
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
    copyFaceBookV2,
  } = useCopy();

  const links = [
    "https://www.fanaticanimestore.com/pre-order/?sort=newest",
    "https://www.nightwindshop.com/en/product/all/newest",
    "https://miraicollectibles.com/all-statues?limit=100",
    "https://gameharbors.com/best-anime-collectibles-shop",
    "https://orzgk.com/collections/xian-huo?limit=200",
    "https://sugotoys.com.au/product-category/pre-order/?swoof=1&ppp=200&pa_types=artwork,diorama,model-toys,statue-anime,statue-general&really_curr_tax=136-product_cat",
    "https://www.hobbyfanclub.com/hfc/home/boardgallery.aspx?forumid=18",
    "https://www.hottoygk.com.tw/collections/all",
    "https://www.anitoysgk.com/%E3%80%90Pre-order%E3%80%91-c601340/list---7-2-----r1.html",
    "https://toystation.waca.tw/category/126396/newest",
    "https://twitter.com/hamajippaR18?lang=zh-Hant",
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
        <Button colorScheme="facebook" onClick={copyFaceBook}>
          Facebook
        </Button>
        <Button colorScheme="facebook" onClick={copyFaceBookV2}>
          Facebook v2
        </Button>

        <Button colorScheme="teal" variant={"outline"} onClick={copyTagsBasic}>
          Tags
        </Button>
        <Button colorScheme="red" variant={"outline"} onClick={handleOpenLinks}>
          Links cast off
        </Button>
        <Button
          colorScheme="purple"
          variant={"outline"}
          onClick={copyResinDownloadToolNameProducer}
        >
          Resin / Tên - Hãng
        </Button>
      </div>

      <div className="mt-2 flex gap-3 flex-wrap w-full border-t-2 pt-2">
        <Button colorScheme="pink" variant={"solid"} onClick={copyName}>
          Tên
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
      </div>
    </>
  );
};

export default ListButton;
