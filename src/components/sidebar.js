import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { NavItem } from "./nav-item";
import { Logo } from "./logo";
import axios from "axios";

// mui imports
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";

// icons
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import WorkIcon from "@mui/icons-material/Work";
import PagesIcon from "@mui/icons-material/Pages";
import { Cog as CogIcon } from "../icons/cog";
import PersonIcon from "@mui/icons-material/Person";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useState } from "react";

export const Sidebar = (props) => {

const items = [
  {
    href: "/jobs",
    icon: <WorkIcon fontSize="small" />,
    title: "Find Jobs",
  },
  // {
  //   href: "/Update",
  
  // },
  
  {
    href: "/my_posts",
    icon: <PagesIcon fontSize="small" />,
    title: "My Posts",
  },
  {
    href: "/profile",
    icon: <PersonIcon fontSize="small" />,
    title: "Profile",
  },
  // {
  //   href: "/account",
  //   icon: <PermIdentityIcon fontSize="small" />,
  //   title: "Account",
  // },
  {
    href: "/settings",
    icon: <CogIcon fontSize="small" />,
    title: "Settings",
  },
  // {
  //   href: "/login",
  //   // icon: <LockIcon fontSize="small" />,
  //   // title: "Login",
  // },
  // {
  //   href: "/register",
  //   icon: <UserAddIcon fontSize="small" />,
  //   title: "Register",
  // },
  // {
  //   href: "/404",
  //   icon: <XCircleIcon fontSize="small" />,
  //   title: "Error",
  // },
];
// function getData() {
//   axios.get("http://localhost:5000/myposts", config).then((res) => {
//     console.log(res.data);
//     setData(res.data);
//   });
// }
// useEffect(() => {
//   getData();
// }, []);

  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
     
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ textAlign: "center", pt: 2 }}>
            <NextLink href="/" passHref>
              <a style={{ color: "#C46B39", textDecoration: "none" }}>
                <Logo color="primary.main" />
              </a>
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "action.focus",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "background.paper",
            color: "neutral.100",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "background.paper",
          color: "neutral.100",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
