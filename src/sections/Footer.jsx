import { Divider, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../assets/Screenshot (4).png";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#334155", color: "#ffffff", p: 10 }}>
      <Grid container spacing={10}>
        <Grid item md={2}>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "90px",
              paddingTop: "20px",
            }}
          />
          <Typography sx={{ mb: 1 }} variant="subtitle2">
            © 2023 Ful, Inc.
          </Typography>
          <Typography sx={{ mb: 1 }}>All rights reserved</Typography>
          <Typography sx={{ mb: 1 }}></Typography>
        </Grid>
        <Grid item md={2}>
          <Typography sx={{ mb: 1 }} variant="h6">
            Features
          </Typography>
          <Divider sx={{ background: "#ffffff", mt: 1, mb: 1 }} />
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Check Domain
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Email Verification
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Zone Files Downloads
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Category Search
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Techonology Search
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography sx={{ mb: 1 }} variant="h6">
            Top Technology Reports
          </Typography>
          <Divider sx={{ background: "#ffffff", mt: 1, mb: 1 }} />
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Websites using Nginx
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Websites using JQuery
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Websites using MySQL
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Websites using Shopify
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Websites using WooCommerce
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography sx={{ mb: 1 }} variant="h6">
            More to know
          </Typography>
          <Divider sx={{ background: "#ffffff", mt: 1, mb: 1 }} />
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Feature Comparisons
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Pricing
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Careers
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Terms of Use
          </Typography>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            About Us
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h6">Contact</Typography>
          <Divider sx={{ background: "#ffffff", mt: 1, mb: 1 }} />
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <EmailIcon />
            <Typography>support@ful.io</Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <CallIcon />
            <Typography>+1 343 303 6668</Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <LocationOnIcon />
            <Typography>
              Ful,Inc. <br />
              1207 Delaware Ave <br /> #343 Wilmington, DE19806
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
