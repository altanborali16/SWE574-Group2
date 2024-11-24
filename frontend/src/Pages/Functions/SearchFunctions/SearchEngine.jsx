import { useState, useEffect } from "react";
import { basicSearch } from "./BasicSearch";
import { PostSearch } from "./PostSearch";
import { TemplateSearch } from "./TemplateSearch";
import { MemberSearch } from "./MemberSearch";

// Custom hook olarak searchEngine
export const useSearchEngine = (data, search, subscribers) => {
  let intersectionPostTemp = [];
  let intersectionBasic = [];
  const [result, setResult] = useState([]);
  const [memberResult, setMemberResult] = useState([]);

  useEffect(() => {
    if (Object.keys(search).length !== 0) {
      const basicResults = basicSearch(data, search);
      const postResults = PostSearch(data, search);
      const templateResults = TemplateSearch(data, search);
      const subscriberResults = MemberSearch(data, search, subscribers);

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
      if (search?.basicSearch?.filters.users) {
        setMemberResult(subscriberResults);
      }
    }
  }, [data, search]);

  console.log({ result, memberResult });

  return { result, memberResult };
};
