import {React} from "react";
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import CoursesPage from "./pages/courses";
import MaterialsPage from "./pages/materials";
import LearnersPage from "./pages/learners";
import Navbar from "./pages/navbar";
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
      </Routes>
    </Router>
    </>
  );
}

export default App;
