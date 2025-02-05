import { Box, styled, Typography } from "@mui/material";
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <BoxFooter>
        <Typography className="footertext">
          © 2024 Your Company. All Rights Reserved.
        </Typography>
      </BoxFooter>
    );
  }
}

export default Footer;

const BoxFooter = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "30px",
  backgroundColor: "#1c1a7a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  fontSize: "16px",
  fontWeight: "bold",

  [theme.breakpoints.down("sm")]: {
    height: "20px",
    fontSize: "14px",
    padding: "5px",
  },

  "& .footertext": {
    color: "white",
  },
}));
