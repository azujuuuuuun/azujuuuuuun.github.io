import type { Readable } from "node:stream";
import streamConsumers from "node:stream/consumers";
import { env } from "@/config/env";
import type { Feed } from "@/domain/blog/model";
import { logger } from "@/lib/logger";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

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
