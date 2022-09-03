import streamConsumers from "node:stream/consumers";
import { Readable } from "stream";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Feed } from "@/models/feed";

const accessKeyId = process.env.STORAGE_ACCESS_KEY_ID;
if (!accessKeyId) {
  throw new Error("STORAGE_ACCESS_KEY_ID is not set.");
}
const secretAccessKey = process.env.STORAGE_SECRET_ACCESS_KEY;
if (!secretAccessKey) {
  throw new Error("STORAGE_SECRET_ACCESS_KEY is not set.");
}
const endpoint = process.env.STORAGE_API_ENDPOINT;
if (!endpoint) {
  throw new Error("STORAGE_API_ENDPOINT is not set.");
}
const bucketName = process.env.GCS_BUCKET_NAME;
if (!bucketName) {
  throw new Error("GCS_BUCKET_NAME is not set.");
}
const fileName = process.env.GCS_FILE_NAME;
if (!fileName) {
  throw new Error("GCS_FILE_NAME is not set.");
}

const client = new S3Client({
  credentials: { accessKeyId, secretAccessKey },
  endpoint,
  forcePathStyle: true,
  region: "auto",
});

export const fetchFeed = async (): Promise<Feed> => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };
  const command = new GetObjectCommand(params);
  const data = await client.send(command);
  return (await streamConsumers.json(data.Body as Readable)) as Feed;
};
