export const MemberSearch = (data, search, subscribers) => {
  const { memberships, posts = [], templates } = data;

  // Sorguyu kontrol et
  const query = search?.basicSearch?.searchQuery?.toLowerCase().trim() || "";

  if (!query) {
    return [];
  }

  const results = subscribers.filter((subscriber) =>
    subscriber?.username?.toLowerCase().includes(query)
  );

  return results;
};
