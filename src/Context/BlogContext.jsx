import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast'

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  // Create all the states here
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  //Axios url apply there so we get
  const API_URL = import.meta.env.VITE_BLOG_URL;
  //start filling data
  const BlogPostData = async (page = 1) => {
    //Called the blocks here so we get
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}?page=${page}`);
      const data = response.data;
      setPost(data.posts);
      setTotalPages(data.totalPages);
      //modeified it
    } catch (er) {
      console.log(er);
      console.log("error whle fetching the blog data", er);
      setPost([]);
      // setPage(0);
      setTotalPages(null);
    } finally {
      // loading false after executed
      setLoading(false);
    }
  };

  //Buttone movement apply there
  const BtnNextHandler = (page) => {
    setPage(page);
    toast.success("move to next page")
    BlogPostData(page )
  };

  useEffect(() => {
    BlogPostData(page);
  }, [page]);

  //now stored it into one function so we get
  const StateValuesStoredAtOneObject = {
    loading,
    setLoading,
    posts,
    setPost,
    page,
    setPage,
    totalPages,
    BtnNextHandler,
    BlogPostData,
    setTotalPages,
  };

  //exectuted the states
  return (
    <BlogContext.Provider value={StateValuesStoredAtOneObject}>
      {children}
    </BlogContext.Provider>
  );
};
