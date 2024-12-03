import { CollectionConfig } from "payload/types";

const Reviews: CollectionConfig = {
  slug: "reviews",
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "rating",
      type: "number",
      required: true,
    },
    {
      name: "comment",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "product",
      type: "relationship",
      relationTo: "products",
      required: true,
    },
  ],
};

export default Reviews;
