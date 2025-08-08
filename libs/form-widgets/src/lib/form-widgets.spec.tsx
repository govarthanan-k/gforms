import { render } from "@testing-library/react";

import GovaFormWidgets from "./form-widgets";

describe("GovaFormWidgets", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<GovaFormWidgets />);
    expect(baseElement).toBeTruthy();
  });
});
