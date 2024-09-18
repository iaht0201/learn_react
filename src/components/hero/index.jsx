import { Box, Grid, Icon, Typography } from "@mui/material";
import { PlayArrow as PlayArrowIcon } from "@mui/icons-material";

export default function HeroLayout() {
  return (
    <Grid
      container
      sx={{
        background: "#fff",
        height: "684px",
        width: "100%",
        padding: "70px 103px 0 103px"
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: "372px",
          //   padding: "50px 20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start"
          //   background: "red"
        }}
      >
        <Typography
          sx={{
            fontSize: "64px",
            color: "#333",
            fontWeight: "bold"
          }}
        >
          Perfect
        </Typography>
        <Typography
          sx={{ fontSize: "62px", color: "#333", fontWeight: "bold" }}
        >
          Harmony:
        </Typography>
        <Typography
          sx={{ fontSize: "64px", color: "#333", fontWeight: "bold" }}
        >
          Comfort & Style
        </Typography>
        <Typography
          sx={{ fontSize: "18.5px", color: "#999", fontWeight: "100" }}
        >
          Explore furniture that harmoniously combines comfort and style to
          elevate your home
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center" // Center items vertically
          }}
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
              background: "red",
              display: "flex",
              alignItems: "center", // Center items vertically within this box
              marginLeft: "10px" // Add margin to space out from the previous box
            }}
          >
            <Box
              sx={{
                display: "flex",
                padding: "3px",
                boxShadow: 3,
                borderRadius: "99px",
                marginRight: "10px"
              }}
            >
              <Icon
                component={PlayArrowIcon}
                sx={{
                  fontSize: "20px",
                  color: "#000",
                  fontWeight: "bold"
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#333",
                height: "100%",
                alignItems: "center"
              }}
            >
              Watch Video
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage:
            'url("https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg")',
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "415px",
          width: "627px",
          borderRadius: "45px"
        }}
      />
    </Grid>
  );
}
