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
  } = useCopy();

  return (
    <div className="flex gap-3 flex-wrap w-full">
      <Button colorScheme="facebook" onClick={copyResinFaceBook}>
        Resin v1
      </Button>
      <Button colorScheme="facebook" onClick={copyResinFaceBookV2}>
        Resin v2
      </Button>
      <Button colorScheme="orange" onClick={copyWebResin}>
        Web resin
      </Button>
      <Button colorScheme="purple" variant={"outline"} onClick={copyKit}>
        Kit
      </Button>
      <Button colorScheme="red" variant={"outline"} onClick={copyMetalBuild}>
        Metal Build
      </Button>
      <Button colorScheme="yellow" variant={"outline"} onClick={copyFigure}>
        Figure
      </Button>
      <Button colorScheme="blackAlpha" variant={"outline"} onClick={copyWeb}>
        Web
      </Button>
    </div>
  );
};

export default ListButton;
