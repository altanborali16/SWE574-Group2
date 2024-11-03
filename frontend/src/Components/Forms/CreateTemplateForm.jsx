import React, { useState } from 'react';
import "../../Styles/CreateTemplateForm.css"

const CreateTemplateForm = ({ onTemplateCreated, onClose }) => {
    const [templateName, setTemplateName] = useState('');
    const [templateDescription, setTemplateDescription] = useState('');
    const [fields, setFields] = useState([{ name: '', dataType: 'TEXT' }]); // Initial field
  
    // Handlers for input changes
    const handleTemplateNameChange = (e) => setTemplateName(e.target.value);
    const handleTemplateDescriptionChange = (e) => setTemplateDescription(e.target.value);
  
    const handleFieldChange = (index, key, value) => {
      const updatedFields = [...fields];
      updatedFields[index][key] = value;
      setFields(updatedFields);
    };
  
    // Add and remove fields
    const addField = () => {
      setFields([...fields, { name: '', dataType: 'TEXT' }]);
    };
  
    const removeField = (index) => {
      setFields(fields.filter((_, i) => i !== index));
    };
  
    // Submit handler
    const  handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      const templateData = {
        name: templateName,
        description: templateDescription,
        fields,
      };
      console.log('Template Data:', templateData);
      // Pass the newly created template back to the parent component
      onTemplateCreated(templateData);
      // Reset form after submission
      setTemplateName('');
      setTemplateDescription('');
      setFields([{ name: '', dataType: 'TEXT' }]);
      // Close the form modal
      onClose();
    };
  
    return (
      <form onSubmit={handleSubmit} className="create-template-form">
        <h2>Create Template</h2>
  
        <label htmlFor="templateName">Template Name</label>
        <input
          type="text"
          id="templateName"
          value={templateName}
          onChange={handleTemplateNameChange}
          required
        />
  
        <label htmlFor="templateDescription">Description</label>
        <textarea
          id="templateDescription"
          value={templateDescription}
          onChange={handleTemplateDescriptionChange}
          rows="4"
          required
        />
  
        <h3>Fields</h3>
        {fields.map((field, index) => (
          <div key={index} className="field-group">
            <input
              style={{marginBottom : "2vh"}}
              type="text"
              placeholder="Field Name"
              value={field.name}
              onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
              required
            />
            <select
              value={field.dataType}
              onChange={(e) => handleFieldChange(index, 'dataType', e.target.value)}
            >
              <option value="TEXT">Text</option>
              <option value="IMAGE">Image</option>
              <option value="GEOLOCATION">Geolocation</option>
            </select>
            <button type="button" style={{backgroundColor : "red", marginTop : "2vh"}} onClick={() => removeField(index)}>
              Remove Field
            </button>
          </div>
        ))}
  
        <button type="button" onClick={addField}>
          Add Field
        </button>
  
        <button style={{backgroundColor : "green"}} type="submit">Create Template</button>
      </form>
    );
  };
  
  export default CreateTemplateForm;