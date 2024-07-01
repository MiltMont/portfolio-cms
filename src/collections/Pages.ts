import type { CollectionConfig } from "payload/types";

import { isAdmin } from "../access/isAdmin";
import { publishedOnly } from "../access/publishedOnly";
import { formatPreviewURL } from "../utilities/formatPreviewURL";
import { revalidatePage } from "../utilities/revalidatePage";
import { fullTitle } from "../fields/fullTitle";
import { slugField } from "../fields/slug";
import { hero } from "../fields/hero";

import { MediaBlock } from "../blocks/Media";
import { Content } from "../blocks/Content";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    preview: (doc) => formatPreviewURL("pages", doc),
    defaultColumns: ["fullTitle", "slug", "createdAt", "updatedAt"],
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
  hooks: {
    afterChange: [],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    fullTitle,
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [hero],
        },
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              required: true,
              blocks: [MediaBlock, Content],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
};
