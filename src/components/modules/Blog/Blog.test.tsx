// @vitest-environment jsdom
import { getEntryFixture, getFeedFixture } from "@/domain/blog/model.fixture";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Blog } from "./Blog";

describe("Blog", () => {
  it("renders entry", () => {
    const feed = getFeedFixture({
      entry: [
        getEntryFixture({ title: "Test entry", published: "2022-09-11" }),
      ],
    });

    render(<Blog feed={feed} />);

    expect(screen.queryByText(/2022\/09\/11/)).not.toBeNull();
    expect(screen.queryByRole("link")).toHaveTextContent("Test entry");
  });

  it("doesn't render entry", () => {
    render(<Blog feed={getFeedFixture({ entry: [] })} />);

    expect(screen.queryByRole("link")).toBeNull();
  });
});
