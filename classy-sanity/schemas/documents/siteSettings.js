export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", "create", "delete", "publish"],
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
      description:
        "Describe your site for search engines and display the project about section",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describe your site.",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "author",
      type: "string",
      description: "publish an author and set a reference to them here.",
      title: "Author",
    },
    {
      name: "herovideo",
      type: "mainVimeoVideo",
      title: "Hero Video"
    },
    {
      name: "logoimage",
      type: "mainImage",
      title: "Logo Image",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "logoimage",
    },
  },
};
