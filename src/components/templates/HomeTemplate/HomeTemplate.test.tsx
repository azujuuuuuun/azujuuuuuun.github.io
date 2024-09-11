// @vitest-environment jsdom
import type { Feed } from "@/domain/blog/model";
import { render, screen } from "@testing-library/react";
import React from "react";
import { HomeTemplate } from "./HomeTemplate";

describe("HomeTemplate", () => {
  it("renders blog module", () => {
    const feed = { entry: [] } as unknown as Feed;
    const updateDate = new Date("2022-09-10").toJSON();

    render(<HomeTemplate feed={feed} updateDate={updateDate} />);

    expect(screen.queryByRole("heading", { name: "Blog" })).not.toBeNull();
  });

  it("doesn't renders blog module", () => {
    const updateDate = new Date("2022-09-10").toJSON();

    render(<HomeTemplate feed={null} updateDate={updateDate} />);

    expect(screen.queryByRole("heading", { name: "Blog" })).toBeNull();
  });
});
