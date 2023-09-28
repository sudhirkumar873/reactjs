import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Active1 from "../pages/users/admin/Active";
import Inactive1 from "../pages/users/admin/Inactive";
import Dashboard from "../pages/users/admin/Dashboard";
import Homebanner from "../pages/users/admin/Homebanner";
import EditRecruiter from "../pages/users/admin/EditRecruiter";
import Offerbanner from "../pages/users/admin/Offerbanner";
import Domain from "../pages/users/admin/Domain";
import Subdomain from "../pages/users/admin/Subdomain";
import Pop from "../pages/users/admin/Pop";
import PostedJob from "../pages/users/admin/PostedJob";
import PostedJobCard from "../pages/users/admin/PostedJobCard";
import colors from "../utils/colors";
import Candidate from "../pages/users/admin/Candidate";
import ActiveCandidate from "../pages/users/admin/ActiveCandidate";
import InactiveCandidate from "../pages/users/admin/InactiveCandidate";
import Tablebanner from "../pages/users/admin/common/Tablebanner";
import PendingPostedJob from "../pages/users/admin/Pendingpostedjob";
import ActivePostedJob from "../pages/users/admin/Activepostedjob";
import InactivePostedJob from "../pages/users/admin/Inactivepostedjob";
// import Active1 from"../pages/users/admin/ActiveCandidate";
// import Inactive1 from"../pages/users/admin/InactiveCandidate";

import PrivateRoute from "../partials/Privateroute";
import Home from "../pages/users/candidate/Home";
import JobDetails from "../pages/users/candidate/JobDetails";
import CompanyName from "../pages/users/candidate/CompanyName";
import JobSeeker from "../pages/users/candidate/JobSeeker";



import LoginAsCompany from "../pages/users/recruiter/LoginAsCompany";
import EditRecruiterDetails from "../pages/users/recruiter/EditRecruiterDetails";
import EditCandidateProfile from "../pages/users/candidate/EditCandidateProfile";
import EducationDetails1 from "../pages/users/candidate/EducationDetails1";
import EducationDetails2 from "../pages/users/candidate/EducationDetails2";
import RegisterLastPage from "../pages/users/candidate/RegisterLastPage";



import PostAJob from "../pages/users/recruiter/PostAJob";
// import Success from "../src/app/partials/Success";
// import Failed from "../src/app/partials/Failed";
import EditProfileCompany from "../pages/users/admin/EditProfileCompany";


