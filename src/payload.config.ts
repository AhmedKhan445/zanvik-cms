import path from "path";

import seoPlugin from "@payloadcms/plugin-seo";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Products from "./collections/Products";
import Media from "./collections/Media";
import Reviews from "./collections/Reviews";
import ProductSections from "./collections/ProductSections";
import Categories from "./collections/Categories";
import Settings from "./collections/Settings";
import Orders from "./collections/Orders";
import Messages from "./collections/Messages";
import Varients from "./collections/Varients";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Products,
    Varients,
    Media,
    Reviews,
    ProductSections,
    Categories,
    Orders,
    Messages,
  ],
  globals: [Settings],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  cors: [process.env.FRONTEND_URI],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    seoPlugin({
      collections: ["products"],
      uploadsCollection: "media",
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
