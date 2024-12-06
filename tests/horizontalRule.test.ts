// @vitest-environment jsdom

import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Horizontal rule
describe('Horizontal rule', () => {
  test('hr by ---', async () => {
    await expect(parseMd('---')).resolves.toBe('<hr>');
  });
  test('hr by ***', async () => {
    await expect(parseMd('***')).resolves.toBe('<hr>');
  });
  test('hr by ___', async () => {
    await expect(parseMd('___')).resolves.toBe('<hr>');
  });

  // fails
  test('not ---x ', async () => {
    await expect(parseMd('---x')).resolves.not.toBe('<hr>');
  });
  test("transforms '***x' to NOT be '<hr>'", async () => {
    await expect(parseMd('***x')).resolves.not.toBe('<hr>');
  });
  test("transforms '___x' to NOT be '<hr>'", async () => {
    await expect(parseMd('___x')).resolves.not.toBe('<hr>');
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
