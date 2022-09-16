import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// multiple text formatting
test('transforms "**bold** and *italic*" to "<strong>bold</strong> and <em>italic</em>"', async () => {
  await expect(parseMd('**bold** and *italic*')).resolves.toBe(
    '<p><strong>bold</strong> and <em>italic</em></p>'
  );
});

// paragraph with multiple text formatting
test('transforms "**bold** and *italic*" to "<strong>bold</strong> and <em>italic</em>"', async () => {
  await expect(parseMd('**bold** and *italic*')).resolves.toBe(
    '<p><strong>bold</strong> and <em>italic</em></p>'
  );
});

//
