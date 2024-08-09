import { test, expect } from 'vitest';
import { validateUsername, validateGivenName, validatePassword } from "../../utilities/inputValidationHelper.js";

// Test Case: validateUsername()
test("validateUsername returns error for username too short", () => {
    expect(validateUsername("12")).toBe("Username must be between 3 and 15 characters.");
  });
  
  test("validateUsername returns error for username too long", () => {
    expect(validateUsername("1234567890123456")).toBe("Username must be between 3 and 15 characters.");
  });
  
  test("validateUsername returns error for invalid characters", () => {
    expect(validateUsername("$!@#$")).toBe("Username can only contain letters and numbers.");
  });
  
  test("validateUsername returns empty string for valid username", () => {
    expect(validateUsername("validUser123")).toBe("");
  });

// Test Case: validateGivenName()
  test("validateGivenName returns error for given name too short", () => {
    expect(validateGivenName("", "First Name")).toBe("First Name must be between 1 and 20 characters.");
  });
  
  test("validateGivenName returns error for given name too long", () => {
    expect(validateGivenName("123456789012345678901", "First Name")).toBe("First Name must be between 1 and 20 characters.");
  });
  
  test("validateGivenName returns error for spaces", () => {
    expect(validateGivenName("First Name", "First Name")).toBe("First Name cannot contain spaces.");
  });
  
  test("validateGivenName returns error for invalid characters", () => {
    expect(validateGivenName("Name123", "First Name")).toBe("First Name can only contain letters");
  });
  
  test("validateGivenName returns empty string for valid given name", () => {
    expect(validateGivenName("Andy", "First Name")).toBe("");
  });

  // Test Case: validatePassword()
  test("validatePassword returns error for too short password", () => {
    expect(validatePassword("short")).toBe("Password must be at least 8 characters long.");
  });
  
  test("validatePassword returns empty string for valid password", () => {
    expect(validatePassword("validPass123")).toBe("");
  });