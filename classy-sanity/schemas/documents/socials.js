export default {
  name: "socials",
  type: "document",
  title: "Socials",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Title",
    },
    {
      name: "icon",
      type: "mainImage",
      title: "Icon",
    },
    {
      name: "link",
      type: "string",
      title: "Link",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "icon",
    },
  },
};
