import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Text formatting
describe('Font styles', () => {
  describe('Bold', () => {
    test("transforms '**bold**' to '<strong>bold</strong>'", async () => {
      await expect(parseMd('**bold**')).resolves.toBe('<p><strong>bold</strong></p>');
    });
    test("transforms '__bold__' to '<strong>bold</strong>'", async () => {
      await expect(parseMd('__bold__')).resolves.toBe('<p><strong>bold</strong></p>');
    });
  });

  describe('Italic', () => {
    test("transforms '*italic*' to '<em>italic</em>'", async () => {
      await expect(parseMd('*italic*')).resolves.toBe('<p><em>italic</em></p>');
    });
    test("transforms '_italic_' to '<em>italic</em>'", async () => {
      await expect(parseMd('_italic_')).resolves.toBe('<p><em>italic</em></p>');
    });
  });

  describe('Bold and Italic', () => {
    test("transforms '***Bold and Italic***' to '<em><strong>Bold and Italic</strong></em>'", async () => {
      await expect(parseMd('***bold and italic***')).resolves.toBe(
        '<p><em><strong>bold and italic</strong></em></p>'
      );
    });
    test("transforms '___bold and italic___' to '<em><strong>bold and italic</strong></em>'", async () => {
      await expect(parseMd('___bold and italic___')).resolves.toBe(
        '<p><em><strong>bold and italic</strong></em></p>'
      );
    });
  });

  describe('Strikethrough', () => {
    test("transforms '~~strikethrough~~' to '<del>strikethrough</del>'", async () => {
      await expect(parseMd('~~strikethrough~~')).resolves.toBe('<p><del>strikethrough</del></p>');
    });
  });

  describe('Code', () => {
    test('transforms "`code`" to "<code>code</code>"', async () => {
      await expect(parseMd('`code`')).resolves.toBe('<p><code>code</code></p>');
    });
  });
});
