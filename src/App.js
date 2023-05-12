import {React} from "react";
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
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
function App() {
  return (
    <>
    <Router>
      <Routes>

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
         exact path="/testpage"
         element={
          <div>
            <Navbar />
            hi
          </div>
         }
         />


        <Route
         exact path="/loginpage"
         element={
          <div>
            <Navbar />
            <LoginPage />
          </div>
         }
         />


        <Route
         exact path="/courses"
         element={
          <div>
            <Navbar />
            <CoursesPage />
          </div>
         }
         />

        <Route
         exact path="/courses/create"
         element={
          <div>
            <Navbar />
            <CreateCourse />
          </div>
         }
         />


        <Route
         exact path="/materials"
         element={
          <div>
            <Navbar />
            <MaterialsPage />
          </div>
         }
         />


        <Route
         exact path="/learners"
         element={
          <div>
            <Navbar />
            <LearnersPage />
          </div>
         }
         />
         

         <Route
         exact path="/addmaterials"
         element={
          <div>
            <Navbar />
          </div>
         }
         />

        <Route
         exact path="/admindashboard"
         element={
          <div>
            <Navbar />
            <AdminDashboard />
          </div>
         }
         />

        <Route
         exact path="/assesments"
         element={
          <div>
            <Navbar />
            <AssessmentsList />
          </div>
         }
         />

        <Route
         exact path="/assesments/create"
         element={
          <div>
            <Navbar />
            <AssessmentCreator />
          </div>
         }
         />

        <Route
         exact path="/assesments/:id"
         element={
          <div>
            <Navbar />
            <Assessment />
          </div>
         }
         />
      </Routes>
    </Router>
    </>
  );
}

export default App;
