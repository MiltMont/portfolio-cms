import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";

export const FeaturedPost: Block = {
  slug: "featuredPost",
  fields: [
    blockFields({
      name: "featuredPostFields",
      fields: [
        {
          name: "featuredPost",
          type: "relationship",
          relationTo: "posts",
          required: true,
        },
      ],
    }),
  ],
};
