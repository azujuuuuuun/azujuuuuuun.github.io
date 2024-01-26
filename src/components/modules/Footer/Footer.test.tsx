// @vitest-environment jsdom
import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders update date", () => {
    const date = new Date("2022-09-10").toJSON();

    render(<Footer updateDate={date} />);

    expect(screen.queryByText(/2022\/09\/10/)).not.toBeNull();
  });
});
