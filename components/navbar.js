import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
        return (
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary justify-content-center">
                        <a className="navbar-brand" href="" id="sitename">
                                <Logo className="logo"/>
                        </a>
                </nav>
        )
}

const Logo = () => {
        return (
                <h2>
                        Timatri
                </h2> 
        )
}
export default Navbar;