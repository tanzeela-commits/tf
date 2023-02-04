import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import LoginFormModal from "../../views/loginForm/LoginFormModel";
// mui imports
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import DateInput from "../../components/common/menu/dateInput";
import { bodyStreamToNodeStream } from "next/dist/server/body-streams";
import { Route } from "@mui/icons-material";
import axios from "axios";

const Register = () => {
  const router = useRouter();
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [qualification, setQualification] = useState("");
  const [dob, setDob] = useState("");
  const [userimg, setuserimg] = useState("");
  const formData = new FormData();
  formData.append("userimg", userimg);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("cpassword", cpassword);
  formData.append("city", city);
  formData.append("address", address);
  formData.append("phoneno", phoneno);
  formData.append("qualification", qualification);
  formData.append("dob", dob);

  async function register() {
    try {
      const check = await axios.post("https://bbuttshopjob.herokuapp.com/register", formData);
      console.log(check);
      alert("User Registered");
      setIsLoginFormOpen(true);
      // router.push(`/my_posts`)
      // navigate("/session-timed-out");
      // console.log(sendForm);
    } catch (error) {
      console.log("Error", error);
    }
  }

  // function handleRegister(e) {
  //   e.preventDefault();
  //   const body = {

  //     name,
  //     email,
  //     password,
  //     city,
  //     address,
  //     qualification,
  //     dob,
  //     phoneno: phoneNo,
  //     cpassword: confirmPassword,
  //   };
  //   register(body);
  // }
  return (
    <>
      <Head>
        <title>Register | ShopJOB</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <NextLink href="/" passHref>
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Back to Login
            </Button>
          </NextLink>
          <form>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
            <DateInput label="Date Of Birth" value={dob} onChange={(date) => setDob(date)} />
            <TextField
              fullWidth
              margin="normal"
              name="city"
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              name="address"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <TextField
              fullWidth
              margin="normal"
              name="qualification"
              label="Qualification "
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PhoneInput
              fullWidth
              country={"pk"}
              value={phoneno}
              onChange={(phone) => setphoneno(phone)}
            />
            <TextField
              fullWidth
              margin="normal"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              name="password"
              label="Confirm Password"
              type="password"
              value={cpassword}
              onChange={(e) => setcpassword(e.target.value)}
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox name="policy" />
              <Typography color="textSecondary" variant="body2">
                I have read the{" "}
                <NextLink href="#" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            <input type="file" onChange={(e) => setuserimg(e.target.files[0])} />
            <Button fullWidth variant="contained" onClick={register}>
              Register
            </Button>
            <Typography color="textSecondary" variant="body2">
              Have an account?{" "}
              <NextLink href="/" passHref>
                <Link variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
      <LoginFormModal open={isLoginFormOpen} />
    </>
  );
};

export default Register;
