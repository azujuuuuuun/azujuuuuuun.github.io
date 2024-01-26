import { vi } from "vitest";
import { Readable } from "stream";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { logger } from "@/lib/logger";
import { client, fetchFeed } from "./repository";

vi.mock("@aws-sdk/client-s3");
vi.mock("@/lib/logger");

describe("fetchFeed", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns feed", async () => {
    // setup
    const body = Readable.from('{"title":"title"}');
    const mockSend = vi.fn().mockReturnValue({ Body: body });
    const spy = vi.spyOn(client, "send").mockImplementation(mockSend);

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
    const mockSend = vi.fn().mockRejectedValue(error);
    const spy = vi.spyOn(client, "send").mockImplementation(mockSend);

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
