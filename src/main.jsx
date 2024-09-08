import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { BlogContextProvider } from "./Context/BlogContext.jsx";
import { Toaster } from "react-hot-toast";
// Create Root apply there
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BlogContextProvider>
        {/* Contexet provider  */}
        <Toaster/>
        <App />
      </BlogContextProvider>
    </BrowserRouter>
  </StrictMode>
);
