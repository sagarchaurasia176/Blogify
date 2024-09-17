import React, { useContext } from "react";
import { BlogContext } from "../../Context/BlogContext";
import { SyncLoader } from "react-spinners";
import FitlerCardPage from "../../pages/FitlerCardPage";

const BlogData = () => {
  //called the usContext
  const { loading, posts } = useContext(BlogContext);
  return (
    <div className="  bg-white ">
      {/* Apply the map () here so we get */}
      <div className="">
        {loading ? (
          <div className=" flex justify-center items-center  h-screen mt-[15rem]">
            <SyncLoader />
          </div>
        ) : Array.isArray(posts) && posts.length === 0 ? (
          <div className=" text-black h-screen w-full">
            <h2 className=" text-center  text-4xl font-bold ">
              404 Page not found !{" "}
            </h2>
          </div>
        ) : (
          // Post page update here so we get !
          <div>
            {posts.map((val) => (
              // main card page ---
              <FitlerCardPage key={val.id} val={val} />
            ))}
          </div>
        )}
      </div>
      {/* footer*/}
    </div>
  );
};

export default BlogData;
