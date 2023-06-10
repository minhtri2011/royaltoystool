import { Button, Text } from "@chakra-ui/react";
import React from "react";
import useCopyTiktok from "../hooks/useCopyTiktok";

const TagsPage = () => {
  const {
    copyKitBasic,
    copyKitBandai,
    copyKitBandaiShare,
    copyKitBasicShare,
    copyKitMN,
    copyKitMNShare,
    copyMB,
    copyMBCangdao,
    copyMBMoshow,
    copyMBMotorNuclear,
    copyResinBasic,
    copyResinBleach,
    copyResinChainsawMan,
    copyResinDB,
    copyResinOP,
    copyResinKNY,
  } = useCopyTiktok();
  return (
    <div className="p-2">
      <Text fontWeight={"bold"} className="mt-1 mb-2">
        Kit Share
      </Text>
      <div className="flex gap-3 flex-wrap">
        <Button onClick={copyKitBasicShare}>Basic</Button>
        <Button onClick={copyKitBandaiShare}>Bandai</Button>
        <Button onClick={copyKitMNShare}>Motor Nuclear kit</Button>
      </div>
      <Text fontWeight={"bold"} className="mt-1 mb-2">
        Kit
      </Text>
      <div className="flex gap-3 flex-wrap">
        <Button onClick={copyKitBasic}>Basic</Button>
        <Button onClick={copyKitBandai}>Bandai</Button>
        <Button onClick={copyKitMN}>Motor Nuclear kit</Button>
      </div>
      <Text fontWeight={"bold"} className="mt-1 mb-2">
        Metabuild
      </Text>
      <div className="flex gap-3 flex-wrap">
        <Button onClick={copyMB}>Basic</Button>
        <Button onClick={copyMBMoshow}>Moshow</Button>
        <Button onClick={copyMBMotorNuclear}>Motor Nuclear</Button>
        <Button onClick={copyMBCangdao}>Cangdao</Button>
      </div>
      <Text fontWeight={"bold"} className="mt-1 mb-2">
        Resin
      </Text>
      <div className="flex gap-3 flex-wrap">
        <Button onClick={copyResinBasic}>Basic</Button>
        <Button onClick={copyResinDB}>Dragon ball</Button>
        <Button onClick={copyResinOP}>One Piece</Button>
        <Button onClick={copyResinBleach}>Bleach</Button>
        <Button onClick={copyResinKNY}>KNY</Button>
        <Button onClick={copyResinChainsawMan}>Chainsaw man</Button>
      </div>
    </div>
  );
};

export default TagsPage;
