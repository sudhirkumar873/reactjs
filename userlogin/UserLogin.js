import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

// import image

import Vector1 from "../../../../../assets/img/Vector1.png";
import Vector2 from "../../../../../assets/img/Vector2.png";
import Just from "../../../../../assets/img/Just a step light-01 1.png";
import Google from "../../../../../assets/img/Google.png";
import Facebook from "../../../../../assets/img/Facebook.png";
import Linkedin from "../../../../../assets/img/Linkedin.png";
import Colors from "../../../../../utils/colors.js";
// import {  NavLink } from "react-router-dom";

import Axios from "../../../../../utils/Axios";
// import { useFormik } from "formik/dist";
// import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { Link } from "react-router-dom";
import colors from "../../../../../utils/colors";
import { NavLink, Navigate, useNavigate } from "react-router-dom";


const Login = (setIsLoggedIn) => {
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate=useNavigate();
  

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  //   const validationSchema = Yup.object({
  //     email: Yup.string().required("Email/Username is required"),
  //     password: Yup.string().required("Password is required"),
  //   });

  //   const formik = useFormik({
  //     initialValues: {
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: validationSchema,
  //     onSubmit: async (values) => {},
  //   });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data

  const fetchGetAllActive = async () => {
    setLoading(true);
    try {
      const response = await Axios.get('https://dummyjson.com/users').then((response) => {
        console.log(response.data.users.length) 
        for (let i = 0; i <response.data.users.length ; i++) {
          if (response.data.users[i].username === username && response.data.users[i].password === password) {
            // console.log('data matched!')
            
            navigate('/');
            break;
          }
        } 
      })
      // setData(response.data.data); // Update the state with fetched data

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchGetAllActive();
  // }, []);




  return (
    <Box sx={{ overflow: "hidden" }}>
      <img
        alt=""
        src={Vector1}
        style={{ width: "100%", height: "auto", maxHeight: "100%" }}
      />
      <Box sx={{ display: { xs: "Block", md: "flex" } }}>
        {/************ left part **********/}

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            justifyContent: "center", // Center content vertically
            alignItems: "center", // Center content horizontally
            textAlign: "center", // Center text
            display: { xs: "none", sm: "initial" },
          }}
        >
          <Box
          // sx={{
          //   ml: { xs: "0", md: "100px" },
          //   mt: { xs: "10px", md: "80px" },
          // }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: { xs: "100", md: "400 " },
                fontSize: { xs: "30px", md: "45px" },
                color: "#6973FE",
              }}
            >
              Just A Step Away
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: { xs: "100", md: "400 " },
                fontSize: { xs: "30px", md: "45px" },
                color: "#6973FE",
              }}
            >
              From Your
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: { xs: "100", md: "400 " },
                fontSize: { xs: "30px", md: "45px" },
                color: "#6973FE",
              }}
            >
              Job!
            </Typography>
          </Box>

          <Typography>
            <img src={Just} alt="" />
          </Typography>
        </Box>

        {/****** divider between left and right *******/}

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: { xs: "1px", sm: "auto" },
            width: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#000000",
            "@media (max-width: 900px)": {
              display: "none",
            },
          }}
        ></Divider>

        {/********* Right part **********/}

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            mb: { xs: "50px", md: "20px" },
            height: "auto",
            justifyContent: "center", // Center content vertically
            alignItems: "center",
            textAlign: "center", // Center content horizontally
          }}
        >
          <Typography variant="h3" sx={{ marginY: "5%", color: "#6973FE" }}>
            LogIn
          </Typography>
          <Container>
            <Grid container spacing={2.24}>
              <Grid item xs={12} sm={9}>
                <TextField
                  id="email"
                  name="email"
                  label="Email/Username"
                  type="email"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: "33px" } }}
                  //   value={formik.values.email}
                  onChange={(e) => { setUsername(e.target.value) }}

                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  //   helperText={formik.touched.email && formik.errors.email}
                  // style={{ marginInline: "10%" }}
                  sx={{ marginInline: { xs: "0%", sm: "10%" } }}
                />
              </Grid>

              <Grid item xs={12} sm={9}>
                <TextField
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => { setPassword(e.target.value) }}
                  InputProps={{
                    sx: { borderRadius: "33px" },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  //   value={formik.values.password}
                  // onChange={formik.handleChange}

                  //   error={
                  //     formik.touched.password && Boolean(formik.errors.password)
                  //   }
                  //   helperText={formik.touched.password && formik.errors.password}
                  // style={{ marginInline: "10%" }}
                  sx={{ marginInline: { xs: "0%", sm: "10%" } }}
                />
              </Grid>

              <Grid item xs={9}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        className="circular-checkbox"
                        style={{
                          // marginLeft: "100px",
                          borderRadius: "50%",
                          background: colors.textColor,
                          "& .MuiSvgIconRoot": {
                            borderRadius: "50%",
                            background: colors.textColor,
                            color: colors.textColor,
                          },
                        }}
                        sx={{ marginLeft: { xs: "10px", sm: "100px" } }}
                        color="default"
                        onChange={handleChange}
                      />
                    }
                    label={
                      <Typography
                        variant="body2"
                        style={{ color: colors.black }}
                      >
                        Keep Me Signed in
                      </Typography>
                    }
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.background,
                      marginLeft: { xs: "10px", sm: "100px" },
                      color: "#6973FE",
                    }}
                  >
                    Forgot Password
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  // component={Link}
                  // to="/"
                  type="submit"
                  sx={{
                    border: "1px",
                    borderRadius: "34px",
                    color: "#000000",
                    background: "#CCFFCC",
                    width: "200px",
                    height: "54px",
                    "&:hover": {
                      backgroundColor: "#7797FE",
                    },
                    margin: "0 auto", // Center the button horizontally
                  }}
                  onClick={() => fetchGetAllActive()}
                // onClick={setIsLoggedIn(true)}
                >
                  
                    {/* <NavLink to='/'> */}
                    Login
                      
                    {/* </NavLink>  */}
                  

                </Button>
              </Grid>

              <Grid item xs={12}>
                <Divider
                  style={{ color: colors.black }}
                  variant="middle"
                  sx={{ marginInline: "5%" }}
                >
                  <Typography variant="h4"> Or </Typography>
                </Divider>
              </Grid>

              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  // component={Link}
                  // to="/register"
                  type="submit"
                  sx={{
                    border: Colors.black, // Set the border color
                    borderRadius: "34px",
                    color: colors.black,
                    backgroundColor: "",
                    background: "#FAF9F6",
                    width: "200px",
                    height: "54px",
                    "&:hover": {
                      backgroundColor: "#F9F6EE",
                    },
                    margin: "0 auto", // Center the button horizontally
                  }}
                >
                  <b>LogIn via OTP</b>
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Divider
                  style={{ color: colors.black }}
                  variant="middle"
                  sx={{ marginInline: "5%" }}
                >
                  <Typography variant="h4">Or</Typography>
                </Divider>
              </Grid>

              <Grid
                item
                xs={12}
                container
                alignItems="center"
                justifyContent="center"
              >
                <IconButton type="default">
                  <img src={Google} alt="" />
                </IconButton>
                <IconButton type="default">
                  <img src={Facebook} alt="" />
                </IconButton>
                <IconButton type="default">
                  <img src={Linkedin} alt="" />
                </IconButton>
              </Grid>

              <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                xs={12}
              >
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ fontSize: "20px", color: colors.black }}
                >
                  Don’t Have Account?
                </Typography>
                <Button
                  // component={Link}
                  // to="/register"
                  sx={{
                    border: "1px",
                    borderRadius: "34px",
                    color: "#000000",
                    background: "#CCFFCC",
                    width: "150px",
                    height: "40px",
                    marginLeft: "3%",
                    "&:hover": {
                      backgroundColor: "#7797FE",
                    },
                  }}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <img
        alt=""
        src={Vector2}
        style={{ width: "100%", height: "auto", maxHeight: "100%" }}
      />
    </Box>
  );
};

export default Login;