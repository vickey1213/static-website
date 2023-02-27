import React from "react";
import { Card, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import chris from "../assets/chris.png";
import mad from "../assets/madsingers.webp";
import nicholas from "../assets/nicholas.webp";
import robert from "../assets/robert.webp";
import toddd from "../assets/todd.webp";
import yana from "../assets/yana.jpg";
import { Stack } from "@mui/system";

const Testimonials = () => {
  return (
    <Box sx={{ mb: 10 }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "800", mb: 6 }}
      >
        Testimonials
      </Typography>
      <Card
        sx={{
          maxWidth: "1200px",
          m: "auto",
          p: 3,
        }}
      >
        <Grid container spacing={10}>
          <Grid item md={4}>
            <Stack direction="row" alignItems="start" spacing={2}>
              <img
                src={toddd}
                alt="todd"
                style={{ width: "50px", height: "50px", borderRadius: "100%" }}
              />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Todd Dunsmore
                </Typography>
                <Typography variant="subtitle2">
                  Doja Marketing/Defi Founder
                </Typography>

                <Typography variant="body2" sx={{ mt: 2 }}>
                  "These web technologies quickly became a game-changer for our
                  business. Lead generation projects that used to take a whole
                  team are completely automatic now. We were able to segment
                  traffic based on location, identify more prospects, and
                  onboard more clients. I can't say enough good things about
                  Ful.io."
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack direction="row" alignItems="start" spacing={2}>
              <img
                src={nicholas}
                alt="nicholas"
                style={{ width: "50px", height: "50px", borderRadius: "100%" }}
              />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Todd Dunsmore
                </Typography>
                <Typography variant="subtitle2">Nicholas Altimore</Typography>

                <Typography variant="body2" sx={{ mt: 2 }}>
                  "Companies need an edge, and Ful.io provided that edge for us.
                  We'd previously used BuiltWith, but the data and analytics
                  capabilities of Ful.io were a better fit for us."
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack direction="row" alignItems="start" spacing={2}>
              <img
                src={chris}
                alt="nicholas"
                style={{ width: "50px", height: "50px", borderRadius: "100%" }}
              />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Utterly Digital
                </Typography>
                <Typography variant="subtitle2">Sirlinksalot</Typography>

                <Typography variant="body2" sx={{ mt: 2 }}>
                  "We used to manually upload contact details and other data,
                  but it took way too long. We needed a solution that could
                  automate the process and free up resources. Ful.io just works
                  for us. Their technology is incredible."
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack direction="row" alignItems="start" spacing={2}>
              <img
                src={robert}
                alt="robert"
                style={{ width: "50px", height: "50px", borderRadius: "100%" }}
              />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Robert Kaene
                </Typography>
                <Typography variant="subtitle2">The Wednesday Club</Typography>

                <Typography variant="body2" sx={{ mt: 2 }}>
                  "Ful.io's apps and tools have completely changed the way we
                  look at traffic and identify prospects. Before, our R&D team
                  tried BuiltWith, then worked to develop our own technology.
                  But with Ful.io, we can save both time and money."
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack direction="row" alignItems="start" spacing={2}>
              <img
                src={mad}
                alt="mad"
                style={{ width: "50px", height: "50px", borderRadius: "100%" }}
              />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Mad Singers
                </Typography>
                <Typography variant="subtitle2">SEO Mastery Summit</Typography>

                <Typography variant="body2" sx={{ mt: 2 }}>
                  "We're always looking for new ways to boost our advertising
                  efforts and analyze websites to improve our processes. Ful.io
                  has been a perfect partner throughout. We've been able to
                  discover more valuable data on prospects than we ever did on
                  our own."
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack direction="row" alignItems="start" spacing={2}>
              <img
                src={yana}
                alt="yana"
                style={{ width: "50px", height: "50px", borderRadius: "100%" }}
              />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Yana L
                </Typography>
                <Typography variant="subtitle2">SEO Consultant</Typography>

                <Typography variant="body2" sx={{ mt: 2 }}>
                  "Any ecommerce platform not using Ful.io's technologies is
                  seriously missing out. The crawling tool at Ful.io is the best
                  we've used so far. We love that you can pull it up right in
                  the Chrome browser too. Location, contact info, RSS, the speed
                  we can draw in new clients now... Ful.io is amazing."
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Testimonials;
