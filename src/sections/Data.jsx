import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import kitty from "../assets/kitty.png";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import kitty2 from "../assets/kittyironman.png";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import kitty3 from "../assets/kittywithpost.png";
import EmailIcon from "@mui/icons-material/Email";
import kitty4 from "../assets/kittyconveyerbelt.png";

const Data = () => {
  return (
    <Grid container spacing={2} sx={{p:"30px 20px 0px 100px"}}>
      <Grid item sm={6}>
        <img src={kitty} alt="kitty" style={{ width: "450px" }} />
      </Grid>
      <Grid item sm={6}>
        <Typography
          variant="h4"
          sx={{ textAlign: "start", color: "blue", pb: "30px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chart-pie"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"></path>
            <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"></path>
          </svg>
         Data Enrichment
        </Typography>
        <Typography variant="h5" component="h6">
          Our data is available for all your general purpose tools
        </Typography>
        <Typography variant="subtitle1">
          Import your website list and our technology stack will do all the
          heavy lifting, pulling contact information that would take weeks or
          months to gather with traditional market research methods. Our tools
          and technologies crawl and scan websites completely autonomously.
        </Typography>
        <Typography variant="subtitle1">Key Highlights:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Website lookup capabilities and technology comparable to the best in
          the industry.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Generate high quality leads with our technology reports.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Identify technographic segmentation.
        </Typography>
      </Grid>

      <Grid item sm={6}>
        <Typography
          variant="h4"
          sx={{ textAlign: "start", color: "blue", pb: "30px" }}
        >
          <PrivacyTipIcon /> Security Reconnaissance
        </Typography>
        <Typography variant="h5" component="h6">
          Your security is our top priority.
        </Typography>
        <Typography variant="subtitle1">
          Security professionals worldwide use our web technologies. This
          solution helps you track security threats on your website. The
          technology also provides you with detailed information on
          vulnerabilities and exploitation risks.
        </Typography>
        <Typography variant="subtitle1">Key Highlights:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Website lookup capabilities and technology comparable to the best in
          the industry.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Effectively assess the depth of technology penetration.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Identify bugs and the impact of patches.
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <img src={kitty2} alt="kitty" style={{ width: "450px" }} />
      </Grid>

      <Grid item sm={6}>
        <img src={kitty3} alt="kitty" style={{ width: "450px" }} />
      </Grid>
      <Grid item sm={6}>
        <Typography
          variant="h4"
          sx={{ textAlign: "start", color: "blue", pb: "30px" }}
        >
          <EmailIcon />
          Email Verification
        </Typography>
        <Typography variant="h5" component="h6">
          Never worry about non-delivery of your emails
        </Typography>
        <Typography variant="subtitle1">
          Our email extension technology verifies deliverability and checks the
          server connection to ensure that your email delivery rate remains
          high, keeping you off the contact blocklist. Our technologies allow us
          to do all of this without having to send an email to the contact.
        </Typography>
        <Typography variant="subtitle1">Key Highlights:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Get immediate results and a responsive, intuitive UX with our
          technology.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Start with 100 free email verifications every month.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Top up email verification credits on the go.
        </Typography>
      </Grid>

      <Grid item sm={6}>
        <Typography
          variant="h4"
          sx={{ textAlign: "start", color: "blue", pb: "30px" ,}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-api-app"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5"></path>
            <path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5"></path>
            <path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5"></path>
            <path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5"></path>
          </svg>
          APIs
        </Typography>
        <Typography variant="h5" component="h6">
          Get unlimited access to our APIs
        </Typography>
        <Typography variant="subtitle1">
        With Ful.io APIs, you have access to any technology stack, contact details, relevant social handles, and much more. Much like BuiltWith, our technology lets you analyze many websites at once, track data on technology usage, and even build your own analytics dataset.


        </Typography>
        <Typography variant="subtitle1">Key Highlights:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Get results right away and update your datasets in real-time.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Our technologies let you easily analyze multiple websites at once.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <DoneAllIcon sx={{ color: "green", mr: 2 }} />
          Take advantage of a free trial before signing up.


        </Typography>
      </Grid>
      <Grid item sm={6}>
        <img src={kitty4} alt="kitty" style={{ width: "450px" }} />
      </Grid>
    </Grid>
  );
};

export default Data;
