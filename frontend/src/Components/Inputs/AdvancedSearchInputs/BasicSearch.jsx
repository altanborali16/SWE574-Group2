import { useEffect, useState, useReducer } from "react";

const initialState = {
  searchQuery: "",
  showOptions: false,
  filters: {
    posts: false,
    communities: false,
    comments: false,
    users: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "toggleOptions":
      return { ...state, showOptions: !state.showOptions };
    case "setSearchQuery":
      return { ...state, searchQuery: action.payload };
    case "toggleFilter":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload]: !state.filters[action.payload],
        },
      };
    default:
      return state;
  }
}

function BasicSearch({ setBasicSearch, community, formPlace }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    setBasicSearch((prev) => ({ ...prev, ...state }));
  }, [state]);
  return (
    <div>
      <div>
        <h4>{community ? `Search on the ${community.name}` : "Search"}</h4>
        <br />
        <input
          type="text"
          placeholder="Search..."
          value={state.searchQuery}
          onClick={() => dispatch({ type: "toggleOptions" })}
          onChange={(e) =>
            dispatch({ type: "setSearchQuery", payload: e.target.value })
          }
        />
      </div>

      {
        <div className="advance-search">
          <p>Select Search Filters:</p>
          <label>
            <input
              type="checkbox"
              checked={state.filters.posts}
              onChange={() =>
                dispatch({ type: "toggleFilter", payload: "posts" })
              }
            />
            Posts
          </label>
          {formPlace !== "community" && (
            <label>
              <input
                type="checkbox"
                checked={state.filters.communities}
                onChange={() =>
                  dispatch({ type: "toggleFilter", payload: "communities" })
                }
              />
              Communities
            </label>
          )}
          <label>
            <input
              type="checkbox"
              checked={state.filters.comments}
              onChange={() =>
                dispatch({ type: "toggleFilter", payload: "comments" })
              }
            />
            Comments
          </label>
          <label>
            <input
              type="checkbox"
              checked={state.filters.users}
              onChange={() =>
                dispatch({ type: "toggleFilter", payload: "users" })
              }
            />
            Users
          </label>
        </div>
      }
    </div>
  );
}

export default BasicSearch;
