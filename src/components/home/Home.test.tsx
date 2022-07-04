import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("renders", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
