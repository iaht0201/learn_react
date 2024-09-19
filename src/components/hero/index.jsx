import { Box, Grid, Icon, Typography } from "@mui/material";
import { PlayArrow as PlayArrowIcon } from "@mui/icons-material";
import { heroData } from "./data/data";
import PropTypes from "prop-types";

function Brand({ title, style }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", ...style }}>
      <Typography sx={{ fontSize: "28px", color: "#999", fontWeight: "bold" }}>
        {title}
      </Typography>
    </Box>
  );
}

Brand.propTypes = {
  title: PropTypes.node.isRequired,
  style: PropTypes.object
};

export default function HeroLayout() {
  return (
    <Box
      sx={{
        background: "#fff",
        height: "625px",
        width: "100%",
        position: "relative"
      }}
    >
      <Grid
        container
        sx={{ height: "490px", padding: "70px 103px", position: "relative" }}
      >
        {/* Left Text Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {[heroData.title1, heroData.title2, heroData.title3].map(
            (title, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "62px",
                  color: "#333",
                  fontWeight: "bold",
                  lineHeight: 1.3
                }}
              >
                {title}
              </Typography>
            )
          )}
          <Typography
            sx={{ fontSize: "18.5px", color: "#999", fontWeight: "100" }}
          >
            {heroData.description}
          </Typography>
          <Box
            sx={{ display: "flex", marginTop: "20px", alignItems: "center" }}
          >
            <Box
              sx={{
                border: "1px solid",
                padding: "10px 15px",
                borderRadius: "25px"
              }}
            >
              <Typography sx={{ fontSize: "14px", color: "#333" }}>
                Explore Our Offers
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                marginLeft: "10px"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  padding: "3px",
                  boxShadow: 3,
                  borderRadius: "99px"
                }}
              >
                <Icon
                  component={PlayArrowIcon}
                  sx={{ fontSize: "20px", color: "#000" }}
                />
              </Box>
              <Typography sx={{ fontSize: "14px", color: "#333" }}>
                Watch Video
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Bottom Introduction Section */}
        <Box
          sx={{
            position: "absolute",
            background: "#fff",
            bottom: "-36px",
            maxWidth: "70vw",
            height: "72px",
            borderRadius: "80px",
            boxShadow: 2,
            padding: "0 40px",
            display: "flex",
            alignItems: "center"
          }}
        >
          {heroData.introduction.map((e, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginRight: "40px"
              }}
            >
              <Typography
                sx={{ fontSize: "14px", color: "#909090", fontWeight: "bold" }}
              >
                {e.title}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Icon
                  component={e.icon}
                  sx={{ fontSize: 20, color: "#F5993C", marginRight: "5px" }}
                />
                <Typography
                  sx={{ fontSize: "14px", color: "#999", fontWeight: "500" }}
                >
                  {e.description}
                </Typography>
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              border: "1px solid",
              padding: "12px",
              borderRadius: "25px",
              flexGrow: 1,
              minWidth: "100px",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Typography sx={{ fontSize: "14px", color: "#333" }}>
              See more
            </Typography>
          </Box>
        </Box>

        {/* Right Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundImage: `url("${heroData.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "415px",
            borderRadius: "45px"
          }}
        />
      </Grid>

      {/* Brand Section */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
      >
        {heroData.brand.map((brand, index) => (
          <Brand key={index} title={brand} style={{ marginLeft: "50px" }} />
        ))}
      </Box>
    </Box>
  );
}