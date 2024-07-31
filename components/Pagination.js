import React from 'react'
import ReactPaginate from "react-paginate";
import { changePage } from "@/store/Reducers/movieReducer";
import { useDispatch } from "react-redux";
const Pagination = () => {

  const dispatch = useDispatch();
    
    
  const handlePageClick = (e) => {
    dispatch(changePage(e.selected + 1));
  };
  return (
    <ReactPaginate
          activeClassName="bg-blue-500 px-2 text-white"
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={10}
          previousLabel="< "
          containerClassName="flex space-x-2 pt-10 justify-center"
          pageClassName="px-2 py-1 rounded-full border hover:bg-blue-200 hover:text-blue-700"
          previousClassName="px-2 py-1 rounded-full border hover:bg-blue-200 hover:text-blue-700"
          nextClassName="px-2 py-1 rounded-full border hover:bg-blue-200 hover:text-blue-700"
          breakClassName="px-2 py-1"
        />
  )
}

export default Pagination