import Head from "next/head";

import Avatar from "@mui/material/Avatar";
import { Box, Card, CardContent, Container, Grid } from "@mui/material";

// custom imports
import { Layout } from "../../components/layout";
import EditForm from "../../views/profile/editform";

const Page = () => (
  <>
    <Head>
      <title>Products | ShopJOB</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
         {/* <Card sx={{ p: 4 }}> */}
         {/* <Box
            sx={{
              minHeight: "40vh",
              position: "relative",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
              backgroundPosition: "top left",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          > */}
            {/* <Avatar
              sx={{
                height: 120,
                width: 120,
                position: "absolute",
                bottom: 0,
                left: { xs: "50%", sm: "10%", md: "5%", lg: "3%", xl: "2%" },
                transform: {
                  xs: "translate(-50%,50%)",
                  md: "translate(-30%,50%)",
                  lg: "translate(0%,50%)",
                },
              }}
            >
              H
            </Avatar> */}
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          {/* </Box> */}
          <CardContent>
            <Box sx={{ mt: 12 }}>
              <EditForm />
            </Box>
          </CardContent>
        {/* </Card>//</Box> */}
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
