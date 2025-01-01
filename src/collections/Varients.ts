import { CollectionConfig } from "payload/types";

const Varients: CollectionConfig = {
  slug: "varients",
  admin: {
    useAsTitle: "updatedName",
  },
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "updatedName",
      type: "text",
      admin: {
        hidden: true,
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            return `${data.name} (${data.color})`;
          },
        ],
      },
    },
    {
      name: "color",
      type: "text",
      required: true,
    },
    { name: "image", type: "upload", relationTo: "media", required: true },
    {
      name: "stock",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
      required: true,
    },
  ],
};

export default Varients;
