import { describe, expect, it, beforeAll } from "vitest";
import { validPassword } from "./passwordvalidationtest";

describe("validPassword (the password must contain 3-20 characters, one number, one lowercase letter, and one capital letter)", () => {
    it("should return 'VALID' for a valid password", () => {
      expect(validPassword('Qwerty1')).toBe('VALID');
    });
  });

  test('should return "INVALID PASSWORD CHARACTHER NOT ACCEPTED" for a password with invalid characters', () => {
    expect(validPassword('Abc23')).toBe('INVALID PASSWORD CHARACTHER NOT ACCEPTED');
  });

  test('should return "INVALID PASSWORD NO CAPITAL LETTER" for a password without uppercase letters', () => {
    expect(validPassword('abc123')).toBe('INVALID PASSWORD NO CAPITAL LETTER');
  });

  test('should return "INVALID PASSWORD NO LOWERCASE LETTER" for a password without lowercase letters', () => {
    expect(validPassword('ABC123')).toBe('INVALID PASSWORD NO LOWERCASE LETTER');
  });

  test('should return "INVALID PASSWORD NO DIGIT" for a password without digits', () => {
    expect(validPassword('Abcdef')).toBe('INVALID PASSWORD NO DIGIT');
  });

  test('should return "INVALID PASSWORD - it should contain 3-20 characthers" for a password with length less than 3', () => {
    expect(validPassword('Ab1')).toBe('INVALID PASSWORD - it should contain 3-20 characthers');
  });

  test('should return "INVALID PASSWORD - it should contain 3-20 characthers" for a password with length greater than 20', () => {
    expect(validPassword('Abcdefgh900000000000000i1')).toBe('INVALID PASSWORD - it should contain 3-20 characthers');
  });

