// @vitest-environment jsdom

import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Preformatted text
describe('Preformatted text', () => {
  test("transforms '    preformatted text' to '<pre>preformatted text</pre>'", async () => {
    await expect(parseMd('    preformatted text')).resolves.toBe('<pre>preformatted text</pre>');
  });
});
