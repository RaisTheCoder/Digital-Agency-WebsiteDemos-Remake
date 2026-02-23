import React from "react";
import { Outlet } from "react-router";

import Header from "../header/header";
import Footer from "../footer/footer";

const layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default layout;
