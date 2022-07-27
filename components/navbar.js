import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
        return (

                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark justify-content-center">
                        <div className="container mx-auto">
                                <div className="grid grid-cols-3 flex items-center justify-between">
                                        <div className="justify-left">
                                                <Image src='/logo.png' alt='logo' height={150} width={150} />
                                        </div>
                                        <a className="navbar-brand justify-center" href="" id="sitename">
                                                <Logo />
                                        </a>
                                </div>
                        </div>

                </nav>
        )
}

const Logo = () => {
        return (
                <Image src='/logo_name.png' alt='logo_name' height={100} width={450}/>
        )
}
export default Navbar;