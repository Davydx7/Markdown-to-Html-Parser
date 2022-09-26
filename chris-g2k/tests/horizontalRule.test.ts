import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Horizontal rule
describe('Horizontal rule', () => {
  test("transforms '---' to '<hr>'", async () => {
    await expect(parseMd('---')).resolves.toBe('<hr>');
  });
  test("transforms '***' to '<hr>'", async () => {
    await expect(parseMd('***')).resolves.toBe('<hr>');
  });
  test("transforms '___' to '<hr>'", async () => {
    await expect(parseMd('___')).resolves.toBe('<hr>');
  });

  // fails
  test("transforms '---x' to NOT be'<hr>'", async () => {
    await expect(parseMd('---x')).resolves.toBe('<hr>');
  });
  test("transforms '***x' to NOT be '<hr>'", async () => {
    await expect(parseMd('***x')).resolves.toBe('<hr>');
  });
  test("transforms '___x' to NOT be '<hr>'", async () => {
    await expect(parseMd('___x')).resolves.toBe('<hr>');
  });
  test("transforms '--' to NOT be '<hr>'", async () => {
    await expect(parseMd('--')).resolves.not.toBe('<hr>');
  });
  test("transforms '**' to NOT be '<hr>' '", async () => {
    await expect(parseMd('**')).resolves.not.toBe('<hr>');
  });
  test("transforms '__' to NOT be '<hr>'", async () => {
    await expect(parseMd('__')).resolves.not.toBe('<hr>');
  });
  test("transforms '--*' to NOT be '<hr>'", async () => {
    await expect(parseMd('--*')).resolves.not.toBe('<hr>');
  });
  test("transforms '*-*' to NOT be '<hr>' '", async () => {
    await expect(parseMd('*-*')).resolves.not.toBe('<hr>');
  });
  test("transforms '__-' to NOT be '<hr>'", async () => {
    await expect(parseMd('__-')).resolves.not.toBe('<hr>');
  });
});
