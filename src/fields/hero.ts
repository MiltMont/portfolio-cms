import type { Field } from "payload/types";

import link from "./link";
import linkGroup from "./linkGroup";
import { themeField } from "./blockFields";

export const hero: Field = {
  name: "hero",
  label: false,
  type: "group",
  fields: [
    {
      type: "select",
      name: "type",
      label: "Type",
      required: true,
      defaultValue: "default",
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Home",
          value: "home",
        },
        {
          label: "Centered Content",
          value: "centered",
        },
      ],
    },
    themeField,
    {
      name: "richText",
      type: "richText",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        condition: (_, { type } = {}) => ["default", "home"].includes(type),
      },
    },
    {
      type: "collapsible",
      label: "Breadcrumbs Bar",
      fields: [
        {
          type: "checkbox",
          name: "enableBreadcrumbsBar",
          label: "Enable Breadcrumbs Bar",
        },
        linkGroup({
          overrides: {
            name: "breadcrumbsBarLinks",
            labels: {
              singular: "Link",
              plural: "Links",
            },
            admin: {
              condition: (_, { enableBreadcrumbsBar } = {}) =>
                Boolean(enableBreadcrumbsBar),
            },
          },
          appearances: false,
        }),
      ],
    },
  ],
};
