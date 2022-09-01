import { readFile } from "node:fs/promises";
import { Storage } from "@google-cloud/storage";
import { Feed } from "@/models/feed";

const storage = new Storage();

const bucketName = process.env.GCS_BUCKET_NAME;
if (!bucketName) {
  throw new Error("GCS_BUCKET_NAME is not set.");
}
const fileName = process.env.GCS_FILE_NAME;
if (!fileName) {
  throw new Error("GCS_FILE_NAME is not set.");
}

const fetchFeedFromStorage = async (): Promise<Feed> => {
  const downloadResponse = await storage
    .bucket(bucketName)
    .file(fileName)
    .download();

  return JSON.parse(downloadResponse[0].toString("utf8")) as Feed;
};

const readFeedFile = async (): Promise<Feed> => {
  const buffer = await readFile("data/feed.json");
  return JSON.parse(buffer.toString("utf8")) as Feed;
};

export const fetchFeed =
  process.env.USE_LOCAL_DATA === "true" ? readFeedFile : fetchFeedFromStorage;
