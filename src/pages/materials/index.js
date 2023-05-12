import React, { useEffect, useState } from "react";
import "./.css"
import axios from "axios";

function MaterialsPage() {

  const [materials, setMaterials] = useState([]);


  const [material, setMaterial] = useState({
    "name" : "",
    "type" : "",
    "content" : ""
  });

  useEffect(()=>{
    const url = 'http://182.180.54.158:10201/materials';
    axios.get(url).then((resp)=>{
      setMaterials(resp.data.data);
    })
  },[materials])





  const handleAddMaterial = () => {
    const url = 'http://182.180.54.158:10201/materials/add';
    axios.post(url,material).then((resp)=>{
      alert(resp.data.Message)
    })
  }

  const handleDeleteMaterial = (id) => {
    const url = 'http://182.180.54.158:10201/materials/'+id;
    axios.delete(url).then((resp)=>{
      alert(resp.data.Message)
    })

  };

  const handleEditMaterial = (id, updatedMaterial) => {
    // const updatedMaterials = materials.map((material) =>
    //   material.id === id ? updatedMaterial : material
    // );
    // setMaterials(updatedMaterials);
  };

  return (
    <div>
      <h1>Materials</h1>

      <ul>
      
        {materials.map((material) => (
          <li key={material._id}>
            <h2>{material.name}</h2>
            <p>{material.type}</p>
            <p>{material.content}</p>
            <button onClick={() => handleDeleteMaterial(material._id)}>Delete</button>
            <button onClick={() => handleEditMaterial(material._id, material)}>Edit</button>
          </li>
        ))}
      </ul>


      <h2>Add Material</h2>
      <form>
        <label>
          Name:
          <input type="text" value={material.name} 
              onChange={(e) => 
                setMaterial({ ...material, name: e.target.value })
              }
          />

        </label>
        <label>
          Type:
          <input type="text" value={material.type} 
            onChange={(e) => 
              setMaterial({ ...material, type: e.target.value })
            }
          />
        </label>

        <label>
          Content:
          <input type="text" value={material.content} 
            onChange={(e) => 
              setMaterial({ ...material, content: e.target.value })
            }
          />
        </label>
        <button type="button" onClick={handleAddMaterial}>Add Material</button>
      </form>
    </div>
  );
}

export default MaterialsPage;
