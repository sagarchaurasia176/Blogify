import React, { useContext } from "react";
import { BlogContext } from "../../Context/BlogContext";

const MoverHandler = () => {
  const { BtnNextHandler, page, totalPages } = useContext(BlogContext);
  return (
    <div>
      <div className=" bg-black text-white p-3 flex   justify-around items-baseline ">
        <div className="  space-x-8">
          {page > 1 && (
            <button onClick={()=>BtnNextHandler(page - 1)} className="  bg-white rounded-md text-black p-2">
              Previous
            </button>
          )}
          {page === totalPages && (
            <button
              onClick={() => BtnNextHandler(page + 1)}
              className=" rounded-md bg-slate-400 p-2"
            >
              Next
            </button>
          )}
        </div>

        {/* toatal size */}
        <button className="  bg-white rounded-md text-black p-2">
          Page {page} of {totalPages}
        </button>
      </div>
    </div>
  );
};

export default MoverHandler;
