export const PostSearch = (data, search) => {
  const { memberships, posts = [], templates } = data;

  const { title, author, endDate, startDate } = search?.postSearch || "";

  const endDateObject = endDate ? new Date(endDate) : null;
  const startDateObject = startDate ? new Date(startDate) : null;

  if (!author && !endDate && !startDate && !title) {
    return posts;
  } else {
    const filteredPosts = posts.filter((post) => {
      const postDateString = post?.time.split("T")[0];
      const postDateObject = new Date(postDateString);

      if (
        author &&
        !post?.author?.username.toLowerCase().includes(author.toLowerCase())
      ) {
        return false;
      }
      // title filter
      if (title && !post?.title.toLowerCase().includes(title.toLowerCase())) {
        return false;
      }

      // endDate filter
      if (endDateObject && postDateObject > endDateObject) {
        return false; // endDate'den önceyse çıkar
      }

      // startDate filter
      if (startDateObject && postDateObject < startDateObject) {
        return false;
      }

      return true;
    });
    return filteredPosts;
  }
};
