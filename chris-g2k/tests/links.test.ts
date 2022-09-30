// @vitest-environment jsdom

import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Links
describe('Links', () => {
  test('link with []() syntax with title', async () => {
    await expect(parseMd('[GOOGLE](https://www.google.com "link title")')).resolves.toBe(
      '<p><a title="link title" href="https://www.google.com">GOOGLE</a></p>'
    );
  });

  test('link with []() syntax without title', async () => {
    await expect(parseMd('[GOOGLE](https://www.google.com)')).resolves.toBe(
      '<p><a title="" href="https://www.google.com">GOOGLE</a></p>'
    );
  });

  test('link with []() syntax with all text formatting', async () => {
    await expect(
      parseMd(
        '[*italic*, **bold**, ~~strikethrough~~ , H~subscript~, H^superscript^, ==highlighted==, `code`](https://www.google.com "link title")'
      )
    ).resolves.toBe(
      '<p><a title="link title" href="https://www.google.com"><em>italic</em>, <strong>bold</strong>, <del>strikethrough</del> , H<sub>subscript</sub>, H<sup>superscript</sup>, <mark>highlighted</mark>, <code>code</code></a></p>'
    );
  });

  test('plain text http(s) link', async () => {
    await expect(parseMd('https://www.google.com')).resolves.toBe(
      '<p><a href="https://www.google.com">https://www.google.com</a></p>'
    );
  });

  test('plain text http(s) link in <>', async () => {
    await expect(parseMd('<https://www.google.com>')).resolves.toBe(
      '<a href="https://www.google.com">https://www.google.com</a>'
    );
  });

  test('plain text www link', async () => {
    await expect(parseMd('www.google.com')).resolves.toBe(
      '<p><a href="http://www.google.com">www.google.com</a></p>'
    );
  });

  test('plain text www link in <>', async () => {
    await expect(parseMd('<www.google.com>')).resolves.toBe(
      '<a href="http://www.google.com">www.google.com</a>'
    );
  });

  test('email link', async () => {
    await expect(parseMd('oludave0511@gmail.com')).resolves.toBe(
      '<p><a href="mailto:oludave0511@gmail.com">oludave0511@gmail.com</a></p>'
    );
  });
});
