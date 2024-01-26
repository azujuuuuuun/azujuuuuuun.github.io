import streamConsumers from "node:stream/consumers";
import { Readable } from "stream";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { env } from "@/config/env";
import { Feed } from "@/domain/blog/model";
import { logger } from "@/lib/logger";

export const client = new S3Client({
  credentials: {
    accessKeyId: env.accessKeyId,
    secretAccessKey: env.secretAccessKey,
  },
  endpoint: env.endpoint,
  forcePathStyle: true,
  region: "auto",
});

export const fetchFeed = async (
  bucketName: string,
  fileName: string,
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
