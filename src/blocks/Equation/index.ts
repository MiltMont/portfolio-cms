import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";

export const Equation: Block = {
  slug: "equation",
  fields: [
    blockFields({
      name: "equationFields",
      fields: [
        {
          name: "richText",
          type: "richText",
        },
      ],
    }),
  ],
};
