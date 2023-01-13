import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import * as TestUtils from "react-dom/test-utils";
import DoorDash from "./DoorDash";

test("renders link to DoorDash store", () => {
  render(<DoorDash />);
  const linkElement = screen.getByText(/Available on DoorDash/i);
  expect(linkElement).toBeInTheDocument();
});

test("opens a new tab to DoorDash store when clicked", () => {
  const linkRef = createRef();
  TestUtils.renderIntoDocument(
    <a href={linkRef} target="_blank" rel="noreferrer" />
    );
  });

  test("renders DoorDash icon", () => {
    render(<DoorDash />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src", "doordash-icon.png");
  });