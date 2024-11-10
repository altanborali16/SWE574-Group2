import React, { useReducer, useEffect, useState } from "react";
import "../../Styles/AdvancedSearch.css";
import BasicSearch from "../Inputs/AdvancedSearchInputs/BasicSearch";

const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_OPERATOR":
      return { ...state, operator: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_AUTHOR":
      return { ...state, author: action.payload };
    case "SET_START_DATE":
      return { ...state, startDate: action.payload };
    case "SET_END_DATE":
      return { ...state, endDate: action.payload };
    case "SET_TEMPLATE":
      const selectedTemplate = action.payload;
      return {
        ...state,
        template: selectedTemplate?.name || "",
        templateFields: selectedTemplate?.fields
          ? selectedTemplate.fields.reduce((acc, field) => {
              acc[field.name] = field.dataType;
              return acc;
            }, {})
          : {},
      };
    case "CREATE_SEARCH_INPUTS":
      return {
        ...state,
        templateSearchInputs: action.payload.value,
      };
    default:
      return state;
  }
};

const postInitialState = {
  operator: "AND",
  title: "",
  author: "",
  startDate: "",
  endDate: "",
  template: "",
  templateFields: {},
  templateSearchInputs: {},
};

const dataTypeReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEMPLATE_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};

function AdvancedSearchForm({
  formPlace,
  community,
  setSearchObject,
  setIsSearchForm,
}) {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const [postState, postDispatch] = useReducer(postReducer, postInitialState);
  const [dataTypeState, dataTypeDispatch] = useReducer(dataTypeReducer, {});

  const [basicSearch, setBasicSearch] = useState({});
  console.log({ postState });
  console.log({ dataTypeState });

  const handleSave = () => {
    console.log("Data Type State before saving:", dataTypeState);

    const updatedPostState = {
      ...postState,
      templateSearchInputs: dataTypeState,
    };
    setSearchObject((prev) => ({
      ...prev,
      postSearch: updatedPostState,
      basicSearch: basicSearch,
    }));
    setIsSearchForm(false);
  };

  console.log({ basicSearch });
  return (
    <div className="advanced-search-form-container">
      <BasicSearch
        setBasicSearch={setBasicSearch}
        community={community}
        formPlace="community"
      />
      {basicSearch?.filters?.posts && (
        <div className="post-search-container">
          <h5>Post Search</h5>
          <div>
            <label>Operator:</label>
            <select
              value={postState.operator}
              onChange={(e) =>
                postDispatch({ type: "SET_OPERATOR", payload: e.target.value })
              }
            >
              <option value="AND">AND</option>
              <option value="OR">OR</option>
              <option value="NOT">NOT</option>
            </select>
          </div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={postState.title}
              onChange={(e) =>
                postDispatch({ type: "SET_TITLE", payload: e.target.value })
              }
              placeholder="Enter title"
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              value={postState.author}
              onChange={(e) =>
                postDispatch({ type: "SET_AUTHOR", payload: e.target.value })
              }
              placeholder="Enter author name"
            />
          </div>

          <div>
            <label>Start Date:</label>
            <input
              type="date"
              value={postState.startDate}
              onChange={(e) =>
                postDispatch({
                  type: "SET_START_DATE",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label>End Date:</label>
            <input
              type="date"
              value={postState.endDate}
              onChange={(e) =>
                postDispatch({ type: "SET_END_DATE", payload: e.target.value })
              }
            />
          </div>

          {community.templates.length > 0 && (
            <div>
              <label>Template:</label>
              <select
                value={postState.template}
                onChange={(e) => {
                  const selectedTemplate = community.templates.find(
                    (template) => template.name === e.target.value
                  );
                  postDispatch({
                    type: "SET_TEMPLATE",
                    payload: selectedTemplate,
                  });
                }}
              >
                <option value="">Select Template</option>
                {community.templates.map((template, index) => (
                  <option key={index} value={template.name}>
                    {template.name}
                  </option>
                ))}
              </select>
              {postState.template && (
                <div className="template-details">
                  <h3>Template Details</h3>
                  <p>You have selected: {postState.template}</p>

                  {Object.keys(postState.templateFields).map((field, index) => (
                    <>
                      {postState.templateFields[field] === "TEXT" && (
                        <div key={index}>
                          <label>{field}:</label>
                          <input
                            type="text"
                            value={
                              dataTypeState?.[field] ? dataTypeState[field] : ""
                            }
                            onChange={(e) =>
                              dataTypeDispatch({
                                type: "UPDATE_TEMPLATE_FIELD",
                                payload: { field, value: e.target.value },
                              })
                            }
                            placeholder={`Enter ${field}`}
                          />
                        </div>
                      )}
                      {postState.templateFields[field] === "IMAGE" && (
                        <div key={index}>
                          <label>{field}:</label>
                          <input
                            type="text"
                            value={
                              dataTypeState?.[field] ? dataTypeState[field] : ""
                            }
                            onChange={(e) =>
                              dataTypeDispatch({
                                type: "UPDATE_TEMPLATE_FIELD",
                                payload: { field, value: e.target.value },
                              })
                            }
                            placeholder={`Enter ${field}`}
                          />
                        </div>
                      )}
                      {postState.templateFields[field] === "GEOLOCATION" && (
                        <div key={index}>
                          <label>{field}:</label>
                          <input
                            type="text"
                            value={
                              dataTypeState?.[field] ? dataTypeState[field] : ""
                            }
                            onChange={(e) =>
                              dataTypeDispatch({
                                type: "UPDATE_TEMPLATE_FIELD",
                                payload: { field, value: e.target.value },
                              })
                            }
                            placeholder={`Enter ${field}`}
                          />
                        </div>
                      )}
                      {postState.templateFields[field] === "DATE" && (
                        <div key={index}>
                          <label>{field}:</label>
                          <input
                            type="date"
                            value={
                              dataTypeState?.[field] ? dataTypeState[field] : ""
                            }
                            onChange={(e) =>
                              dataTypeDispatch({
                                type: "UPDATE_TEMPLATE_FIELD",
                                payload: { field, value: e.target.value },
                              })
                            }
                            placeholder={`Enter ${field}`}
                          />
                        </div>
                      )}
                      {postState.templateFields[field] === "TIME" && (
                        <div key={index}>
                          <label>{field}:</label>
                          <input
                            type="time"
                            value={
                              dataTypeState?.[field] ? dataTypeState[field] : ""
                            }
                            onChange={(e) =>
                              dataTypeDispatch({
                                type: "UPDATE_TEMPLATE_FIELD",
                                payload: { field, value: e.target.value },
                              })
                            }
                            placeholder={`Enter ${field}`}
                          />
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <button onClick={handleSave}>Search</button>
    </div>
  );
}

export default AdvancedSearchForm;
