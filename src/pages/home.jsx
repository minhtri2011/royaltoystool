import React from "react";
import Form from "../components/form";
import Preview from "../components/preview";
import ListButton from "../components/listButton";
import Price from "../components/price";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="p-4 max-h-screen overflow-auto scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thin lg:pb-32">
          <Form />
        </div>
        <div className="p-4 max-h-screen overflow-auto scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thin pb-40 lg:pb-32">
          <div className="py-4">
            <ListButton />
          </div>
          <Preview />
        </div>
        <Price />
        <Link className="fixed bottom-1 right-1 z-10 md:hidden" to="/tags">
          <img src={logo} alt="" className="w-10 rounded-full"/>
        </Link>
      </div>
    </>
  );
};

export default Home;
