import type { Block } from "payload/types";

import { blockFields } from "../../fields/blockFields";

export const Content: Block = {
  slug: "content",
  fields: [
    blockFields({
      name: "contentFields",
      fields: [
        {
          name: "useLeadingHeader",
          label: "Use Leading Header",
          type: "checkbox",
        },
        {
          name: "leadingHeader",
          label: "Leading Header",
          type: "richText",
          admin: {
            condition: (_, siblingData) => siblingData.useLeadingHeader,
          },
        },
        {
          name: "layout",
          type: "select",
          defaultValue: "centered",
          options: [
            {
              label: "Centered",
              value: "centered",
            },
            {
              label: "One Column",
              value: "oneColumn",
            },
            {
              label: "Two Columns",
              value: "twoColumns",
            },
            {
              label: "Two Thirds + One Third",
              value: "twoThirdsOneThird",
            },
            {
              label: "Half + Half",
              value: "halfAndHalf",
            },
            {
              label: "Three Columns",
              value: "threeColumns",
            },
          ],
        },
        {
          name: "columnOne",
          type: "richText",
        },
        {
          name: "columnTwo",
          type: "richText",
          admin: {
            condition: (_, siblingData) =>
              [
                "twoColumns",
                "twoThirdsOneThird",
                "halfAndHalf",
                "threeColumns",
              ].includes(siblingData.layout),
          },
        },
        {
          name: "columnThree",
          type: "richText",
          admin: {
            condition: (_, siblingData) =>
              siblingData.layout === "threeColumns",
          },
        },
      ],
    }),
  ],
};
