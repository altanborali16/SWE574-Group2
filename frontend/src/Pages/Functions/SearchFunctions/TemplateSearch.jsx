export const TemplateSearch = (data, search) => {
  console.log({ data, search });
  const { memberships, posts = [], templates } = data;
  console.log({ posts });

  const templateInputs = search?.postSearch?.templateSearchInputs || "";
  const templateFields = search?.postSearch?.templateFields || "";
  const template = search?.postSearch?.template || "";

  posts &&
    posts.forEach((post) => {
      const contentArray = [];
      const contentKeys = [];
      const searchArray = [];
      const searchKeys = Object.keys(templateFields);

      if (template == post?.template?.name) {
        post?.postContents?.forEach((content) => {
          const objectCont = {
            dataType: content?.field?.dataType,
            name: content?.field?.name,
            value: content?.value,
          };
          contentArray.push(objectCont);
          contentKeys.push(content?.field?.name);
        });

        post?.postContents?.filter((content) => {
          const type = content?.field?.dataType;
          const name = content?.field?.name;
          const value = content?.value;
          if (type === "DATE") {
            const contentDateObject = value ? new Date(value) : null;
            if (templateInputs?.[name]?.Start) {
              const startDate = templateInputs?.[name]?.Start;
              const startDateObject = startDate ? new Date(startDate) : null;
              if (contentDateObject > startDateObject) return false;
            }
            if (templateInputs?.[name]?.End) {
              const endDate = templateInputs?.[name]?.End;
              const endDateObject = endDate ? new Date(endDate) : null;
              if (contentDateObject < endDateObject) return false;
            }
          }
          if (type === "TEXT") {
            if (templateInputs?.[name] && templateInputs?.[name] !== value) {
              return false;
            }
          }
        });

        console.log({ contentArray, contentKeys, searchKeys });
      }
    });

  return <></>;
};
