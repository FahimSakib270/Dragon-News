import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import NavBar from "../Components/NavBar";

const HomeLayOut = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <NavBar></NavBar>
        </nav>
      </header>
      <main>
        <section className="left-nev"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right-nev"></section>
      </main>
    </div>
  );
};

export default HomeLayOut;
