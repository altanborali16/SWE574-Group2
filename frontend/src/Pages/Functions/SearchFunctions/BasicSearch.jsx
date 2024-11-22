export const basicSearch = (data, search) => {
  console.log({ data, search });
  const { memberships, posts = [], templates } = data;
  console.log({ memberships, posts, templates });

  const query = search?.basicSearch?.searchQuery?.toLowerCase().trim() || "";
  console.log({ query });
  const results = [];

  if (posts.length !== 0 && query) {
    posts.forEach((post) => {
      const hasMatch = Object.values(post).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(query)
      );
      console.log({ hasMatch });
      // console.log(Object.values(post));

      if (hasMatch && !results.includes(post)) {
        console.log("Value match");
        results.push(post);
      }

      if (post?.postContents.length > 0) {
        const hasMatchContentField = post.postContents.some((content) => {
          return (
            content?.field && content.field.name.toLowerCase().includes(query)
          );
        });

        if (hasMatchContentField && !results.includes(post)) {
          console.log("Field match");
          results.push(post);
        }
      }

      if (post?.postContents.length > 0) {
        const hasMatchContent = post.postContents.some((content) => {
          console.log(content);
          return (
            content.field &&
            content.field.dataType === "TEXT" &&
            typeof content?.value === "string" &&
            content?.value.toLowerCase().includes(query)
          );
        });

        if (hasMatchContent && !results.includes(post)) {
          console.log("field content match");
          results.push(post);
        }
      }
    });
  }
  console.log({ results });

  return results;
};
