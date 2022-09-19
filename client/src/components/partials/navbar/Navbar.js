import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import logoSVG from "../../../assets/imgs/logo/logo4.svg";
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    style={{ backgroundColor: "rgb(246, 227, 202)" }}
                    position="fixed"
                >
                    <div className="mx-4 my-3"><img className="w-96" src={logoSVG} alt="2 Your CREDIT"></img></div>
                    {!props.devToggleStatus && (
                        <h1 className=" bg-slate-200 bg-opacity-75 text-center font-extrabold text-red-500">
                            [Under Utvikling / Under development]
                        </h1>
                    )}
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;
