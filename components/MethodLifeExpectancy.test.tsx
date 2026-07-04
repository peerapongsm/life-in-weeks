import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import MethodLifeExpectancy from "./MethodLifeExpectancy";

describe("MethodLifeExpectancy citation", () => {
  it("renders a space between the Latin WHO indicator and the Thai country name", () => {
    const html = renderToStaticMarkup(<MethodLifeExpectancy />);
    const match = html.match(/\(years\)(\s*)ประเทศ/);
    expect(match).not.toBeNull();
    expect(match![1].length).toBeGreaterThan(0);
  });
});
