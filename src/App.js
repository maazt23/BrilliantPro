import React, { useState } from 'react';
import { Route,BrowserRouter as Router,Routes, Navigate  } from "react-router-dom";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import CoursesPage from "./pages/courses";
import MaterialsPage from "./pages/materials";
import LearnersPage from "./pages/learners";
import Navbar from "./pages/navbar";
import AdminDashboard from "./pages/adminDashboard";
import CreateCourse from "./pages/courses/addcourse";
import AssessmentCreator from "./pages/assesments";
import Assessment from "./pages/assesments/ViewAssesments";
import AssessmentsList from "./pages/assesments/ListAssesment";
import ShowCourse from "./pages/courses/ShowCourse";
import LearnerDashboard from './pages/learnerdashboard';

function App() {
  const u = localStorage.getItem('user')
  const [user,setUser] = useState(u);
  return (
    <>
    <Router>
      <Routes>

        <Route
          exact path="/"
          element={
            <div>
              <Navbar user={user} setUser={setUser} />
              {
                user && user.Role === "admin" ? 
                    <Navigate to="/admindashboard" />
                : (
                  user && user.Role === "learner" ?
                  <Navigate to="/learnerdashboard" /> : ""
                )  
              }            
            </div>
          }
         />

        <Route
         exact path="/signup"
         element={
          <div>
            <Navbar />
            <SignUpPage />
          </div>
         }
         />


        <Route
         exact path="/login"
         element={
          <div>
              <Navbar user={user} setUser={setUser} />
              <LoginPage setUser={setUser} />
          </div>
         }
         />


        <Route
         exact path="/courses"
         element={
          <div>
            <Navbar user={user} setUser={setUser} />
            <CoursesPage />
          </div>
         }
         />

        <Route
         exact path="/courses/create"
         element={
          <div>
            <Navbar user={user} setUser={setUser} />
            <CreateCourse />
          </div>
         }
         />


        <Route
         exact path="/materials"
         element={
          <div>
            <Navbar user={user} setUser={setUser} />
            <MaterialsPage />
          </div>
         }
         />


        <Route
         exact path="/learners"
         element={
          <div>
            <Navbar user={user} setUser={setUser} />
            <LearnersPage />
          </div>
         }
         />
         

        <Route
         exact path="/admindashboard"
         element={
          <div>
            <Navbar user={user} setUser={setUser} />
            <AdminDashboard />
          </div>
         }
         />

        <Route
         exact path="/learnerdashboard"
         element={
          <div>
            <Navbar user={user} setUser={setUser} />
            <LearnerDashboard  user={user} setUser={setUser}/>
          </div>
         }
        />

        <Route
         exact path="/learnercourse/:id"
         element={
          <div>
            <Navbar user={user} setUser={setUser} />
          </div>
         }
        />

        <Route
         exact path="/assesments"
         element={
          <div>
            <Navbar user={user} setUser={setUser} />
            <AssessmentsList />
          </div>
         }
         />

        <Route
         exact path="/assesments/create"
         element={
          <div>
            <Navbar user={user} setUser={setUser} />
            <AssessmentCreator />
          </div>
         }
         />

        <Route
         exact path="/assesments/:id"
         element={
          <div>
            <Navbar user={user} setUser={setUser} />
            <Assessment />
          </div>
         }
         />

        <Route
         exact path="/courses/:id"
         element={
          <div>
            <Navbar user={user} setUser={setUser} />
            <ShowCourse />
          </div>
         }
         />
      </Routes>
    </Router>
    </>
  );
}

export default App;
