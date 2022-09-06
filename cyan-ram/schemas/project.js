export default {
  name: "Projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
};

/*
id: uuidv4(),
    heading: "Collaborative Coding Board",
    description:
      "A coding board where you can share your code with other people in real time, with a real time chat feature.",
    link: "",
    image:
*/
