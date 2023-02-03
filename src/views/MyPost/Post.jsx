import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Grid, Stack } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
// import Box from "@mui/material/Box";/
import Modal from "@mui/material/Modal";
// import Typography from "@mui/material/Typography";
// import {useParams} from 'react-router-dom'
import { useRouter } from "next/router";
import axios from "axios";
// import Index from '../../pages/Update/index'
import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  // Grid,
  // Button,
  // Stack,
} from "@mui/material";
const Post = ({handleClose}) => {
  const [jobname, setjobname] = useState("");
  const [shopname, setshopname] = useState("");
  const [shoploc, setshoploc] = useState("");
  const [workersReq, setworkersReq] = useState("");
  const [salary, setsalary] = useState("");
  const [timing, settiming] = useState("");
  const [postimg, setpostimg] = useState("");
  // console.log(postimg)
  const [age, setage] = useState("");
  const [experience, setexperience] = useState("");
  const [description, setdescription] = useState("");
  // const JWTtoken = window.localStorage.getItem("JWTtoken");/
  const formData = new FormData()
  formData.append("postimg",postimg)
  formData.append("jobname",jobname)
  formData.append("shopname",shopname)
  formData.append("shoploc",shoploc)
  formData.append("workersReq",workersReq)
  formData.append("salary",salary)
  formData.append("timing",timing)
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    width: "85%",
    maxWidth: "1020px",
    overflowY: "auto",
    boxShadow: 24,
    borderRadius: 1,
    p: 4,
  };
  const [showModal, setShowModal] = useState(false);
 async function openModal() {
    setShowModal(true);
}
async function update() {
  // if(!postimg||!jobname||!shopname||!shoploc||!workersReq||!salary||!timing)
  // {
  //   alert("please fill the fields")
  // }
  // else{
  //   alert("record updated successfully")
  //   router.push(`/jobs`)
  // }
  try {
    const check = await axios.put(
      `http://localhost:5000/post/63c1d744ac421a216d8ef7d7`,
   formData,
   config,
      );
      console.log(check)
    // navigate("/session-timed-out");
    // console.log(sendForm);
  } catch (error) {
    console.log("Error", error);
  }
}
  const router = useRouter()
  // const {id} = useParams()
  const JWTtoken = window.localStorage.getItem("JWTtoken");
  const config = {
    headers: {
      Authorization: `Bearer ${JWTtoken}`,
    },
  };
  const [dataa,setDataa] = useState('')
 
  const deleteuser = (id) => {

    axios

      .delete(`http://localhost:5000/post/${id}`,config)

      .then(response => {
        setDataa(response.data.id)
        console.log("deleted successfully!")
        alert("deleted successfully!")

      })

  }
  useEffect(() => {
    getData()
  }, [deleteuser]);

  const [data, setData] = useState([]);
  function getData() {
    axios.get("http://localhost:5000/myposts", config).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((eachdata) => {
        return (
          <>
       

            <Card
              sx={{
                px: 2,
                border: "0.5px solid",
                borderColor: (theme) => theme.palette.action.focus,
                boxShadow: (theme) => theme.shadows[0],
              }}
              >
        
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={
                  <Typography variant="h5" sx={{ color: "primary.dark", fontWeight: 700 }}>
                    Title of the Post:{eachdata.jobname}
                  </Typography>
                }
                subheader="September 14, 2016"
              />

              <CardContent>
                <Stack spacing={1}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>Job:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ color: "primary.dark" }}>{eachdata.shopname}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>
                        Location:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ color: "primary.dark" }}>{eachdata.shoploc}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>
                        Salary Offer:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ color: "primary.dark" }}>{eachdata.salary}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>
                        Timings
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ color: "primary.dark" }}>{eachdata.timing}</Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </CardContent>
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>
                      Description:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ color: "primary.dark" }}>
                     {eachdata.description}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardMedia>
                <Box
                  sx={{
                    borderRadius: 1,
                    overflow: "hidden",
                  }}
                >
                  {/* <div>{eachdata.postimg}</div> */}
                  {/* <img
                    style={{ maxWidth: "100%", minHeight: "100%" }}
                    src={`http://localhost:5000/${eachdata.postimg}`}
                  /> */}
                  <CardMedia
        component="img"
        height="254"
        image={
         `http://localhost:5000/${eachdata.postimg}`
        }
        alt={shopname}
      />
                </Box>
              </CardMedia>
              <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button sx={{ textTransform: "uppercase" }}>applications</Button>
                <Button sx={{ textTransform: "uppercase" }} onClick={()=>router.push(`/Update/${eachdata._id}`)}>Update</Button>
               
               <Button sx={{ textTransform: "uppercase" }} onClick={()=>deleteuser(eachdata._id)}>Delete</Button>
              </CardActions>
            </Card>
          </>
        );
      })}
    </>
  );
};
export default Post;
