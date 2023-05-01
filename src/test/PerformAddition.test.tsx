import { render, fireEvent, screen } from "@testing-library/react";
import { expect } from "vitest";
import PerformAddition from "../PerformAddition";

describe("Perform Addition", () => {
  it("input Values", () => {
    render(<PerformAddition />);
    const input1 = screen.getByTitle("input1");
    const input2 = screen.getByTitle("input2");
    const result = screen.getByTitle("result");
    const addBtn = screen.getByRole("button");

    fireEvent.change(input1, { target: { value: 12345 } });
    fireEvent.change(input2, { target: { value: 12345 } });
    fireEvent.click(addBtn);

    expect(input1).toHaveValue("12345");
    expect(input2).toHaveValue("12345");
    expect(result).toHaveTextContent("24690");
  });
});
