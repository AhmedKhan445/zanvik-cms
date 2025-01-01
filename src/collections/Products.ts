import { CollectionConfig, FieldHook } from "payload/types";

const format = (val: string): string =>
  val
    .replace(/ /g, "-")
    .replace(/[^\w-/]+/g, "")
    .toLowerCase();

const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === "string") {
      return format(value);
    }
    const fallbackData = data?.[fallback] || originalDoc?.[fallback];

    if (fallbackData && typeof fallbackData === "string") {
      return format(fallbackData);
    }

    return value;
  };

const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
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
      name: "images",
      admin: {
        initCollapsed: true,
      },
      type: "array",
      fields: [
        { name: "media", type: "upload", relationTo: "media", required: true },
      ],
    },
    {
      name: "stock",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("name")],
      },
    },
    {
      type: "row",
      admin: {
        position: "sidebar",
      },
      fields: [
        {
          name: "price",
          type: "number",
          required: true,
          admin: {
            width: "50%",
          },
        },
        {
          name: "compareToPrice",
          type: "number",
          required: true,
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "varientActive",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "colorVarients",
      type: "relationship",
      relationTo: "varients",
      required: true,
      hasMany: true,
      admin: {
        condition: (data) => {
          if (data.varientActive) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    {
      name: "quantityBundles",
      type: "array",
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "title",
              type: "text",
              admin: {
                width: "50%",
              },
            },
            {
              name: "price",
              type: "number",
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "isShipping",
              label: "Free Shipping",
              type: "checkbox",
              defaultValue: false,
              admin: {
                width: "50%",
              },
            },
            {
              name: "isPopular",
              label: "Popular",
              type: "checkbox",
              defaultValue: false,
              admin: {
                width: "50%",
              },
            },
          ],
        },
      ],
    },
    {
      name: "productBundleActive",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "productBundleName",
      type: "text",
      admin: {
        condition: (data) => {
          if (data.productBundleActive) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    {
      name: "productBundles",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      admin: {
        condition: (data) => {
          if (data.productBundleActive) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "tagActive",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "tagTitle",
      type: "text",
      admin: {
        position: "sidebar",
        condition: (data) => {
          if (data.tagActive) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    {
      name: "sections",
      type: "array",
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: "section",
          type: "relationship",
          relationTo: "productSections",
        },
      ],
    },
  ],
};

export default Products;