import AdminLogin from "../pages/users/auth/login/adminlogin/AdminLogin";
import UserLogin from "../pages/users/auth/login/userlogin/UserLogin";
import Recruiterregister from "../pages/users/auth/register/recruiterregister/Recruiterregister";
import UserRegister from "../pages/users/auth/register/userregister/UserRegister";
import { useEffect,useState } from "react";
import Navbar from "../partials/Navbar";
import PageNotFound from "../partials/PageNotFound";
import RecruiterJobSeeker from "../partials/Recruiterjobseeker";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn]= useState(false); 

 
  return (
    <div>


<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    
   
    <Routes>
      {/* =====CANDIDATE ROUTES===== */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/recruiterjobseeker"  element={<RecruiterJobSeeker/>}> </Route>
      <Route path="/jobdetails" element={<JobDetails  setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/companyname" element={<CompanyName setIsLoggedIn={setIsLoggedIn}/>}></Route>
    
      <Route path="/jobseeker" element={ 
         <PrivateRoute isLoggedIn={isLoggedIn}>
              <JobSeeker/>
          </PrivateRoute>}>

          </Route>
      <Route path="/editcandidateprofile" element={<EditCandidateProfile setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/educationdetails1" element={<EducationDetails1 setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/educationdetails2" element={<EducationDetails2 setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/registerlastpage" element={<RegisterLastPage setIsLoggedIn={setIsLoggedIn}/>}></Route>

      {/* =====RECRUITER ROUTES===== */}
      <Route path="/loginascomapny" element={<LoginAsCompany setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/editrecruiterdetails" element={<EditRecruiterDetails setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/postajob" element={<PostAJob setIsLoggedIn={setIsLoggedIn} />}></Route>

      {/* =======ADMIN ROUTES========= */}
      
      <Route path="/dashboard" element={<Dashboard />}></Route> 
      <Route path="/active" element={<Active1 />}></Route> 
      <Route path="/inactive" element={<Inactive1 />}></Route>
      <Route path="/candidate" element={<Candidate />}></Route>
      <Route path="/activecandidate" element={<ActiveCandidate />}></Route>{" "}
      {/*  DONE */}
      <Route
        path="/inactivecandidate"
        element={<InactiveCandidate />}
      ></Route>{" "}
      {/*  DONE */}
      <Route
        path="/postedjob"
        element={<PostedJob Postedtitle={"Posted"} buttonColor={"#CCFFCC"} />}
      ></Route>{" "}
      {/*  DONE */}
      <Route
        path="/pendingjob"
        element={
          <PendingPostedJob Postedtitle={"Pending"} buttonColor={"#FFC804"} />
        }
      ></Route>
      <Route
        path="/activejob"
        element={
          <ActivePostedJob Postedtitle={"Active"} buttonColor={"#CCFFCC"} />
        }
      ></Route>{" "}
      {/*  DONE */}
      <Route
        path="/inactivejob"
        element={
          <InactivePostedJob
            Postedtitle={"Inactive"}
            buttonColor={"#FF0000C9"}
          />
        }
      ></Route>{" "}
      {/*  DONE */}
      <Route path="/subdomain" element={<Subdomain />}></Route>
      <Route path="/domain" element={<Domain />}></Route>
      <Route path="/homebanner" element={<Homebanner />}></Route>
      <Route path="/offerbanner" element={<Offerbanner />}></Route>
      <Route path="/editrecruiter" element={<EditRecruiter />}></Route>
      <Route
        path="/editprofilecompany"
        element={<EditProfileCompany />}
      ></Route>

      {/* ====MISCALLANEOUS ROUTES===== */}
      {/* <Route path="/success" element={<Success />}></Route>
      <Route path="/failed" element={<Failed />}></Route>
      <Route path='/pop' element={<Pop/>}></Route>  */}
      <Route path ='/*'  element={<PageNotFound/>}></Route>

      {/*-------------- Authentication Pages --------------*/}
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/userlogin" element={<UserLogin  setIsLoggedIn={setIsLoggedIn} />}></Route>
      <Route path="/recruiterregister" element={<Recruiterregister setIsLoggedIn={setIsLoggedIn} />}></Route>
      <Route path="/userregister" element={<UserRegister />}></Route>
    </Routes>
    </div>
  );
}

export default AppRouter;


// import React from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import Active from "../pages/users/admin/Active";
// import Inactive from "../pages/users/admin/Inactive";
// import Dashboard from "../pages/users/admin/Dashboard";
// import Homebanner from "../pages/users/admin/Homebanner";
// import EditRecruiter from "../pages/users/admin/EditRecruiter";
// import Offerbanner from "../pages/users/admin/Offerbanner";
// import Domain from "../pages/users/admin/Domain";
// import Subdomain from "../pages/users/admin/Subdomain";
// import Pop from "../pages/users/admin/Pop";
// import PostedJob from "../pages/users/admin/PostedJob";
// import PostedJobCard from "../pages/users/admin/PostedJobCard";
// import colors from "../utils/colors";
// import Candidate from "../pages/users/admin/Candidate";
// import ActiveCandidate from "../pages/users/admin/ActiveCandidate";
// import InactiveCandidate from "../pages/users/admin/InactiveCandidate";
// import Tablebanner from "../pages/users/admin/common/Tablebanner";
// import PendingPostedJob from "../pages/users/admin/Pendingpostedjob";
// import ActivePostedJob from "../pages/users/admin/Activepostedjob";
// import InactivePostedJob from "../pages/users/admin/Inactivepostedjob";
// import Active1 from"../pages/users/admin/ActiveCandidate";
// import Inactive1 from"../pages/users/admin/InactiveCandidate";


// import Home from "../pages/users/candidate/Home";
// import JobDetails from "../pages/users/candidate/JobDetails";
// import CompanyName from "../pages/users/candidate/CompanyName";
// import JobSeeker from "../pages/users/candidate/JobSeeker";



// import LoginAsCompany from "../pages/users/recruiter/LoginAsCompany";
// import EditRecruiterDetails from "../pages/users/recruiter/EditRecruiterDetails";
// import EditCandidateProfile from "../pages/users/candidate/EditCandidateProfile";
// import EducationDetails1 from "../pages/users/candidate/EducationDetails1";
// import EducationDetails2 from "../pages/users/candidate/EducationDetails2";
// import RegisterLastPage from "../pages/users/candidate/RegisterLastPage";



// import PostAJob from "../pages/users/recruiter/PostAJob";
// // import Success from "../src/app/partials/Success";
// // import Failed from "../src/app/partials/Failed";
// import EditProfileCompany from "../pages/users/admin/EditProfileCompany";


// import AdminLogin from "../pages/users/auth/login/adminlogin/Login";
// import UserLogin from "../pages/users/auth/login/userlogin/Login";
// import AdminRegister from "../pages/users/auth/register/adminregister/Register";
// import UserRegister from "../pages/users/auth/register/userregister/Register";
// import RecruiterJobSeeker from "../pages/users/recruiter/RecruiterJobSeeker";
// import Navbar from "../partials/Navbar";
// function AppRouter() {
//   return (
//     <Routes>
//       {/* =====CANDIDATE ROUTES===== */}
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/jobdetails" element={<JobDetails/>}></Route>
//       <Route path="/companyname" element={<CompanyName/>}></Route>
//       <Route path="/jobseeker" element={<JobSeeker/>}></Route>
//       <Route path="/editcandidateprofile" element={<EditCandidateProfile/>}></Route>
//       <Route path="/educationdetails1" element={<EducationDetails1/>}></Route>
//       <Route path="/educationdetails2" element={<EducationDetails2/>}></Route>
//       <Route path="/registerlastpage" element={<RegisterLastPage/>}></Route>
      

//       {/* =====RECRUITER ROUTES===== */}
//       <Route path="/loginascomapny" element={<LoginAsCompany/>}></Route>
//       <Route path="/editrecruiterdetails" element={<EditRecruiterDetails/>}></Route>
//       <Route path="/postajob" element={<PostAJob />}></Route>
//       <Route path="/RecruiterJobSeeker" element={<RecruiterJobSeeker/>}/>
//       {/* =======ADMIN ROUTES========= */}
      
//       <Route path="/dashboard" element={<Dashboard />}></Route> 
//       <Route path="/active" element={<Active1 />}></Route> 
//       <Route path="/inactive" element={<Inactive1 />}></Route>
//       <Route path="/candidate" element={<Candidate />}></Route>
//       <Route path="/activecandidate" element={<ActiveCandidate />}></Route>
//       <Route  path="/inactivecandidate"  element={<InactiveCandidate />} ></Route>
//       <Route path="/postedjob" element={<PostedJob Postedtitle={"Posted"} buttonColor={"#CCFFCC"} />} ></Route>{" "}
//       <Route path="/pendingjob" element={ <PendingPostedJob Postedtitle={"Pending"} buttonColor={"#FFC804"} /> } ></Route>
//       <Route path="/activejob" element={ <ActivePostedJob Postedtitle={"Active"} buttonColor={"#CCFFCC"} /> } ></Route>{" "}
//       <Route path="/inactivejob" element={<InactivePostedJob  Postedtitle={"Inactive"}  buttonColor={"#FF0000C9"}/> }></Route>{" "}
//       <Route path="/subdomain" element={<Subdomain />}></Route>
//       <Route path="/domain" element={<Domain />}></Route>
//       <Route path="/homebanner" element={<Homebanner />}></Route>
//       <Route path="/offerbanner" element={<Offerbanner />}></Route>
//       <Route path="/editrecruiter" element={<EditRecruiter />}></Route>
//       <Route path="/editprofilecompany" element={<EditProfileCompany />} ></Route>

//       {/* ====MISCALLANEOUS ROUTES===== */}
//       {/* <Route path="/success" element={<Success />}></Route>
//       <Route path="/failed" element={<Failed />}></Route>
//       <Route path='/pop' element={<Pop/>}></Route>  */}

//       {/*-------------- Authentication Pages --------------*/}
//       <Route path="/adminlogin" element={<AdminLogin />}></Route>
//       <Route path="/userlogin" element={<UserLogin />}></Route>
//       <Route path="/adminregister" element={<AdminRegister />}></Route>
//       <Route path="/userregister" element={<UserRegister />}></Route>
//     </Routes>
//   );
// }

// export default AppRouter;
