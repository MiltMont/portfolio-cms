import path from "path";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Footer } from "./globals/Footer";
import { Pages } from "./collections/Pages";
import { Posts } from "./collections/Posts";
import { Categories } from "./collections/Categories";
import { MainMenu } from "./globals/MainMenu";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { adapter } from "./adapter";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Pages, Posts, Categories, Media, Users],
  globals: [MainMenu, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: adapter,
        },
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
