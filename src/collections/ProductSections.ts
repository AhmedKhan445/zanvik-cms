import { CollectionConfig } from "payload/types";

const ProductSections: CollectionConfig = {
  slug: "productSections",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "moreProductActive",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "products",
      type: "array",
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: "products",
        },
      ],
    },
  ],
};

export default ProductSections;
