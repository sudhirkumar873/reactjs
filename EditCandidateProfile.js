import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Divider, Avatar } from "@mui/material";
import { Container, TextField, Button, useMediaQuery } from "@mui/material";

import classes from "./EditCandidateProfile.module.css"
import Sidebar from "../../../partials/Sidebar";
import user from "../../../assets/img/users/User.jpg";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Axios from "../../../utils/Axios";
import MiniDrawer from "../admin/common/Sidebar";
import Navbar from "../../../partials/Navbar";
import Colors from "../../../utils/colors";

const heading = {
  fontWeight: "600",
  textAlign: "left",
  color: Colors.palette.background.default,
  marginTop: "30px",
  marginBottom: "10px",
  lineHeight: "70px",
}; 

const headingResponsive = {
  fontSize: "1.4rem",
};

const dividerResponsive = {
  display: "none",
};

const textFeild = {
  width: "100%",
  height: "50px",
  borderRadius: "30px",
 // border: "1px solid #6973FE",
  padding: "0 14px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
};

const button1 = {
  width: "auto",
  fontSize: "18px",
  marginBottom: "10px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor: Colors.palette.background.card,
  color:Colors.palette.background.text,
  "&:hover": {
    color:  Colors.palette.primary.main,
    backgroundColor:Colors.palette.background.text,
  },
};

const button2 = {
  width: "auto",
  fontSize: "18px",
  marginBottom: "10px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor:Colors.palette.color.textColor,
  color: Colors.palette.primary.main,
  "&:hover": {
    color: Colors.palette.primary.main,
    backgroundColor:Colors.palette.background.text,
  },
};

export default function EditCandidateProfile() {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchEditCandidateProfile = async () => {
  //   try {
  //     const response = await Axios.get("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEditCandidateProfile();
  // }, []);

  return (
    <Box>
    {/* mt:"6%" ,ml:{xs:"-13%",sm:"0px",md:"0",xl:"0",lg:"0"},mt:{xs:"10%",sm:"5%",md:"5%",xl:"5%",lg:"5%"} */}
    <Navbar/>
    <Box sx={{ display: "flex", marginLeft:{xs:"5%",sm:"15%"}}}>
      {/* <Sidebar /> */}
     {/* <MiniDrawer/> */}
    

      {/* <Grid> */}
        {/* <Divider
          orientation="vertical"
          sx={{
            width: "0.5px",
            margin: "0 50px",
            backgroundColor: "black",
            ...(isSmallScreen && dividerResponsive),
          }}
        ></Divider>
      </Grid> */}

      <Box component="main">
        <Container>
          <div className="profile-container">
            <Typography
              variant="h4"
              sx={{ ...heading, ...(isSmallScreen && headingResponsive) ,display:{xs:"none",sm:"block"}, display:{}}}
            >
              Edit Candidate Profile
            </Typography>
            {/* <Typography sx={{mt:"10%" }}><img src={user} alt="" className="profile-image" /></Typography> */}
            <div
                style={{
                  marginRight: "10px",
                  maxWidth: isSmallScreen ? "50px" : "100%",
                  height: isSmallScreen ? "50px" : "auto",
                }}
              >
                <img
                  src={user}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
          
          
          
            {/* Dispplay only xs 0 to599 px */}

            {/* <Typography
              variant="h6"
              sx={{
                display: { xs: "block", sm: "none" },
                marginLeft: { sm: "0" }
              }}
            >
              {/* <img src={user} alt="" /> */}
              {/* <b><br/> */}
              {/* <Typography  textAlign={"start"} sx={{}}variant="h6"><b><br/>Edit Candidate Profile</b></Typography>  
            </Typography> */} 


            {/* <Typography
              variant="p"
              sx={{   display:{xs:"block",sm:"none"},
              marginLeft:{sm:"0"} }}>
             <img src={user} alt="" className="profile-image" />
             <b>Edit Candidate Profile</b> 
            </Typography> */}

            {/* <Typography sx={{mt:"10%" }}><img src={user} alt="" className="profile-image" /></Typography> */}
         
    
          </div>

          <Grid container rowSpacing={4} columnSpacing={8}>
          
            <Grid item xs={12} md={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Mobile Number"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="D.O.B"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Gender"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Choose Current Location"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Upload Your Photo"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
          </Grid>
          <Typography
            variant="h4"
            sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
          >
            Professional Details
          </Typography>

          <Grid container rowSpacing={4} columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Address Line 1"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Address Line 2"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="State/Province/Region"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Zip Code"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Country"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: textFeild,
                }}
              />
            </Grid>
          </Grid>

          <div className="btn">
            <Button type="submit" variant="contained" sx={button1}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" sx={button2}>
              Save Changes
            </Button>
          </div>
        </Container>
      </Box>
    </Box>
    </Box>
  );
}
