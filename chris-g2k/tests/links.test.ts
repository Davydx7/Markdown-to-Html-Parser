import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Links
describe('Links', () => {
  test('transforms "[text](url)" to "<a href="url">text</a>"', async () => {
    await expect(parseMd('[text](url)')).resolves.toBe('<p><a href="url" title="">text</a></p>');
  });

  test('transforms "[text](url "title")" to "<a href="url" title="title">text</a>"', async () => {
    await expect(parseMd('[text](url "title")')).resolves.toBe(
      '<p><a href="url" title="title">text</a></p>'
    );
  });
});
