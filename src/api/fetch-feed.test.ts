import { Readable } from "stream";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { client, fetchFeed } from "./fetch-feed";

jest.mock("@aws-sdk/client-s3");

describe("fetchFeed", () => {
  it("returns feed", async () => {
    // setup
    const body = Readable.from('{"title":"title"}');
    const mockSend = jest.fn().mockReturnValue({ Body: body });
    const spy = jest.spyOn(client, "send").mockImplementation(mockSend);

    const expected = { title: "title" };

    // execute
    const result = await fetchFeed();

    // assert
    expect(GetObjectCommand).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });
});
