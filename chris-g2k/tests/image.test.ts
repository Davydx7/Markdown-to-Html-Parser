import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Images
describe('Images', () => {
  test('transforms "![text](url)" to "<img src="url" alt="text">"', async () => {
    await expect(parseMd('![text](url)')).resolves.toBe(
      '<p><img src="url" alt="text" title=""></p>'
    );
  });
  test('transforms "![text](url "title")" to "<img src="url" title="title" alt="text">"', async () => {
    await expect(parseMd('![text](url "title")')).resolves.toBe(
      '<p><img src="url" alt="text" title="title"></p>'
    );
  });
  test('transforms "![](url title)" to "<img src="url" title="title" alt="text">"', async () => {
    await expect(parseMd('![](url "title")')).resolves.toBe(
      '<p><img src="url" alt="" title="title"></p>'
    );
  });
  // images with headings
});
