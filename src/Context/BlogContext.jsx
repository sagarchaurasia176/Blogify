import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
// loader
import { DotLoader } from "react-spinners";
import toast from "react-hot-toast";
export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  // Create all the states here
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  //Axios url apply there so we get
  const API_URL = import.meta.env.VITE_BLOG_URL;
  //start filling data
  const BlogPostData = async () => {
    let toastId = toast.loading("loading.......");
    try {
      const Data = axios.get(API_URL);
      console.log(Data);
      //modeified it
    } catch (er) {
      console.log("error whle fetching the blog data", er);
    }
    toast.dismiss(toastId);
    // setLoading(false)
  };

  //api fetched
  useEffect(() => {
    BlogPostData();
  }, []);

  //now stored it into one function so we get
  const StateValuesStoredAtOneObject = {
    loading,
    setLoading,
    posts,
    setPost,
    page,
    setPage,
    totalPage,
    setTotalPage,
  };

  //exectuted the states
  return (
    <BlogContext.Provider value={StateValuesStoredAtOneObject}>
      {children}
    </BlogContext.Provider>
  );
};
