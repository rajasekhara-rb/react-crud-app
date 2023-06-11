import React from "react";
import { BsDiscord } from "react-icons/bs";
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from "reactstrap";


const NavbarMain = () => {
    return (
        <>

            <Navbar
                className="my-0"
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    <Link to={"/"}>
                        <BsDiscord />
                        <span className="m-1">Users Data</span>
                    </Link>
                </NavbarBrand>
            </Navbar>
        </>
    )
}

export default NavbarMain;