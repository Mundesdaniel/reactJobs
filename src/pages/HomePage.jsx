import React from "react";
import Hero from "../componets/Hero";
import HomeCards from "../componets/HomeCards"
import JobsListing from "../componets/jobsListing";
import ViewAllJobs from "../componets/ViewAllJobs";
const HomePage = () => {
  return (
    <>  
    <Hero/>
    <HomeCards />
    <JobsListing isHome = {true}/>
    <ViewAllJobs />


 
 </>
  )
}
export default HomePage