export default {
  name: "about",
  type: "document",
  title: "About",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "aboutimage",
      type: "mainImage",
      title: "About Image",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "aboutimage",
    },
  },
};
