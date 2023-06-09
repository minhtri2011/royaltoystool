import React from "react";
import Form from "../components/form";
import Preview from "../components/preview";
import ListButton from "../components/listButton";
import Price from "../components/price";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <div className="p-4 max-h-screen overflow-auto scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thin pb-32">
          <Form />
        </div>
        <div className="p-4 max-h-screen overflow-auto scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thin pb-32">
          <div className="py-4">
            <ListButton />
          </div>
          <Preview />
        </div>
        <Price />
      </div>
    </>
  );
};

export default Home;
