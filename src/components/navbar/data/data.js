import {
  LocalPhone as LocalPhoneIcon,
  Mail as MailIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon
} from "@mui/icons-material";
export const navbarJson = {
  headerLeft: [
    {
      image: LocalPhoneIcon,
      title: "+888888888"
    },
    {
      image: MailIcon,
      title: "klrt0120@gmail.com"
    }
  ],
  headerRight: [
    {
      image: InstagramIcon,
      url: "https://mui.com/material-ui/material-icons/?query=instagram&selected=Instagram"
    },
    {
      image: FacebookIcon,
      url: "+888888888"
    },
    {
      image: TwitterIcon,
      url: "+888888888"
    },
    {
      image: LinkedInIcon,
      url: "klrt0120@gmail.com"
    }
  ],
  bottomNavbar: [
    {
      name: "Home",
      route: "#home",
      type: "item"
    },
    {
      name: "About",
      route: "#about",
      type: "item"
    },
    {
      name: "Furniture",
      type: "list",
      child: [
        {
          name: "Living Room",
          route: "#livingroom",
          type: "item"
        },
        {
          name: "BedRoom Room",
          route: "#livingroom",
          type: "item"
        }
      ]
    },
    {
      name: "Car Catalogue",
      route: "#car_catalogue",
      type: "item"
    },
    {
      name: "FAQ",
      route: "#faq",
      type: "item"
    }
  ]
};
