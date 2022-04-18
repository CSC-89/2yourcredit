import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import logo from '../../../assets/imgs/logo/2yourcredit_logo_thumb.png'
import './Navbar.css'

const Navbar = (props) => {
    return(
        <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor: "rgb(0, 145, 255)"}} position="fixed">
        <Toolbar variant="dense">
          <img className="" src={logo} alt="logo"></img>
          {!props.devToggleStatus && <h1 className=" pt-5 px-10 font-extrabold text-red-500">
        [Under Utvikling]
      </h1>}
        </Toolbar>
      </AppBar>
    </Box>
        </>
    )
}

export default Navbar;