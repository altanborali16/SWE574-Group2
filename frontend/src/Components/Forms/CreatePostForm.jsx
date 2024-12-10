import React, { useState } from "react";
import "../../Styles/CreatePostFrom.css";
import { useNotificationContext } from "../../Context/useNotificationContext";

const CreatePostForm = ({ templates, onPostCreated, onClose }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const { showNotification } = useNotificationContext(); // Use the notification context
  const [postData, setPostData] = useState({
    title: "",
    template: { id: null },
    postContents: [],
  });

  const handleTemplateChange = (templateId) => {
    if (!templateId) {
      // Reset if no template is selected
      setSelectedTemplate(null);
      setPostData({
        ...postData,
        template: { id: null },
        postContents: [],
      });
      return;
    }

    const template = templates.find((t) => t.id === templateId);
    if (template) {
      setSelectedTemplate(template);
      setPostData({
        ...postData,
        template: { id: templateId },
        postContents: template.fields.map((field) => ({
          field: { id: field.id, name: field.name, dataType: field.dataType },
          value: "",
        })),
      });
    }
  };

  const handleInputChange = (index, value) => {
    const newPostContents = [...postData.postContents];
    newPostContents[index].value = value;
    setPostData({ ...postData, postContents: newPostContents });
  };

  const handleTitleChange = (e) => {
    setPostData({ ...postData, title: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if a template is selected
    if (!postData.template.id) {
      showNotification({
        title: "Error",
        message: "Please select a template before creating a post.",
        variant: "danger",
      });
      return;
    }

    const now = new Date();
    const currentTime = now.toISOString().slice(0, 19); // "YYYY-MM-DDTHH:MM:SS"
    const finalPostData = {
      ...postData,
      time: currentTime, // Automatically set the time to the current timestamp
    };

    console.log("Post Data:", finalPostData);

    // Here you can make an API call to save the post
    if (onPostCreated) {
      onPostCreated(finalPostData); // Notify parent component if needed
    }
    // Optionally close the form after submission
    if (onClose) {
      onClose();
    }
    showNotification({
      title: "Success",
      message: "Post created successfully!",
      variant: "success",
    });
  };

  return (
    <div className="create-post-form">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          id="title"
          value={postData.title}
          onChange={handleTitleChange}
          required
        />

        <label htmlFor="template">Select Template:</label>
        <select
          id="template"
          onChange={(e) => handleTemplateChange(Number(e.target.value))}
          value={selectedTemplate ? selectedTemplate.id : ""}
          required
        >
          <option value="">Select a template</option>
          {templates.map((template) => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>

        {selectedTemplate &&
          selectedTemplate.fields.map((field, index) => (
            <div key={field.id}>
              <label>{field.name}:</label>
              {field.dataType === "DATE" ? (
                <input
                  type="date"
                  value={postData.postContents[index]?.value || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  required
                />
              ) : field.dataType === "TIME" ? (
                <input
                  type="time"
                  value={postData.postContents[index]?.value || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  required
                />
              ) : field.dataType === "UNSIGNED_NUMBER" ? (
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={postData.postContents[index]?.value || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  required
                />
              ) : field.dataType === "SIGNED_NUMBER" ? (
                <input
                  type="number"
                  step="any"
                  value={postData.postContents[index]?.value || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  required
                />
              ) : (
                <input
                  type="text"
                  value={postData.postContents[index]?.value || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  required
                />
              )}
            </div>
          ))}
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
