import { IamExported } from "../src/module";

test("IamExported returns greeting", () => {
  expect(
    IamExported("arark")
  ).toContain("Hello, arark!!");
});
