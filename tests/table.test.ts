// @vitest-environment jsdom

import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Tables
describe('Tables', () => {
  test('transforms table without alignment', async () => {
    await expect(parseMd('| header 1 | header 2 |\n|---|---|\n| item 1 | item 2 |')).resolves.toBe(
      '<table>\n<thead>\n<tr>\n<th>header 1</th><th>header 2</th>\n</tr>\n</thead>\n\n<tbody>\n<tr>\n<td>item 1</td><td>item 2</td>\n</tr>\n</tbody>\n</table>'
    );
  });
  test('transforms table with alignments', async () => {
    await expect(
      parseMd(
        '| header 1 | header 2 | header 3 |\n|:---|:---:|----:|\n| item 1 | item 2 | item 3 |'
      )
    ).resolves.toBe(
      '<table>\n<thead>\n<tr>\n<th align="left">header 1</th><th align="center">header 2</th><th align="right">header 3</th>\n</tr>\n</thead>\n\n<tbody>\n<tr>\n<td align="left">item 1</td><td align="center">item 2</td><td align="right">item 3</td>\n</tr>\n</tbody>\n</table>'
    );
  });
});
