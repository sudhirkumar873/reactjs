
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Divider,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
import { LocationOn, WorkOutline, Search } from "@mui/icons-material";
import ArrowDropDown from "@mui/icons-material/KeyboardArrowDown";
import DrawerComp from "../../../partials/Drawer";
import Footer from "../../../partials/Footer";
import Navbar from "../../../partials/Navbar";
// import classes from "./JobDetails.module.css";
// import Axios from '../../../utils/Axios';
// import Navbar from "../../../partials/Navbar";

const searchBarStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "black",
  borderRadius: "25px",
  margin: "10px",
  padding: "8px 16px",
  border: "1px solid #6973FE",
  height: "40px",
};

const searchBarStylesResponsive = {
  height: "auto",
  width: "auto",
};

const iconContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const buttonStyles = {
  width: { xs: "100%", md: "200px" },
  height: "40px",
  borderRadius: "50px",
  backgroundColor: "#CCFFCC",
  fontSize: "18px",
  color: "black",
  marginRight: "10px",
  "&:hover": {
    color: "white",
    backgroundColor: "#7797FE",
  },
  textTransform: "capitalize ",
  fontWeight: "600",
};

const dividerStyles = {
  backgroundColor: "#6973FE",
  height: "55px",
};

const layoutStyles = {
  width: "auto",
  height: "69px",
  borderRadius: "34.5px",
  display: "flex",
  alignItems: "center",
  margin: "10px",
  padding: "0 16px",
  color: "#6973FE",
  border: "1px solid",
  justifyContent: "space-evenly",
  fontWeight: "600",
};

const layoutStylesResponsive = {
  height: "auto",
  width: "auto",
};

const smallLayoutStyles = {
  width: "auto",
  height: "2.6rem",
  borderRadius: "31px",
  fontSize: "14px",
  border: "1px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "10px",
};

const smallLayoutStylesResponsive = {
  padding: "0 12px",
  marginBottom: "5px",
};

const arrowDownStyles = {
  color: "black",
};

const layoutStyles2 = {
  width: "auto",
  height: "80px",
  borderRadius: "42px",
  border: "1px solid",
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  justifyContent: "space-between",
  paddingInline: "20px",
  margin: "30px",
  color: "#6973FE",
};

