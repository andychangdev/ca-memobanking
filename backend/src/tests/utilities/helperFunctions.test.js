const { validateFields } = require("../../utilities/helperFunctions.js");

// Test Case: validateFields()
describe("validateFields", () => {
  test("returns null if all fields are provided", () => {
    const fields = {
      username: "andychang",
      firstname: "andy",
      lastname: "chang",
      password: "password123",
    };

    const result = validateFields(fields);

    expect(result).toBeNull();
  });

  test("returns error message if a field is missing", () => {
    const fields = {
      username: "andychang",
      firstname: "andy",
      lastname: "",
      password: "password123",
    };

    const result = validateFields(fields);

    expect(result).toEqual({
      status: 400,
      message: "Lastname is required",
    });
  });

  test("handles fields with null values", () => {
    const fields = {
      username: null,
      firstname: "andy",
      lastname: "chang",
      password: "password123",
    };

    const result = validateFields(fields);

    expect(result).toEqual({
      status: 400,
      message: "Username is required",
    });
  });
});
