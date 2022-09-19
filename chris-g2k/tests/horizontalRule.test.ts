import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Horizontal rule
describe('Horizontal rule', () => {
  test("transforms '---' to '<hr>'", async () => {
    expect(parseMd('---')).resolves.toBe('<hr>');
  });
  test("transforms '***' to '<hr>'", async () => {
    expect(parseMd('***')).resolves.toBe('<hr>');
  });
  test("transforms '___' to '<hr>'", async () => {
    expect(parseMd('___')).resolves.toBe('<hr>');
  });
});
