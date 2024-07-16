import { gcsAdapter } from "@payloadcms/plugin-cloud-storage/gcs";

export const adapter = gcsAdapter({
  options: {
    credentials: JSON.parse(process.env.GCS_CREDENTIALS || "{}"),
  },
  bucket: process.env.GCS_BUCKET,
});
