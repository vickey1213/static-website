import React from "react";
import ap from "../assets/AP-new1.png";
import b2c from "../assets/B2C-Logo-2.png";
import coin from "../assets/coinmarket-2.png";
import market from "../assets/New-Market1.png";
import yahoo from "../assets/New-Yahoo1.png";
import reader from "../assets/Readers-02.png";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";

const Brands = () => {
  return (
    <Box sx={{ width: "1200px", m: "auto" }}>
      <Stack direction="row" spacing={8}>
        <img
          src={coin}
          alt="coinmarket"
          style={{ width: "12%", aspectRatio: 3 / 2, objectFit: "contain" }}
        />
        <img
          src={market}
          alt="marketwatch"
          style={{ width: "12%", aspectRatio: 3 / 2, objectFit: "contain" }}
        />
        <img
          src={yahoo}
          alt="yahoo"
          style={{ width: "12%", aspectRatio: 3 / 2, objectFit: "contain" }}
        />
        <img
          src={b2c}
          alt="b2c"
          style={{ width: "12%", aspectRatio: 3 / 2, objectFit: "contain" }}
        />
        <img
          src={ap}
          alt="appnews"
          style={{ width: "12%", aspectRatio: 3 / 2, objectFit: "contain" }}
        />
        <img
          src={reader}
          alt="reader"
          style={{ width: "12%", aspectRatio: 3 / 2, objectFit: "contain" }}
        />
      </Stack>
    </Box>
  );
};

export default Brands;
