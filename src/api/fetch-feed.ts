import streamConsumers from "node:stream/consumers";
import { Readable } from "stream";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Feed } from "@/models/feed";
import { logger } from "@/lib/logger";

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

export const client = new S3Client({
  credentials: { accessKeyId, secretAccessKey },
  endpoint,
  forcePathStyle: true,
  region: "auto",
});

export const fetchFeed = async (
  bucketName: string,
  fileName: string
): Promise<Feed> => {
  try {
    const params = {
      Bucket: bucketName,
      Key: fileName,
    };
    const command = new GetObjectCommand(params);
    const data = await client.send(command);
    return (await streamConsumers.json(data.Body as Readable)) as Feed;
  } catch (e) {
    if (e instanceof Error) {
      logger.error(e.message);
    }
    throw e;
  }
};
