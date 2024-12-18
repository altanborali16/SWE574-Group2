export const TemplateSearch = (data, search) => {
  const { memberships, posts = [], templates } = data;

  const templateInputs = search?.postSearch?.templateSearchInputs || "";
  const template = search?.postSearch?.template || "";
  const results = [];
  console.log("len", Object.keys(templateInputs).length);

  if (Object.keys(templateInputs).length === 0 && template === "") {
    return posts;
  } else if (Object.keys(templateInputs).length === 0) {
    return posts.filter((post) => post?.template?.name === template);
  }

  posts &&
    posts.forEach((post) => {
      const contentArray = [];

      if (template == post?.template?.name) {
        post?.postContents?.forEach((content) => {
          const objectCont = {
            dataType: content?.field?.dataType,
            name: content?.field?.name,
            value: content?.value,
          };
          contentArray.push(objectCont);
        });

        const filteredContents = post?.postContents?.filter((content) => {
          const type = content?.field?.dataType;
          const name = content?.field?.name;
          const value = content?.value;
          if (type === "DATE") {
            const contentDateObject = value ? new Date(value) : null;
            if (templateInputs?.[name]?.Start) {
              const startDate = templateInputs?.[name]?.Start;
              const startDateObject = startDate ? new Date(startDate) : null;
              if (contentDateObject < startDateObject) return false;
            }
            if (templateInputs?.[name]?.End) {
              const endDate = templateInputs?.[name]?.End;
              const endDateObject = endDate ? new Date(endDate) : null;
              if (contentDateObject > endDateObject) return false;
            }
          }
          if (type === "TEXT") {
            if (
              templateInputs?.[name] &&
              !templateInputs?.[name]
                ?.toLowerCase()
                .includes(value.toLowerCase())
            ) {
              return false;
            }
          }
          if (type === "NUMBER") {
            if (
              templateInputs?.[name]?.Min &&
              Number(templateInputs?.[name]?.Min) > Number(value)
            ) {
              return false;
            }
            if (
              templateInputs?.[name]?.Max &&
              Number(templateInputs?.[name]?.Max) < Number(value)
            ) {
              return false;
            }
          }

          if (type === "TIME") {
            const tempTime = value;
            const inputTimeAfter = templateInputs?.[name]?.After;
            const inputTimeBefore = templateInputs?.[name]?.Before;

            const dateTemp = new Date(`1970-01-01T${tempTime}:00`);
            const dateAfter = new Date(`1970-01-01T${inputTimeAfter}:00`);
            const dateBefore = new Date(`1970-01-01T${inputTimeBefore}:00`);

            if (inputTimeAfter && dateTemp.getTime() < dateAfter.getTime()) {
              return false;
            }

            if (inputTimeBefore && dateTemp.getTime() > dateBefore.getTime()) {
              return false;
            }
          }

          return true;
        });
        const contentArrayNames = contentArray.map((content) => content.name);
        const filteredContentNames = filteredContents.map(
          (content) => content?.field?.name
        );

        // Her iki dizideki `name` değerlerini karşılaştırıyoruz.
        const allNamesSame =
          contentArrayNames.every((name) =>
            filteredContentNames.includes(name)
          ) &&
          filteredContentNames.every((name) =>
            contentArrayNames.includes(name)
          );

        // Eğer tüm `name` değerleri aynıysa konsola yazdırıyoruz.
        if (allNamesSame) {
          results.push(post);
        }
      }
    });

  return results;
};
