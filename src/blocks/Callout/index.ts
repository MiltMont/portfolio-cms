import { Block } from "payload/types";

import { blockFields } from "../../fields/blockFields";

export const Callout: Block = {
  slug: "callout",
  fields: [
    blockFields({
      name: "calloutFields",
      fields: [
        {
          name: "enableCalloutHeading",
          type: "checkbox",
          label: "Enable Heading",
          defaultValue: true,
        },
        {
          name: "calloutHeading",
          type: "richText",
          admin: {
            condition: (_, { enableCalloutHeading } = {}) =>
              Boolean(enableCalloutHeading),
          },
        },
        {
          name: "calloutBody",
          type: "richText",
        },
      ],
    }),
  ],
};
