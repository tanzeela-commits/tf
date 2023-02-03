import React, { useState, useEffect } from "react";
import { Axios } from "axios";
import Head from "next/head";

// import { Pages } from "@mui/icons-material";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
// Icons
import CloseIcon from "@mui/icons-material/Close";
// Custom Imports
import { Layout } from "../../components/layout";
import Post from "../../views/jobs/post";
import Filters from "../../views/jobs/filters";
// import Apply from "../../views/jobs/Apply";
function Page() {
  const [jobs, setJobs] = useState([]);
  const [nonChangejobs, setNonChangejobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const JWTtoken = window.localStorage.getItem("JWTtoken");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  
  async function getAllPosts() {
    try {
      const response = await fetch("http://localhost:5000/posts", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: new Headers({
          Authorization: "Bearer " + JWTtoken,
          "Content-Type": "application/json",
        }),
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });
      if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        console.log("DATA", data);
        setJobs(data.AllPosts);
        setNonChangejobs(data.AllPosts);
        setLoading(false);
        const cat = [
          ...new Set(
            data.AllPosts.map((job) => {
              return job.jobname;
              // return job.shopname;
            })
          ),
        ];
        setCategories(cat);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllPosts();
  }, []);

  function handleCategoryChange(e) {
    setCategoryFilter(e.target.value);
    const newPosts = nonChangejobs.filter((job) => {
      return job.jobname === e.target.value;
    });
    setJobs(newPosts);
  }
  function handleLocationChange(e) {
    setLocationFilter(e.target.value);

    const newPosts = nonChangejobs.filter((job) => {
      const locationName = job.shoploc.toLowerCase();
      const queryString = e.target.value.toLowerCase();
      return locationName.includes(queryString);
    });
    setJobs(newPosts);
  }

  function clearFilter() {
    setLocationFilter("");
    setCategoryFilter("");
    setJobs(nonChangejobs);
  }

  return (
    <>
      <Head>
        <title>ShopJOB | Find Jobs</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          {loading ? (
            <Box
              sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Filters
                  categories={categories}
                  categoryFilter={categoryFilter}
                  handleCategoryChange={handleCategoryChange}
                  clearFilter={clearFilter}
                  location={locationFilter}
                  handleLocationChange={handleLocationChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {loading ? (
                    <Grid item xs={12}>
                      <CircularProgress />
                    </Grid>
                  ) : (
                    jobs.map((job) => {
                      const { _id } = job;
                      return (
                        <Grid key={_id} item xs={12} md={6} lg={4} sx={{ alignItems: "start" }}>
                          <Post post={job} />
                        </Grid>
                      );
                    })
                  )}
                </Grid>
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <Layout>{page}</Layout>;
export default Page;
