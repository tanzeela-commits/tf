// import { useState } from 'react';
// import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';

// export const SettingsPassword = (props) => {
//   const [values, setValues] = useState({
//     password: '',
//     confirm: ''
//   });

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value
//     });
//   };

//   return (
//     <form {...props}>
//       <Card>
//         <CardHeader
//           subheader="Update password"
//           title="Password"
//         />
//         <Divider />
//         <CardContent>
//           <TextField
//             fullWidth
//             label="Password"
//             margin="normal"
//             name="password"
//             onChange={handleChange}
//             type="password"
//             value={values.password}
//             variant="outlined"
//           />
//           <TextField
//             fullWidth
//             label="Confirm password"
//             margin="normal"
//             name="confirm"
//             onChange={handleChange}
//             type="password"
//             value={values.confirm}
//             variant="outlined"
//           />
//         </CardContent>
//         <Divider />
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             p: 2
//           }}
//         >
//           <Button
//             color="primary"
//             variant="contained"
//           >
//             Update
//           </Button>
//         </Box>
//       </Card>
//     </form>
//   );
// };

import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from "@mui/material";

export const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    password: "",
    confirm: "",
    oldpassword: "",
  });
  const router = useRouter();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  async function changePass(body) {
    try {
      const response = await fetch("http://localhost:5000/settings/changepass", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("JWTtoken")}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(body),
      });

      if (response.status >= 200 && response.status <= 299) {
        router.push("/jobs");
      }
    } catch (response) {
      if (response.status >= 400 && response.status <= 499) {
        console.log(`Error!, ${response.data.error}`);
      }
      if (response.status >= 500 && response.status <= 599) {
        console.log(`Server Error! try again later.`);
      }
    }
  }

  function handleChangePass(e) {
    e.preventDefault();
    console.log(values);
    const body = {
      cfmpass: values.confirm,
      oldpass: values.oldpassword,
      newpass: values.password,
    };
    changePass(body);
  }

  return (
    <form {...props}>
      <Card>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Old Password"
            margin="normal"
            name="oldpassword"
            onChange={handleChange}
            type="password"
            value={values.oldpassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" type="submit" onClick={handleChangePass}>
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};
