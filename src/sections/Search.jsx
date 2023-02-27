import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Search = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundColor: "#7275e3",
          width: "300px",
          height: "300px",
          borderRadius: "2rem",
          transform: "rotate(45deg)",
          position: "absolute",
          top: "50%",
          left: "-15%",
        }}
      ></Box>
      <Stack direction="column" alignItems="center">
        <Card
          sx={{
            width: "500px",
            height: "30px",
            textAlign: "center",
            mb: "50px",
            padding: "4px 10px",
          }}
        >
          <Typography variant="body1">
            🎉 97563 new domains added on 24 February 2023{" "}
            <span style={{ color: "blue", marginLeft: "15px" }}>Read More</span>
          </Typography>
        </Card>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", fontSize: "35px", mt: "40px" }}
        >
          What Is The Web Built On?
        </Typography>

        <Typography
          variant="body2"
          component="h2"
          sx={{ p: "30px", textAlign: "center" }}
        >
          Uncover the technology stack behind any website. <br /> Use our tools
          for lead generation, market analysis and competitor research.
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ width: "800px", p: "30px" }}
        >
          <TextField
            id="outlined-basic"
            label="Enter URL for lookup "
            variant="outlined"
            size="small"
            fullWidth
          />
          <Button variant="contained">Search</Button>
        </Stack>
        <Typography variant="h6" component="h6" sx={{ p: "40px" }}>
          We periodically scan{" "}
          <span
            style={{
              background: "#a5b4fc",
              borderRadius: "5px",
              padding: "2px 10px",
            }}
          >
            211,829,571
          </span>{" "}
          websites and provide up-to-date information.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Search;
