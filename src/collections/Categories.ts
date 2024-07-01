import { CollectionConfig } from "payload/types";

export const Categories: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
  ],
};
