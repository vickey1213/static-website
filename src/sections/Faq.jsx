import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Grid } from "@mui/material";
import faq from "../assets/kitty-faq.png";

export const Faq = () => {
  return (
    <Box sx={{ width: "1200px", m: "auto", p: 4 }}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "700", mb: 4, textAlign: "center" }}
          >
            Frequenty Asked Questions
          </Typography>
          <Accordion sx={{ p: "30px", mb: "30px", w: "40px", h: "20px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How much will this cost?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We offer free and paid plans. Our paid plans start at $49/month
                or $499/year.We also offer enterprise plans for others building
                on our technology.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ p: "30px", mb: "30px", w: "40px", h: "20px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What information do we provide?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our technology reports come with metadata, including phone
                numbers, emails, IPs, DNS information, hostname, titles, and
                much more!
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ p: "30px", mb: "30px", w: "40px", h: "20px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How do you collect your information?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our server cluster crawls thousands of sources daily to find
                active domains. We then segment active domains using our
                repository of 3000+ technology footprints. We also deploy our
                crawlers to enrich this segmented technographic data with
                additional metadata. All our lists are updated daily.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ p: "30px", mb: "30px", w: "40px", h: "20px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Can I upload domain lists?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Can I upload domain lists? Yes! All accounts come preloaded with
                credits to get segmentation and other data for your custom
                domain lists. We also baked in a "Deep Search" engine to obtain
                hard-to-find contact information from domains.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={6}>
          <img src={faq} alt="faq" style={{ width: "650px" }} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Faq;
