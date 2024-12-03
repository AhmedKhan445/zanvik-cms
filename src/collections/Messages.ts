import { CollectionConfig } from "payload/types";

const Messages: CollectionConfig = {
  slug: "messages",
  access: {
    create: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "email",
      type: "text",
    },
    {
      name: "message",
      type: "text",
    },
  ],
};

export default Messages;
