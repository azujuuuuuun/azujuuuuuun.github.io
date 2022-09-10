import { Readable } from "stream";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { logger } from "@/lib/logger";
import { client, fetchFeed } from "./fetch-feed";

jest.mock("@aws-sdk/client-s3");
jest.mock("@/lib/logger");

describe("fetchFeed", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns feed", async () => {
    // setup
    const body = Readable.from('{"title":"title"}');
    const mockSend = jest.fn().mockReturnValue({ Body: body });
    const spy = jest.spyOn(client, "send").mockImplementation(mockSend);

    const expected = { title: "title" };

    // execute
    const result = await fetchFeed("bucket", "file");

    // assert
    expect(GetObjectCommand).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("logs error on error", async () => {
    expect.assertions(4);

    // setup
    const error = new Error("error message");
    const mockSend = jest.fn().mockRejectedValue(error);
    const spy = jest.spyOn(client, "send").mockImplementation(mockSend);

    try {
      // execute
      await fetchFeed("bucket", "file");
    } catch (e) {
      // assert
      expect(GetObjectCommand).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(e).toEqual(error);
    }
  });
});
