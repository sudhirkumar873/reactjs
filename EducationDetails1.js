import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Divider } from "@mui/material";
import { Container, TextField, Button, useMediaQuery } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CheckIcon from "@mui/icons-material/Check";
import Axios from "../../../utils/Axios";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import classes from "./EducationDetails.module.css";
import Colors from "../../../utils/colors";
import { Link } from "react-router-dom";

const steps = [
  'Basic Details',
  'Employment',
  'Education',
  'Last Step ',

];
const style = {
  customLink: {
    textDecoration: 'none',  // Remove underline
    color: Colors.palette.background.text,         // Set text color to white
    fontWeight: 'bold'     // Make the text bold
  }
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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

const textFeild = {
  width: "100%",
  height: "50px",
  borderRadius: "30px",
 // border: "1px solid #6973FE",
  padding: "0 14px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
};

const outlinedButton = {
  width: "auto",
  fontSize: "14px",
  marginBottom: "10px",
  borderRadius: "30px",
  textTransform: "capitalize",
  color:  Colors.palette.primary.main,
  "&:hover": {
    color: Colors.palette.background.text,
    backgroundColor:Colors.palette.background.card,
  },
};

const outlinedButtonResponsive = {
  fontSize: "10px",
};

const button = {
  fontWeight: "600",
  width: "auto",
  fontSize: "16px",
  borderRadius: "30px",
  textTransform: "capitalize",
  backgroundColor: Colors.palette.color.textColors,
  color:  Colors.palette.primary.main,
  "&:hover": {
    color: Colors.palette.background.text,
    backgroundColor:Colors.palette.background.card,
  },
};

const chipResponsive = {
  flexDirection: "column",
  gap: "5px",
};

export default function EducationDetails1() {
  const handleClick = () => {};
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchEducationDetails1 = async () => {
  //   try {
  //     const response = await Axios.post("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEducationDetails1();
  // }, []);


  return (
    <>
    {/*  */}

    

    <Box sx={{ width: '100%',color:Colors.palette.background.text ,mt:"10%" ,display:{xs:"block",sm:"none",md:"none",xl:"none",lg:"none"}}}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>


    {/*  */}
       <Grid container spacing={1}>
        <Grid item xs={4} sx={{display:{xs:"none",sm:"block",md:"block",xl:"block",lg:"block"} }}>
          <div className={classes['list-wrapper']}>
            <div className={classes['line']}></div>

            <div className={classes['list-item-wrapper']} >
              <div className={classes['list-bullet1']} style={{background:Colors.palette.background.card,color:Colors.palette.background.text}}>
                <CheckIcon sx={{ fontSize: "16px" }} />
              </div>
              <div className={classes['list-item']}>
                <div className={classes['list-title']}>Basic Details</div>
              </div>
            </div>

            <div className={classes['list-item-wrapper']}>
              <div className={classes['list-bullet2']} style={{background:Colors.palette.color.textColor,color:Colors.palette.background.text}}>
                <CheckIcon sx={{ color:Colors.palette.color.textColor}} />
              </div>
              <div className={classes['list-item']}>
                <div className={classes['list-title']}>Employment</div>
              </div>
            </div>

            <div className={classes['list-item-wrapper']}>
              <div className={classes['list-bullet3']} style={{background:Colors.palette.background.card,color:Colors.palette.background.text}}>
                <CheckIcon sx={{ color: Colors.palette.background.default }} />
              </div>
              <div className={classes['list-item']}>
                <div className={classes['list-title']}>Education</div>
              </div>
              <div className={classes['white-line']}></div>
            </div>

            <div className={classes['list-item-wrapper']}>
              <div className={classes['list-bullet4']}  style={{background:Colors.palette.color.textColor,color:Colors.palette.background.text}}>
                <CheckIcon sx={{ color: Colors.palette.background.default }} />
              </div>
              <div className={classes['list-item']}>
                <div className={classes['list-title']}>Last Step</div>
              </div>
              <div className={classes['white-line']}></div>
            </div>
          </div>
        </Grid> 
{/* horintontal cvoerted */}


{/*  */}
        <Grid item xs={12} sm={8}>
          <Container>
            <Typography
              variant="h4"
              sx={{ ...heading, ...(isSmallScreen && headingResponsive), }}
            >
              Add Your Employment
            </Typography>
            <p>Employment details help recruiters understand your background</p>

            
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={6}>
                <div className={classes['btn']}>
                <h4>Are You currently employed?</h4>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                      ...(isSmallScreen && outlinedButtonResponsive),
                    }}
                  >
                    Yes
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                      ...(isSmallScreen && outlinedButtonResponsive),
                    }}
                  >
                    No
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container rowSpacing={4} columnSpacing={12}>
              <Grid item xs={12} md={6}>
                <div className={classes['btn']}>
                <h4>Gender</h4>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                      ...(isSmallScreen && outlinedButtonResponsive),
                    }}
                  >
                    Male
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                      ...(isSmallScreen && outlinedButtonResponsive),
                    }}
                  >
                    Female
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                      ...(isSmallScreen && outlinedButtonResponsive),
                    }}
                  >
                    Other
                  </Button>
                </div>
              </Grid>
            </Grid>

            {/* <h4>Total work experience</h4> */}
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={6}>
              <h4>Total work experience</h4>
                <TextField
                  label="Select Year"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} mt={"3.5%"}>
              
                <TextField
                  label="Select Month"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            {/* <h4>Company</h4> */}
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8}  sx={{mt:{sm:"2%",xs:"4%"}}}>
              <h4>Company</h4>
                <TextField
                  label="Eg. Flipakart"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            {/* <h4>Job Title</h4> */}
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8} sx={{mt:{sm:"2%",xs:"4%"}}}>
              <h4>Job Title</h4>
                <TextField
                  label="Eg. Software"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            {/* <h4>Current City</h4> */}
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={8} sx={{mt:{sm:"2%",xs:"4%"}}}>
              <h4>Current City</h4>
                <TextField
                  label="Eg. Flipakart"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Checkbox {...label} defaultChecked />
                Outside India
              </Grid>
            </Grid>

            {/* <h4>Suggestions:</h4> */}
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={12}  sx={{mt:{sm:"2%",xs:"4%"}}}>
              <h4>Suggestions:</h4>
                <div
                  className={classes['chips']}
                  style={{ ...(isSmallScreen && chipResponsive) }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Noida
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Banglore/Bangluru
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Hyderabad/Secunderabad
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <div
                  className={classes['chips']}
                  style={{ ...(isSmallScreen && chipResponsive) }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Pune
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Mumbai
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    Chennai
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    New Delhi
                  </Button>
                </div>
              </Grid>
            </Grid>

            {/* <h4>Working Since</h4> */}
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={5} sx={{mt:{sm:"2%",xs:"4%"}}}>
              <h4>Working Since</h4>
                <TextField
                  label="MM/YYYY"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2} sx={{mt:{sm:"5.5%",xs:"4%"}}}>
                <TextField
                  label="To"
                  variant="outlined"
                  width="10px"
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={5}  sx={{mt:{sm:"5.5%",xs:"4%"}}} >
                <TextField
                  label="Present"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            {/* <h4>Annual Salary</h4> */}
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={6} sx={{mt:{sm:"2%",xs:"4%"}}}>
              <h4>Annual Salary</h4>
                <TextField
                  label="xxxx Per Year"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: textFeild,
                  }}
                />
              </Grid>
            </Grid>

            {/* <h4>Notice Period</h4> */}
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={12} sx={{mt:{sm:"2%",xs:"4%"}}}>
              <h4>Notice Period</h4>
                <div
                  className={classes['chips']}
                  style={{ ...(isSmallScreen && chipResponsive) }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    15 Days or Less
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    1 Month
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    2 Months
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    3 Months
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      ...outlinedButton,
                    }}
                  >
                    More than 3 Months
                  </Button>
                </div>
              </Grid>
            </Grid>

            <div className={classes['BottomBtn']}>
            <Link to="/educationdetails2" style={style.customLink}> 
              <Button
                type="submit"
                variant="contained"
                sx={{
                  ...button,
                  ...(isSmallScreen && outlinedButtonResponsive),
                  textAlign:"center",
                  ml:"-25%"
                }}
              >
                Continue <ArrowForwardOutlinedIcon />
              </Button>
              </Link>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
