import { toast } from "react-hot-toast";

const useCopyTiktok = () => {
  const tagBasic =
    "#royalToys #royal #toys #tringuyendev #decor #moHinh #doChoi #xuHuong #trending ";

  //! kit share
  const copyKitBasicShare = () => {
    const tags = "#modelKit #kit #custom #repaint";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok kit basic share", {
      duration: 1000,
    });
  };
  const copyKitBandaiShare = () => {
    const tags = "#modelKit #kit #bandai #gundam #gunpla #custom #repaint";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok kit Bandai share", {
      duration: 1000,
    });
  };
  const copyKitMNShare = () => {
    const tags =
      "#modelKit #kit #motorNuclear #tinhGiapHonTuong #custom #repaint";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok kit Motor Nuclear share", {
      duration: 1000,
    });
  };

  //! kit
  const copyKitBasic = () => {
    const tags = "#modelKit #kit";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok kit basic", {
      duration: 1000,
    });
  };
  const copyKitBandai = () => {
    const tags = "#modelKit #kit #bandai #gundam #gunpla";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok kit Bandai basic", {
      duration: 1000,
    });
  };
  const copyKitMN = () => {
    const tags = "#modelKit #kit #motorNuclear #tinhGiapHonTuong";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok kit Motor Nuclear basic", {
      duration: 1000,
    });
  };

  //!metal build
  const copyMB = () => {
    const tags = "#metalBuild";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok Metalbuild basic", {
      duration: 1000,
    });
  };
  const copyMBMoshow = () => {
    const tags = "#metalBuild #moshow";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok Metalbuild Moshow", {
      duration: 1000,
    });
  };
  const copyMBMotorNuclear = () => {
    const tags = "#metalBuild #motorNuclear";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok Metalbuild Motor Nuclear", {
      duration: 1000,
    });
  };
  const copyMBCangdao = () => {
    const tags = "#metalBuild #cangDao";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok Metalbuild Cangdao", {
      duration: 1000,
    });
  };

  //!resin
  const copyResinBasic = () => {
    const tags = "#resin #figure #anime #wibu";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok resin basic", {
      duration: 1000,
    });
  };
  const copyResinDB = () => {
    const tags =
      "#resin #figure #anime #wibu #dragonBall #dragon #ball #super #7 #vien #ngoc #rong";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok resin dragonball", {
      duration: 1000,
    });
  };
  const copyResinOP = () => {
    const tags = "#resin #figure #anime #wibu #onePiece #vua #hai #tac";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok resin One Piece", {
      duration: 1000,
    });
  };
  const copyResinBleach = () => {
    const tags = "#resin #figure #anime #wibu #bleach";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok resin Bleach", {
      duration: 1000,
    });
  };
  const copyResinKNY = () => {
    const tags =
      "#resin #figure #anime #wibu #kimetsuNoYaiba #kimetsu #no #yaiba #demon #slayer #thanh #guom #diet #quy";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok resin KNY", {
      duration: 1000,
    });
  };
  const copyResinChainsawMan = () => {
    const tags = "#resin #figure #anime #wibu #chainsawMan";
    navigator.clipboard.writeText(tagBasic + tags);
    toast.success("Copy tiktok resin Chainsaw Man", {
      duration: 1000,
    });
  };

  return {
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
  };
};

export default useCopyTiktok;
