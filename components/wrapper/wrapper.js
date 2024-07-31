"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import Nav from '@/components/Nav';
import ErrorDisplay from "../ErrorDisplay";

const Wrapper = ({ children }) => {
  return (

    <>
      <Provider store={store}>
        {Nav()}
        {children}
        <ErrorDisplay/>
        <ToastContainer />
      </Provider>
    </>
    
  );
};

export default Wrapper;
