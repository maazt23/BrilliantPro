import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
import "./.css"
import { Chart } from "react-google-charts";



function AdminDashboard() {
  const [counts, setCounts] = useState({
    courses: 0,
    learners: 0,
    materials: 0,
    certificates: 0
  });

  const data = [
    ["Task", "Hours per Day"],
    ["Enrolled", 78],
    ["Failed", 7],
    ["Started", 2],
    ["Halfway", 2],
    ["Passed", 2]
  ];
  


  useEffect(() => {
    async function fetchCounts() {
        const url = "http://182.180.54.158:10201/courses/count"
        const response = await axios.get(url);
        setCounts(response.data.data);
    }
    fetchCounts();
  }, []);

  return (
    <div className='admin-dashboard'>
      <h2>Admin Dashboard</h2>
      <p>Courses: {counts.courses}</p>
      <p>Learners: {counts.learners}</p>
      <p>Materials: {counts.materials}</p>
      <p>Certificates Issued: {counts.certificates}</p>
      {/* <CourseStats /> */}

    <div className='showdata'>
        <div className='data'>
            <Link to="/materials">Materials</Link>
        </div>
        
        <div className='data'>
            <Link to="/courses">Courses</Link>
        </div>

        <div className='data'>
          <Link to="/learners">Learners</Link>
        </div>



        <Chart
        chartType="PieChart"
        data={data}
        // options={options}
        width={"100%"}
        height={"400px"}
        />

        
    </div>
    
    </div>
  );
}

export default AdminDashboard;
