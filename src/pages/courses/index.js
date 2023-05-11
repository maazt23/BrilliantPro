import React, { useState } from "react";
import "./.css";

function CoursesPage() {
  const [courses, setCourses] = useState([
    { id: 1, title: "Course 1", description: "Description 1" },
    { id: 2, title: "Course 2", description: "Description 2" },
    { id: 3, title: "Course 3", description: "Description 3" },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddCourse = () => {
    const newCourse = {
      id: courses.length + 1,
      title,
      description,
    };
    setCourses([...courses, newCourse]);
    setTitle("");
    setDescription("");
  };

  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  const handleEditCourse = (id, updatedCourse) => {
    const updatedCourses = courses.map((course) =>
      course.id === id ? updatedCourse : course
    );
    setCourses(updatedCourses);
  };

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
            <button onClick={() => handleEditCourse(course.id, course)}>Edit</button>
          </li>
        ))}
      </ul>
      <h2>Add Course</h2>
      <form>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <button type="button" onClick={handleAddCourse}>Add Course</button>
      </form>
    </div>
  );
}

export default CoursesPage;
