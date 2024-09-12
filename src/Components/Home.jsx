import React from "react";
import BlogData from "./Core/BlogData";
import MoverHandler from "./Core/MoverHandler";

const Home = () => {
  return (
    <div className=" bg-slate-600">
      <div className=" ">
        <BlogData />
      </div>
      <MoverHandler />
    </div>
  );
};

export default Home;