const JobDetails = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery("(max-width: 1080px)");

  // const [loading, setLoading] = useState(false);
  //   const [data, setData] = useState([]);

  //   const JobDetails = async () => {
  //   setLoading(true);
  //     try {
  //       const response = await Axios.post("/");
  //       setData(response.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally{
  //       setLoading(false);
  //      }
  //   };

  //   useEffect(() => {
  //     JobDetails();
  //   }, []);

  return (
    <>
      {/* <Navbar/> */}
      {/* Search Bar */}
      <Box
        component="form" // Form element to handle form submission
        sx={{
          ...searchBarStyles,
          ...(isSmallScreen && searchBarStylesResponsive),
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        {/* Search Input */}
        <Grid item style={{ marginRight: isSmallScreen ? "0" : "16px" }}>
          <Box sx={iconContainerStyles}>
            <Search />
            <TextField
              label="Skill/Designations/Companies"
              variant="outlined"
              size="small"
              fullWidth={!isSmallScreen}
              sx={{
                "& fieldset": { border: "none" },
              }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Box>
        </Grid>
        {!isSmallScreen && (
          <Divider orientation="vertical" sx={dividerStyles} />
        )}
        {/* Location Input */}
        <Grid item style={{ marginRight: isSmallScreen ? "0" : "16px" }}>
          <Box sx={iconContainerStyles}>
            <LocationOn />
            <TextField
              label="Location"
              variant="outlined"
              size="small"
              fullWidth={!isSmallScreen}
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
          </Box>
        </Grid>

        {/* Submit Button */}
        <Button type="submit" variant="contained" sx={buttonStyles}>
          Search
        </Button>
      </Box>

      <Box
        sx={{
          ...layoutStyles,
          ...(isSmallScreen && layoutStylesResponsive),
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: isSmallScreen ? "0" : "10px",
            marginBottom: isSmallScreen ? "10px" : "0",
            width: isSmallScreen ? "100%" : "auto",
            flex: "1", 
          }}
        >
          <Typography
            variant="h6"
            component="span"
            style={{ color: "#6973FE", fontWeight: "600" }}
          >
            Job Search
          </Typography>
          <ArrowDropDown style={arrowDownStyles} />
        </Box>
        <Divider
          orientation={isSmallScreen ? "horizontal" : "vertical"}
          sx={{
            width: isSmallScreen ? "100%" : "1px",
            height: isSmallScreen ? "1px" : "70px",
            marginBottom: isSmallScreen ? "10px" : "0",
            marginLeft: isSmallScreen ? "0" : "16px",
          }}
        />
        <Grid
          container
          spacing={1}
          sx={{
            flexWrap: isSmallScreen ? "wrap" : "nowrap",
          }}
        >
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: "black" }}>Quick Apply</span>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: "black" }}>Location</span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: "black" }}>Experience</span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: "black" }}>Salary</span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: "black" }}>Function</span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: "black" }}>Role</span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: "black" }}>Job Type</span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: "black" }}>Job Freshness</span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: "black" }}>All Filters</span>
              <ArrowDropDown style={arrowDownStyles} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              sx={{
                ...smallLayoutStyles,
                ...(isSmallScreen && smallLayoutStylesResponsive),
              }}
            >
              <span style={{ color: "black" }}>Reset All</span>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* xs={isSmallScreen ? 12 : 6} */}
      <Grid container spacing={2}>
        <Grid item xs={isSmallScreen ? 12 : 6}>
          {/* Content for the left side */}
          <Box sx={layoutStyles2}>
            <Typography
              style={{ color: "black", marginRight: "8px", fontWeight: "500" }}
            >
              Send me Jobs for this Search
            </Typography>
            <Switch style={{ color: "#6973FE" }} />
          </Box>
          <Typography style={{ marginLeft: "46px", marginTop: "10px" }}>
            Showing 30 results for "Graphic Designer"
          </Typography>

          {/* Box 1 */}
          <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: "#7797FE",
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: "white",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography variant="h6">Animator</Typography>
            <Typography>KEYWORDS STUDIOS</Typography>
            <br />
            <Typography>Full time</Typography>
            <Typography>Gurgaon / Gurugram, India</Typography>
            <Typography>0-0 INR</Typography>
            <br />
            <Typography>13 days ago</Typography>
          </Box>

          <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: "#7797FE",
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: "white",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography variant="h6">Animator</Typography>
            <Typography>KEYWORDS STUDIOS</Typography>
            <br />
            <Typography>Full time</Typography>
            <Typography>Gurgaon / Gurugram, India</Typography>
            <Typography>0-0 INR</Typography>
            <br />
            <Typography>13 days ago</Typography>
          </Box>

          <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: "#7797FE",
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: "white",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography variant="h6">Animator</Typography>
            <Typography>KEYWORDS STUDIOS</Typography>
            <br />
            <Typography>Full time</Typography>
            <Typography>Gurgaon / Gurugram, India</Typography>
            <Typography>0-0 INR</Typography>
            <br />
            <Typography>13 days ago</Typography>
          </Box>

          <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: "#7797FE",
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: "white",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography variant="h6">Animator</Typography>
            <Typography>KEYWORDS STUDIOS</Typography>
            <br />
            <Typography>Full time</Typography>
            <Typography>Gurgaon / Gurugram, India</Typography>
            <Typography>0-0 INR</Typography>
            <br />
            <Typography>13 days ago</Typography>
          </Box>

          <Box
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "33px",
              backgroundColor: "#7797FE",
              paddingLeft: "70px",
              paddingTop: "17px",
              paddingBottom: "17px",
              margin: "30px",
              color: "white",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography variant="h6">Animator</Typography>
            <Typography>KEYWORDS STUDIOS</Typography>
            <br />
            <Typography>Full time</Typography>
            <Typography>Gurgaon / Gurugram, India</Typography>
            <Typography>0-0 INR</Typography>
            <br />
            <Typography>13 days ago</Typography>
          </Box>
        </Grid>

        <Grid item xs={isSmallScreen ? 12 : 6}>
          {/* Content for the right side */}
          <Box sx={layoutStyles2} style={{ width: "auto" }}>
            <Typography style={{ color: "black", marginRight: "8px" }}>
              Animator <br /> KEYWORDS STUDIOS
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={buttonStyles}
              style={{ width: "auto", fontSize: "14px" }}
            >
              Apply Now
            </Button>
          </Box>

          <Box
            sx={{
              ml: { xs: "-10%", sm: "0px", md: "0px", xl: "0px", lg: "0px" },
            }}
          >
            <Box
              style={{
                width: "90%",
                maxWidth: "600px",
                height: "auto",
                border: "1px solid #7797FE",
                borderRadius: "54px",
                margin: "30px",
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "10px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                gap: "10px",
                ml: {
                  xs: "-50%",
                  sm: "none",
                  md: "none",
                  xl: "none",
                  lg: "none",
                },
              }}
            >
              <Typography variant="p">Highlights</Typography>&nbsp;
              <Typography variant="p">Job Description</Typography>
              <Typography variant="p"> More Info</Typography>
              <Typography variant="p"> Recruiter Information</Typography>
            </Box>
          </Box>
          <Box
            style={{
              width: "auto",
              height: "165px",
              backgroundColor: "#7797FE",
              borderRadius: "17px",
              margin: "30px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingInline: "10px",
              color: "white",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              fontSize: "18px",
            }}
          >
            Gurgaon / Gurugram, India
            <br /> 0 - 0 Years <br /> 13 days ago <br /> 2 Applied
          </Box>

          <Box
            style={{
              width: "90%",
              height: "auto",
              backgroundColor: "#CCFFCC",
              borderRadius: "17px",
              margin: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              fontSize: "14px",
              gap: "5px",
              fontWeight: "600",
            }}
          >
            <p style={{ textAlign: "center" }}>
              Get notified for jobs based on your search when they are posted
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ color: "#7797FE", marginRight: "10px" }}>
                Send Similar Jobs
              </p>
              <Switch />
            </div>
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "20px",
                    marginLeft: "40px",
                    marginBottom: "8px",
                  }}
                >
                  Job Description:
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Able to work in good coordination with production managers
                  and engineers.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Capable of generating new ideas.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Should have hands-on experience with Photoshop and
                  Illustrator.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Should have experience with logo design, corporate brand
                  identity design, web UI
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Identify and troubleshoot UX problems.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Discuss the idea with the internal team.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Knowledge about style standards on fonts, colors, and
                  images.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginLeft: "40px",
                    marginBottom: "4px",
                  }}
                >
                  - Develop UI mockups and prototypes.
                </p>
              </Grid>
            </Grid>
          </Box>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginTop: "20px",
              marginLeft: "40px",
              marginBottom: "8px",
            }}
          >
            Scope of the Role:
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "40px",
              marginBottom: "4px",
              marginRight: "90px",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic a
            cumque impedit ea repellendus, enim, eos doloribus doloremque veniam
            eius exercitationem eaque tenetur similique quidem assumenda harum
            obcaecati, dolorum possimus esse! Ullam quas temporibus odio libero
            nulla, enim repudiandae rerum?
          </p>

          <p
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginTop: "20px",
              marginLeft: "40px",
              marginBottom: "8px",
            }}
          >
            Requirements:
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "40px",
              marginBottom: "4px",
              marginRight: "90px",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic a
            cumque impedit ea repellendus, enim, eos doloribus doloremque veniam
            eius exercitationem eaque tenetur similique quidem assumenda harum
            obcaecati, dolorum possimus esse! Ullam quas temporibus odio libero
            nulla <br />
            enim repudiandae rerum? Hic a cumque impedit ea repellendus, enim,
            eos doloribus doloremque veniam eius exercitationem eaque tenetur
            similique quidem assumenda harum obcaecati, dolorum possimus esse!
            Ullam quas temporibus odio libero nulla, enim repudiandae rerum?
          </p>

          <p
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginTop: "20px",
              marginLeft: "40px",
              marginBottom: "8px",
            }}
          >
            More Info:
          </p>
          <Box
            style={{
              width: "auto",
              height: "178px",
              borderRadius: "17px",
              backgroundColor: "#7797FE",
              paddingLeft: "20px",
              paddingTop: "17px",
              margin: "30px",
              color: "white",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            JOB TYPE <br /> Permanent Job
            <br />
            <br />
            INDUSTRY
            <br /> IT/Computers - Software
            <br />
            <br /> FUNCTION
            <br /> Art
          </Box>

          <Box
            style={{
              fontSize: "14px",
              width: "auto",
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "27px",
            }}
          >
            <p>
              About
              <br />
              KEYWORDS STUDIOS
              <br />
              Job Source: <a href="/">apply.workable.com</a>
            </p>

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: { xs: "auto", md: "70px" },
                height: "35px",
                borderRadius: "15px",
                backgroundColor: "#CCFFCC",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                color: "black",
                marginRight: "10px",
                textTransform: "capitalize ",
                fontWeight: "600",
                fontSize: "12px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#7797FE",
                },
              }}
            >
              Follow
            </Button>
          </Box>

          <p
            style={{
              width: "auto",
              fontSize: "14px",
              marginLeft: "30px",
              marginBottom: "30px",
              marginRight: "90px",
              marginTop: "15px",
            }}
          >
            {" "}
            Keywords Studios plc is an Irish video game industry services
            company based in Leopardstown. Founded in 1998 by Giorgio Guastalla
            and Teresa Luppino, the company initially provided localisation
            services for business software before transitioning to the video
            game industry.
            <br />
            <br />
            <span style={{ fontWeight: "400" }}>
              Job ID: ...................
            </span>
          </p>

          <Box
            style={{
              fontSize: "14px",
              display: "flex",
              margin: "30px",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: { xs: "100%", md: "70px" },
                height: "35px",
                borderRadius: "15px",
                backgroundColor: "#CCFFCC",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                color: "black",
                marginRight: "10px",
                textTransform: "capitalize ",
                fontWeight: "600",
                fontSize: "12px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#7797FE",
                },
              }}
            >
              Save
            </Button>

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: { xs: "100%", md: "70px" },
                height: "35px",
                borderRadius: "15px",
                backgroundColor: "#CCFFCC",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                color: "black",
                marginRight: "10px",
                textTransform: "capitalize ",
                fontWeight: "600",
                fontSize: "12px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#7797FE",
                },
              }}
            >
              Report
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/*============ FOOTER ==============*/}
      <Footer />
    </>
  );
};

export default JobDetails;