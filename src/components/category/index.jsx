import { Box, Button, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import { catoryJson } from "./data/data";

export default function CategorySection() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Box sx={{ width: "calc(100% - 200px)", margin: "40px auto" }}>
      <Slider {...settings}>
        {catoryJson.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "white"
            }}
          >
            <Box
              sx={{
                background: "#EDEDED",
                margin: "10px",
                borderRadius: "25px",
                padding: "15px"
              }}
            >
              <Grid container columnSpacing={2}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Typography
                    sx={{
                      color: "#121212",
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginBottom: "10px"
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      textTransform: "none",
                      borderColor: "transparent",
                      color: "#F5993C",
                      background: "#fff",
                      borderRadius: "15px",
                      padding: " 0 30px",
                      height: "10px",
                      boxShadow: 3,
                      "&:hover": {
                        border: "none",
                        color: "#fff",
                        background: "#F5993C"
                      },
                      "&:focus": {
                        outline: "none" // Loại bỏ outline khi focus
                      }
                    }}
                  >
                    See more
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={`${item.image}?h=120&fit=crop&auto=format`}
                    alt={item.title}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
