import { useState, useEffect } from "react";
import { basicSearch } from "./BasicSearch";
import { PostSearch } from "./PostSearch";
import { TemplateSearch } from "./TemplateSearch";

// Custom hook olarak searchEngine
export const useSearchEngine = (data, search) => {
  const [basicSearchResults, setBasicSearchResults] = useState([]);

  useEffect(() => {
    if (Object.keys(search).length !== 0) {
      //const basicResults = basicSearch(data, search);
      const postResults = PostSearch(data, search);
      //setBasicSearchResults(basicResults);
      //const templateResults = TemplateSearch(data, search);
    }
  }, [data, search]);

  console.log();
  return basicSearchResults;
};
