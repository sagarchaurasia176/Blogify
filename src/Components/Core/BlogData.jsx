import React, { useContext } from "react";
import { BlogContext } from "../../Context/BlogContext";
import { SyncLoader } from "react-spinners";

const BlogData = () => {
  //called the usContext
  const { loading, posts } = useContext(BlogContext);
  console.log("post from the blog data", posts);

  return (
    <div className=" flex   bg-white  justify-center p-1 ">
      {/* Apply the map () here so we get */}
      <div className="  w-[1200px]">
        {loading ? (
          <div className="  flex items-center justify-center">
            <SyncLoader />
          </div>
        ) : Array.isArray(posts) && posts.length === 0 ? (
          <div className=" text-black">
            <h2 className=" text-center  text-4xl font-bold ">
              404 Page not found !{" "}
            </h2>
          </div>
        ) : (
          // Post page update here so we get !
          <div className="   text-black p-3">
            {Array.isArray(posts) &&
              posts.map((details) => (
                <div key={details.id}>
                  <div className="  text-orange-400  font-thin ">
                    <div className=" text-black font-semibold">
                      {details.title}
                    </div>
                    <div className=" text-green-900">{details.author}</div>
                    <div className=" text-blue-100 font-semibold">
                      {" "}
                      {details.category}
                    </div>
                    <div>{details.content}</div>
                    {/* tages apply */}
                    <div className=" flex   justify-around ">
                      {details.tags.map((tag) => {
                        return (
                          <span className=" text-blue-900 font-bold cursor-pointer">{`#${tag}`}</span>
                        );
                      })}
                    </div>
                    {/* <div>{datas.tags}</div> */}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogData;
