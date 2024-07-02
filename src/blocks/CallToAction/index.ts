import type { Block } from "payload/types";

import { blockFields } from "../../fields/blockFields";
import linkGroup from "../../fields/linkGroup";

export const CallToAction: Block = {
  slug: "cta",
  labels: {
    singular: "Call to Action",
    plural: "Calls to Action",
  },
  fields: [
    blockFields({
      name: "ctaFields",
      fields: [
        {
          name: "ctaContent",
          type: "richText",
        },
        linkGroup({
          appearances: false,
        }),
      ],
    }),
  ],
};
