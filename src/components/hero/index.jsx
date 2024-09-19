import { Box, Grid, Icon, Typography } from "@mui/material";
import { PlayArrow as PlayArrowIcon } from "@mui/icons-material";

export default function HeroLayout() {
  return (
    <Grid
      container
      sx={{
        background: "#fff",
        width: "100%",
        padding: "70px 103px 0 103px",
        position: "relative", 
      }}
    >
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: "100%", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative", 
        }}
      >
        <Typography
          sx={{
            fontSize: "62px",
            color: "#333",
            fontWeight: "bold",
            lineHeight:1
          }}
        >
          Perfect
        </Typography>
        <Typography sx={{ fontSize: "62px", color: "#333", fontWeight: "bold" , lineHeight:1 }}>
          Harmony:
        </Typography>
        <Typography sx={{ fontSize: "62px", color: "#333", fontWeight: "bold" , lineHeight:1 }}>
          Comfort & Style
        </Typography>
        <Typography sx={{ fontSize: "18.5px", color: "#999", fontWeight: "100" }}>
          Explore furniture that harmoniously combines comfort and style to
          elevate your home
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
          <Box
            sx={{
              border: "1px solid",
              padding: "10px 15px",
              borderRadius: "25px",
            }}
          >
            <Typography sx={{ fontSize: "14px", color: "#333" }}>
              Explore Our Offers
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                padding: "3px",
                boxShadow: 3,
                borderRadius: "99px",
                marginRight: "10px",
              }}
            >
              <Icon
                component={PlayArrowIcon}
                sx={{
                  fontSize: "20px",
                  color: "#000",
                  fontWeight: "bold",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#333",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              Watch Video
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Right Section (Image) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          position: "relative",
          backgroundImage:
            'url("https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "415px",
          borderRadius: "45px",
        }}
      >
      
       
      </Grid>

      <Box
          sx={{
            position: "absolute",
            bottom: "-36px", 
            left: "20px", 
            backgroundColor: "#fff",
            padding: "20px",
            height: "72px" ,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
          }}
        >
          <Typography sx={{ fontSize: "20px", color: "#333" }}>
            Stacked Box Content sdasdawsd asd asd asd asdasdas đá asd asd asd asd asd ád
          </Typography>
        </Box>
    </Grid>
  );
}
