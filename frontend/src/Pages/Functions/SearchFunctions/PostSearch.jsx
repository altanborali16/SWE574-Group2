export const PostSearch = (data, search) => {
  console.log({ data, search });
  const { memberships, posts = [], templates } = data;
  console.log({ memberships, posts, templates });

  const { title, author, endDate, startDate } = search?.postSearch || "";
  console.log({ title, author, endDate, startDate });
  //   const filteredResults = [];
  //   const authorResults = [];
  //   const endDateResults = [];
  //   const startDateResults = [];

  const endDateObject = endDate ? new Date(endDate) : null;
  const startDateObject = startDate ? new Date(startDate) : null;

  if (!author && !endDate && !startDate) {
    return posts;
  }
  const filteredPosts = posts.filter((post) => {
    const postDateString = post?.time.split("T")[0];
    const postDateObject = new Date(postDateString);

    console.log(post?.author?.username);

    if (
      author &&
      !post?.author?.username.toLowerCase().includes(author.toLowerCase())
    ) {
      return false;
    }
    // title filter
    if (title && !post.title.toLowerCase().includes(title.toLowerCase())) {
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
  console.log({ filteredPosts });
  return filteredPosts;

  //   if (posts.lenght > 0) {
  //     posts.forEach((post) => {
  //       const postDateString = post?.time.split("T")[0];
  //       const postDateObject = new Date(postDateString);
  //       if (author && post.author.username === author) {
  //         authorResults.push(post);
  //       }
  //       if (endDateObject && postDateObject >= endDateObject) {
  //         endDateResults.push(post);
  //       }
  //       if (startDateObject && postDateObject <= startDateObject) {
  //         startDateResults.push(post);
  //       }
  //     });
  //   }

  //   return <div></div>;
};
