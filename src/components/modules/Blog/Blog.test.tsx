// @vitest-environment jsdom
import React from "react";
import { render, screen } from "@testing-library/react";
import { getFeedFixture, getEntryFixture } from "@/domain/blog/model.fixture";
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
