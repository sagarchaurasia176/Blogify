import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Navbar from "./Components/Core/Navbar";
import Home from "./Components/Home";
import "./App.css";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { useContext, useEffect } from "react";
import { BlogContext } from "./Context/BlogContext";

const App = () => {
  const { page, BlogPostData } = useContext(BlogContext);
  //create the useSearch Params hooks
  const [searchParams, setSearchParams] = useSearchParams();
  //too identify the current location we used the location params
  const location = useLocation();

  // Dynamiacally call and change the ids from the apis
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    // applied for the tag so we get
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replacAll("-", " ");
      BlogPostData(Number(page), tag);

      // Category conditions
    } else if (location.pathname.includes("category")) {
      const category = location.pathname.split("/").at(-1).replacAll("");
      BlogPostData(Number(page), category);
    } else {
      BlogPostData(Number(page));
    }

    // change whenever it calls
  }, [location.pathname, location.searchParams]);

  return (
    <>
      {/* navabar */}
      <Navbar />
      {/* Apply the routes here so we get  */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogpage/:blogId" element={<BlogPage />}></Route>
        <Route path="/tag/:tagId" element={<TagPage />}></Route>
        <Route path="/category/:category" element={<CategoryPage />}></Route>
      </Routes>
    </>
  );
};

export default App;


// Pending id iterations