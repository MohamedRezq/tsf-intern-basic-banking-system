import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const Layout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  );
};

export default Layout;
