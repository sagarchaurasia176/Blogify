import React from "react";
import BlogData from "./Core/BlogData";
import MoverHandler from "./Core/MoverHandler";

const Home = () => {
  return (
    <div className=" bg-slate-600">
      <div className=" border  mt-1">
        <BlogData />
        <MoverHandler />
      </div>
    </div>
  );
};

export default Home;
