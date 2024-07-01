import type { CollectionConfig } from "payload/types";

import { isAdmin } from "../access/isAdmin";
import { publishedOnly } from "../access/publishedOnly";

import { Content } from "../blocks/Content";
import { MediaBlock } from "../blocks/Media";

import { slugField } from "../fields/slug";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  versions: {
    drafts: true,
  },
  access: {
    create: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {},
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "summary",
      type: "richText",
      required: true,
    },
    {
      name: "content",
      type: "blocks",
      blocks: [MediaBlock, Content],
      required: true,
    },
    {
      name: "relatedPosts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        };
      },
    },
    slugField(),
    {
      name: "publishedOn",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
    },
  ],
};
