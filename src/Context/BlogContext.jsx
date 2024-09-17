import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  // Create all the states here so we get !
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  //Axios url apply there so we get
  const API_URL = import.meta.env.VITE_BLOG_URL;
  const navigate = useNavigate();
  //start filling data
  const BlogPostData = async (page = 1, tags = null, category) => {
    //Called the blocks here so we get
    let API_URLS = `${API_URL}?page=${page}`;
    if (tags) {
      API_URLS += `&tags=${tags}`;
    }
    if (category) {
      API_URLS += `&category=${category}`;
    }

    try {
      setLoading(true);
      const response = await axios.get(`${API_URLS}`);
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
    navigate({ search: `?page=${page}` });
    setPage(page);
  };

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
