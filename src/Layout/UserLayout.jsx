/*import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../Pages/UserLayout/Header";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
export default UserLayout*/


import { Outlet } from "react-router-dom";
import Header from "../Pages/UserLayout/Header";

const UserLayout = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
