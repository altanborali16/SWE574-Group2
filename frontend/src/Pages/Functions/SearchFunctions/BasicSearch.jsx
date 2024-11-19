export const basicSearch = (data, search) => {
  console.log({ data, search });
  const { memberships, posts = [], templates } = data;
  console.log({ memberships, posts, templates });

  const query = search?.basicSearch?.searchQuery || "";
  const results = [];

  if (posts.length !== 0 && query) {
    posts.forEach((post) => {
      const hasMatch = Object.values(post).some(
        (value) => typeof value === "string" && value.includes(query)
      );

      if (post?.postContents.length > 0) {
        const hasMatchContent = post.postContents.some((content) => {
          return (
            content.field && content.field.name.toLowerCase().includes(query)
          );
        });

        if (hasMatchContent && !results.includes(post)) {
          results.push(post);
        }
      }

      if (post?.postContents.length > 0) {
        const hasMatchContent = post.postContents.some((content) => {
          return (
            content.field &&
            content.field.datatype === "TEXT" &&
            typeof content.field.value === "string" &&
            content.field.value.toLowerCase().includes(query)
          );
        });

        if (hasMatchContent && !results.includes(post)) {
          results.push(post);
        }
      }

      if (hasMatch && !results.includes(post)) {
        results.push(post);
      }
    });
  }
  console.log({ results });

  return results;
};
