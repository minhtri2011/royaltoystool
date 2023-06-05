import React from "react";
import Form from "../components/form";
import Preview from "../components/preview";
import ListButton from "../components/listButton";

const Home = () => {
  return (
    <div className="grid grid-cols-2 p-4">
      <div className="p-4 max-h-screen overflow-auto scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thin">
        <Form />
      </div>
      <div className="p-4">
      <div className="py-4">
        <ListButton/>
      </div>
        <Preview />
      </div>
    </div>
  );
};

export default Home;
