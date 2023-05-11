import React, { useState } from "react";
import "./.css"

function MaterialsPage() {
  const [materials, setMaterials] = useState([
    { id: 1, title: "Material 1", description: "Description 1" },
    { id: 2, title: "Material 2", description: "Description 2" },
    { id: 3, title: "Material 3", description: "Description 3" },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddMaterial = () => {
    const newMaterial = {
      id: materials.length + 1,
      title,
      description,
    };
    setMaterials([...materials, newMaterial]);
    setTitle("");
    setDescription("");
  };

  const handleDeleteMaterial = (id) => {
    const updatedMaterials = materials.filter((material) => material.id !== id);
    setMaterials(updatedMaterials);
  };

  const handleEditMaterial = (id, updatedMaterial) => {
    const updatedMaterials = materials.map((material) =>
      material.id === id ? updatedMaterial : material
    );
    setMaterials(updatedMaterials);
  };

  return (
    <div>
      <h1>Materials</h1>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>
            <h2>{material.title}</h2>
            <p>{material.description}</p>
            <button onClick={() => handleDeleteMaterial(material.id)}>Delete</button>
            <button onClick={() => handleEditMaterial(material.id, material)}>Edit</button>
          </li>
        ))}
      </ul>
      <h2>Add Material</h2>
      <form>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <button type="button" onClick={handleAddMaterial}>Add Material</button>
      </form>
    </div>
  );
}

export default MaterialsPage;
