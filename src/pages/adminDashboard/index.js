import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
import "./.css"



function AdminDashboard() {
  const [counts, setCounts] = useState({
    courses: 0,
    learners: 0,
    materials: 0,
    certificates: 0
  });

  useEffect(() => {
    async function fetchCounts() {
      const url = process.env.REACT_APP_API_URL + "/courses/count";
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

        <div className='data'>
          <Link to="/assesments">Assesments</Link>
        </div>




        
    </div>
    
    </div>
  );
}

export default AdminDashboard;
