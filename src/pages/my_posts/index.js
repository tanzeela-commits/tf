import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Layout } from "../../components/layout";
import Post from "../../views/MyPost/Post";
import MyMeeting from "../../views/MyPost/MyPost";
const Page = () => (
  <>
    <Head>
      <title>ShopJOB | My Posts</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {[1].map((item) => {
            return (
              <Grid item key={item} xs={12} md={6} lg={4} sx={{ alignItems: "start" }}>
                <Post />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
