export default {
  name: "teams",
  type: "document",
  title: "Teams",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the team member",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      type: "mainImage",
      title: "Image",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
      media: "image",
    },
  },
};
