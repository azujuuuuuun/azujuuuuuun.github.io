export const env = {
  accessKeyId: process.env.STORAGE_ACCESS_KEY_ID ?? "",
  secretAccessKey: process.env.STORAGE_SECRET_ACCESS_KEY ?? "",
  endpoint: process.env.STORAGE_API_ENDPOINT ?? "",
  bucketName: process.env.GCS_BUCKET_NAME ?? "",
  fileName: process.env.GCS_FILE_NAME ?? "",
};

Object.entries(env).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`${key} is not set.`);
  }
});
