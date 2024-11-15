export const basicSearch = (data, search) => {
  console.log({ data, search });
  const { memberships, posts = [], templates } = data;
  console.log({ memberships, posts, templates });

  const query = search?.basicSearch?.searchQuery || "";
  const results = [];

  if (posts.length !== 0 && query) {
    posts.forEach((post) => {
      // Postun herhangi bir alanında query ile eşleşme olup olmadığını kontrol et
      const hasMatch = Object.values(post).some(
        (value) => typeof value === "string" && value.includes(query)
      );

      if (post?.postContents.length > 0) {
        const hasMatchContent = post.postContents.some((content) => {
          // field.datatype "text" ise, field.value içinde arama yap
          return (
            content.field && content.field.name.toLowerCase().includes(query)
          );
        });

        if (hasMatchContent && !results.includes(post)) {
          // Eğer eşleşme varsa ve post zaten sonuçlar arasında değilse ekle
          results.push(post);
        }
      }

      if (post?.postContents.length > 0) {
        const hasMatchContent = post.postContents.some((content) => {
          // field.datatype "text" ise, field.value içinde arama yap
          return (
            content.field &&
            content.field.datatype === "TEXT" &&
            typeof content.field.value === "string" &&
            content.field.value.toLowerCase().includes(query)
          );
        });

        if (hasMatchContent && !results.includes(post)) {
          // Eğer eşleşme varsa ve post zaten sonuçlar arasında değilse ekle
          results.push(post);
        }
      }

      if (hasMatch && !results.includes(post)) {
        // Eğer eşleşme varsa ve post zaten sonuçlar arasında değilse ekle
        results.push(post);
      }
    });
  }
  console.log({ results });

  return results;
};
