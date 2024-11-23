import { useState, useEffect } from "react";
import { basicSearch } from "./BasicSearch";
import { PostSearch } from "./PostSearch";
import { TemplateSearch } from "./TemplateSearch";

// Custom hook olarak searchEngine
export const useSearchEngine = (data, search) => {
  let intersectionPostTemp = [];
  let intersectionBasic = [];
  let uniqueResults = [];
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (Object.keys(search).length !== 0) {
      const basicResults = basicSearch(data, search);
      const postResults = PostSearch(data, search);
      const templateResults = TemplateSearch(data, search);

      intersectionPostTemp = postResults?.filter((post) =>
        templateResults?.some((templatePost) => templatePost.id === post.id)
      );

      if (search?.postSearch?.operator === "AND") {
        if (basicResults.length > 0) {
          intersectionBasic = basicResults.filter((post) =>
            intersectionPostTemp?.some((tempPost) => tempPost.id === post.id)
          );
        }
      } else if (search?.postSearch?.operator === "OR") {
        if (basicResults.length > 0) {
          const combinedResults = [...basicResults, ...intersectionPostTemp];

          intersectionBasic = combinedResults?.filter(
            (post, index, self) =>
              self.findIndex((p) => p.id === post.id) === index
          );
        }
      } else if (search?.postSearch?.operator === "NOT") {
        if (basicResults.length > 0) {
          intersectionBasic = basicResults.filter(
            (post) =>
              !intersectionPostTemp.some((tempPost) => tempPost.id === post.id)
          );
        }
      }
      console.log({ basicResults, postResults, templateResults });
      console.log("intPostTemp", intersectionPostTemp);
      console.log("intersect", intersectionBasic);
      setResult(intersectionBasic);
    }
  }, [data, search]);

  console.log("ouut", result);

  return result;
};
