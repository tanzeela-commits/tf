import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// mui imports
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { Layout } from "../components/layout";
import { Logo } from "../components/logo";
import banner from "../images/bannerImg.jpg";
import LoginFormModal from "../views/loginForm/LoginFormModel";

const rightSideStyles = (isSmallScreen) => {
  return {
    minHeight: "100vh",
    padding: "32px",
    background: `url(${banner.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    "&:after": {
      content: `""`,
      position: "absolute",
      inset: 0,
      backgroundColor: isSmallScreen ? "rgba(0,0,0,0.5)" : "rgba(196, 107, 57, 0.5)",
      zIndex: 6,
    },
  };
};

const Page = () => {
  const JWTtoken = window.localStorage.getItem("JWTtoken");
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  function openLogin() {
    setIsLoginFormOpen(true);
  }
  function closeLogin() {
    setIsLoginFormOpen(false);
  }

  function handleExplore() {
    if (JWTtoken) {
      router.push("/jobs");
      return;
    }
    openLogin();
  }
  return (
    <>
      <Head>
        <title>ShopJOB | Home</title>
      </Head>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // py: 8,
          minHeight: "100vh",
          overflowY: "hidden",
        }}
      >
        {lgUp ? (
          <Grid container sx={{ minHeight: "100vh" }}>
            <Grid item xs={6} sx={{ backgroundColor: "primary.main", minHeight: "100vh", p: 4 }}>
              <Box>
                <Logo invert />
              </Box>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h3" component="h1" sx={{ maxWidth: "650px" }}>
                  <Box component="span" sx={{ display: "block", color: "neutral.100" }}>
                    Defeat the unemployment.
                  </Box>
                  Let’s start finding the Jobs quickly and easily that suits to you and also near
                  you in just few clicks.{" "}
                </Typography>
                <Button
                  size="large"
                  sx={{
                    mt: 10,
                    backgroundColor: "neutral.100",
                    color: "primary.main",
                    fontWeight: 700,
                    border: "2px solid",
                    "&.MuiButton-root:hover": {
                      backgroundColor: "transparent",
                      color: "neutral.100",
                      borderColor: "neutral.100",
                    },
                  }}
                  onClick={handleExplore}
                >
                  Lets Explore
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6} sx={rightSideStyles}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  py: 2,
                  pr: 2,
                }}
              >
                {/* <Button variant="contained" sx={{ zIndex: 10, whiteSpace: "nowrap" }}>
                  Post Job
                </Button> */}
                <Button variant="text" sx={{ zIndex: 10 }} onClick={openLogin}>
                  Log in / sign up
                </Button>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <Grid item xs={12} sx={{ ...rightSideStyles(true), p: 1 }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  zIndex: 10,
                }}
              >
                <Logo color="neutral.100" size="small" />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    py: 2,
                    pr: 2,
                  }}
                >
                  {/* <Button variant="contained" sx={{ zIndex: 10, whiteSpace: "nowrap" }}>
                    Post Job
                  </Button> */}
                  <Button variant="text" sx={{ zIndex: 10 }} onClick={openLogin}>
                    Log in / sign up
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    maxWidth: "650px",
                    color: "neutral.400",
                    zIndex: 10,
                    fontSize: { xs: "1.3rem", sm: "2.23rem" },
                  }}
                >
                  <Box component="span" sx={{ display: "block", color: "neutral.50" }}>
                    Defeat the unemployment.
                  </Box>
                  Let’s start finding the Jobs quickly and easily that suits to you and also near
                  you in just few clicks.{" "}
                </Typography>
                <Button
                  size="medium"
                  sx={{
                    mt: 10,
                    backgroundColor: "neutral.100",
                    color: "primary.main",
                    fontWeight: 700,
                    border: "2px solid",
                    borderColor: "transparent",
                    zIndex: 10,
                    "&.MuiButton-root:hover": {
                      backgroundColor: "transparent",
                      color: "neutral.100",
                      borderColor: "neutral.100",
                    },
                  }}
                  onClick={handleExplore}
                >
                  Lets Explore
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
      <LoginFormModal open={isLoginFormOpen} handleClose={closeLogin} />
    </>
  );
};

// Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
