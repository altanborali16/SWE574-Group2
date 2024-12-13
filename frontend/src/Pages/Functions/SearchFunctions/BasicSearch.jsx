export const basicSearch = (data, search) => {
  const { memberships, posts = [], templates } = data;

  const query = search?.basicSearch?.searchQuery?.toLowerCase().trim() || "";
  const results = [];

  if (query === "") {
    return posts;
  }

  if (posts.length !== 0 && query) {
    posts.forEach((post) => {
      const hasMatch = Object.values(post).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(query)
      );

      if (hasMatch && !results.includes(post)) {
        results.push(post);
      }

      if (post?.postContents.length > 0) {
        const hasMatchContentField = post.postContents.some((content) => {
          return (
            content?.field && content.field.name.toLowerCase().includes(query)
          );
        });

        if (hasMatchContentField && !results.includes(post)) {
          results.push(post);
        }
      }

      if (post?.postContents.length > 0) {
        const hasMatchContent = post.postContents.some((content) => {
          return (
            content.field &&
            content.field.dataType === "TEXT" &&
            typeof content?.value === "string" &&
            content?.value.toLowerCase().includes(query)
          );
        });

        if (hasMatchContent && !results.includes(post)) {
          results.push(post);
        }
      }
    });

    if (search?.basicSearch?.filters?.comments) {
      posts.forEach((post) => {
        post?.comments.forEach((comment) => {
          const commentMatch = comment?.content.toLowerCase().includes(query);
          if (commentMatch && !results.includes(post)) {
            results.push(post);
          }
          if (comment?.replies?.length > 0) {
            comment.replies.forEach((rep) => {
              const repliesMatch = rep.content.toLowerCase().includes(query);
              if (repliesMatch && !results.includes(post)) {
                results.push(post);
              }
            });
          }
        });
      });
    }

    return results;
  }
};
