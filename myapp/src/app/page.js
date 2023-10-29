"use client";
import Form from "./components/Form.js";

import AboutUs from "./components/AboutUs";
import ImageGallery from "./components/ImageGallery";
import LandingPage from "./components/LandingPage";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store.js";
// import { useIsomorphicLayoutEffect } from 'next/compat';

// import Form from './Form'; // Update the path

export default function Page() {
  return (
    <>
      {/* <div className="bg-slate"></div> */}
      <LandingPage />
      <AboutUs />
      <Blogs />
      <Provider store={store}>
        <Form />
      </Provider>
      <ImageGallery />
      <Footer />
    </>
  );
}
