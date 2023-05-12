import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./.css"
const CreateCourse = () => {
  
    const [formData, setFormData] = useState({
    name: '',
    description: '',
    instructor : '',
    duration: '',
    materials : []
  });
  const [materials, setMaterials] = useState([]);
  const [count,setCount] = useState(1);
  const [values, setValues] = useState([]);
  //   const [options,setOptions] = useState([1]);
    // const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

    const dropdowns = [];
    for (let i = 0; i < count; i++) {
    

    const dropdownOptions = materials.map((material, index) => (
        <option key={index} value={material._id}>{material.name}</option>
    ));

    const handleDropdownChange = (event, index) => {
        const newValues = [...values];
        newValues[index] = {
            "materialId" : event.target.value
        }
        setValues(newValues);
    };


    dropdowns.push(
        <div key={i}>
        <select id={`dropdown-${i}`} name={`dropdown-${i}`}
            onChange={(event) => handleDropdownChange(event, i)}
        >
            <option key={i} value="">Select Material</option>

            {dropdownOptions}
        </select>
        </div>
    );
    }

    const handleCount = (event) => {
        event.preventDefault();
        setCount(count+1);
        // setValues(Array(count).fill(''));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            'title' : formData.title,
            'duration' : formData.duration,
            'instructor' : formData.instructor,
            'description' : formData.description,
            'materials' : values
        }

        const url = 'http://182.180.54.158:10201/courses/add';
        axios.post(url,data).then((resp)=>{
            console.log(resp);
            alert(resp.data.Message)
        })
    };

    useEffect(()=>{
        const url = 'http://182.180.54.158:10201/materials';
        axios.get(url).then((resp)=>{
            console.log(resp);
          setMaterials(resp.data.data);
        })
    },[])
  return (
    <div>
      <h2>Create a New Course</h2>
      <form >
        <div>
          <label htmlFor="Title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) => 
                setFormData({ ...formData, title: e.target.value })
              }
            required
          />

        </div>

        <div>
          <label htmlFor="Instructor">Instructor:</label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={formData.instructor}
            onChange={(e) => 
                setFormData({ ...formData, instructor: e.target.value })
              }
            required
          />

        </div>

        <div>
          <label htmlFor="duration">Duration:</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={(e) => 
                setFormData({ ...formData, duration: e.target.value })
              }
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) => 
                setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>

        <label htmlFor="Materials">Materials</label>
        {dropdowns}
        <button className='addbutton' onClick={(e)=>{handleCount(e)}}> Add Material </button>
        <button onClick={(e)=>{handleSubmit(e)}}>Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
