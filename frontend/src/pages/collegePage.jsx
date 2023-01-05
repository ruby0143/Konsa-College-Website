import React from 'react'
import CollegeReview from '../components/ParticularCollege/CollegeReview'
import { useLocation, useParams,useSearchParams } from 'react-router-dom'
import Connectivity  from '../components/ParticularCollege/Connectivity'
import FeeStructure  from '../components/ParticularCollege/FeeStructure'
import Scholarship  from '../components/ParticularCollege/Scholarship'
import AboutCollege from '../components/ParticularCollege/AboutCollege'
import Cutoff from '../components/ParticularCollege/Cutoff'
import Placements from '../components/ParticularCollege/Placements'
import CollegePageHeader from '../components/Header/collegePageHeader/collegePageHeader'
import axios from 'axios';

const CollegePage = () => {
   const {college}=useParams()
    const data = useLocation()
    const path = useLocation().pathname
    console.log(path,data)
    let [searchParams,setSearchParams] = useSearchParams();
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      console.log("key : value = ",param, value);
    }

    axios.get("http://localhost:3000/college"+path).then(response=>{
      if(response.data == "404"){
        console.log("College Not Found!");
      }
      else{
        console.log(response.data);
      }
    })
    .catch(err=>{console.log(err)});
    
  return (
    <>
    <div className='bg-[#F5F5F5]'>
      <CollegePageHeader/>
      <Connectivity/>
      <FeeStructure/>
      <Scholarship/>
      <AboutCollege/>
      <Cutoff/>
      <Placements/>
      <CollegeReview/>
      {/* <CollegeFooter/> */}
    </div>
    </>
  )
}

export default CollegePage