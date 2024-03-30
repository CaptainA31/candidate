import React from "react";

import Header from "../components/Header";
import Home from "../components/home";
import Sidenav from "../components/sidenav";
import '../styles/candidateHome.css'

export default function candidateHome() {
  return (
    <>
        <Header />
        <Sidenav />
        <Home />
    </>
  )
}
