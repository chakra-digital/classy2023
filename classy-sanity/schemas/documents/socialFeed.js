export default {
  name: "socialfeed",
  type: "document",
  title: "Social Feed",
  fields: [
    {
      name: "socialaccount",
      type: "string",
      title: "Social Account",
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "socialfeedimage",
      type: "mainImage",
      title: "Social Feed Image",
    },
    {
      name: "content",
      type: "text",
      title: "Content",
    },
    {
      name: "socialtags",
      type: "array",
      title: "Social Tags",
      description: "Add social tags",
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
      name: "location",
      type: "string",
      title: "Location",
    },
    {
      name: "openseaurl",
      type: "string",
      title: "OpenSea URL",
    },
    {
      name: "joineddate",
      type: "date",
      title: "Joined Date",
      options: {
        dateFormat: "MMMM YYYY",
      },
    },
    {
      name: "following",
      type: "number",
      title: "Following Count",
    },
    {
      name: "follower",
      type: "number",
      title: "Follower Count",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "socialfeedimage",
    },
  },
};
