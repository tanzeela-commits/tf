import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DotMenu from "./menu/menu";

// MUI Components
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
// icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlagIcon from "@mui/icons-material/Flag";
import { Box, Button, Grid } from "@mui/material";
import axios from "axios";
import jwt_decode from "jwt-decode";
export default function PostCard({ post }) {
  const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [qualification, setQualification] = useState("");
  const [userimg, setuserimg] = useState("");
  const [dob, setDob] = useState();
  useEffect(() => {
    const token = window.localStorage.getItem("JWTtoken");
    var { _doc } = jwt_decode(token);
    console.log({ _doc });
    setName(_doc.name);
    setphoneno(_doc.phoneno);
    setEmail(_doc.email);
    setAddress(_doc.address);
    setCity(_doc.city);
    setQualification(_doc.qualification);
    setuserimg(_doc.userimg);
    setDob(dob);
    // moment().format("MMMM Do YYYY, h:mm:ss a");
  }, []);
  const router = useRouter();
  const token = window.localStorage.getItem("JWTtoken");
  var { _doc } = jwt_decode(token);
  const {
    img,
    jobname,
    salary,
    shoploc,
    shopname,
    timing,
    user_id,
    user_email,
    username,
    workersReq,
    liked,
    description,
    receiverEmail,
    age,
    experience,
    userpic,
  } = post;
  async function applyjob() {
    try {
      const check = await axios.post(
        "https://bbuttshopjob.herokuapp.com/applyjob",
        //  {"receiverEmail": "abc13@gmail.com",},
        // post,
        { receiverEmail, name, email, address, qualification, dob, city, phoneno },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(check);
      alert("Apply successfully");
      // router.push(`/my_posts`)
      // navigate("/session-timed-out");
      // console.log(sendForm);
    } catch (error) {
      console.log("Error", error);
    }
  }

  // console.log("POST", post);/
  return (
    <Card
      sx={{
        boxShadow: "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
        background: "accent.default",
      }}
    >
      <CardHeader
        avatar={
          userpic ? (
            <Avatar
              sx={{ bgcolor: "primary" }}
              aria-label="user-Pic"
              src={`https://bbuttshopjob.herokuapp.com/${userpic}`}
              alt={username}
            />
          ) : (
            <Avatar sx={{ bgcolor: "primary" }} aria-label="profile pic">
              username[0]
            </Avatar>
          )
        }
        // action={<DotMenu options={[{ label: "Report", icon: <FlagIcon /> }]} />}
        title={username}
        subheader={receiverEmail}
        // subheader1={user_email}
      />
      <CardContent>
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Shop Name:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                {shopname}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Job:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                {jobname}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Location:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                {shoploc}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Salary offer:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                {salary}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Timings:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                {timing}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Experience:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                {experience}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Age required:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                {age}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Workers required:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                {workersReq}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
            Description:
          </Typography>
          <Typography variant="body2" color="primary.dark">
            {description}
          </Typography>
        </Box>
      </CardContent>

      <CardMedia
        component="img"
        height="254"
        image={`https://bbuttshopjob.herokuapp.com/${post.postimg}`}
        alt={shopname}
      />

      <CardActions disableSpacing>
        <Button
          sx={{
            ml: "auto",
            py: 1,
            px: 4,
            color: "accent.default",
            background: "rgba(222, 121, 64, 0.2)",
            "&:hover": {
              background: "rgba(222, 121, 64, 0.3)",
            },
          }}
          onClick={applyjob}
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}
