import { GlobalConfig } from "payload/types";

const checkDisountActive = (data) => {
  if (data.discountCountDownActive) {
    return true;
  } else {
    return false;
  }
};

const Settings: GlobalConfig = {
  slug: "settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "featuredProduct",
      type: "relationship",
      relationTo: "products",
    },
    {
      name: "shippingPrice",
      type: "number",
      required: true,
    },
    {
      name: "freeShippingThreshold",
      type: "number",
      required: true,
    },
    {
      name: "discountCountDownActive",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "countDownTitle",
      type: "text",
      admin: {
        condition: checkDisountActive,
      },
    },
    {
      name: "countDownSubTitle",
      type: "text",
      admin: {
        condition: checkDisountActive,
      },
    },
    {
      name: "discountedPrice",
      type: "number",
      admin: {
        condition: checkDisountActive,
      },
    },
    {
      name: "countDownEndDate",
      type: "date",
      admin: {
        condition: checkDisountActive,
      },
    },
    {
      name: "featuredReviews",
      type: "array",
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "rating",
          type: "number",
        },
        {
          name: "comment",
          type: "text",
        },
        {
          name: "product",
          type: "relationship",
          relationTo: "products",
        },
      ],
    },
  ],
};

export default Settings;
