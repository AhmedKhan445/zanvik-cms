import { CollectionConfig } from "payload/types";

const Orders: CollectionConfig = {
  slug: "orders",
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
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "address",
      type: "text",
      required: true,
    },
    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "text",
    },
    {
      name: "status",
      type: "select",
      defaultValue: "unfulfilled",
      admin: {
        position: "sidebar",
      },
      options: [
        {
          label: "Unfulfilled",
          value: "unfulfilled",
        },
        {
          label: "Confirmed",
          value: "confirmed",
        },
        {
          label: "Fulfilled",
          value: "fulfilled",
        },
        {
          label: "Cancelled",
          value: "cancelled",
        },
        {
          label: "Returned",
          value: "returned",
        },
      ],
    },
    {
      name: "comment",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "paymentMethod",
      type: "select",
      admin: {
        position: "sidebar",
      },
      options: [
        {
          label: "Cash on Delivery (COD)",
          value: "cash-on-delivery",
        },
        {
          label: "Bank Deposit",
          value: "bank-deposit",
        },
        {
          label: "JazzCash",
          value: "jazzcash",
        },
        {
          label: "Easypaisa",
          value: "easypaisa",
        },
      ],
    },
    {
      name: "subtotal",
      type: "number",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "shipping",
      type: "number",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "discount",
      type: "number",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "total",
      type: "number",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "orderProducts",
      type: "array",
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: ["products", "varients"],
        },
        {
          name: "quantity",
          type: "number",
          required: true,
        },
        {
          name: "price",
          type: "number",
          required: true,
        },
        {
          name: "subtotal",
          type: "number",
          required: true,
        },
      ],
    },
  ],
};

export default Orders;
