// @vitest-environment jsdom

import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// escape character
describe('Escape character', () => {
  test('escape all escapeable characters', async () => {
    await expect(
      parseMd(
        `\\\`

\\*

\\{ \\}

\\[ \\]

\\< \\>

\\( \\)

\\#

\\+

\\-

\\.

\\!

\\|`
      )
    ).resolves.toBe(
      `<p>\`</p>

<p>*</p>

<p>{ }</p>

<p>[ ]</p>

<p>&lt; &gt;</p>

<p>( )</p>

<p>#</p>

<p>+</p>

<p>-</p>

<p>.</p>

<p>!</p>

<p>|</p>`
    );
  });

  // escape the backslash itself
  test('escape backslash itself', async () => {
    await expect(parseMd('\\\\')).resolves.toBe('<p>\\</p>');
  });

  // doesn't escape letters
  test('does not escape letters', async () => {
    await expect(
      parseMd(
        `\\a \\b \\c \\d \\e \\f \\g \\h \\i \\j \\k \\l \\m \\n \\o \\p \\q \\r \\s \\t \\u \\v \\w \\x \\y \\z`
      )
    ).resolves.toBe(
      `<p>\\a \\b \\c \\d \\e \\f \\g \\h \\i \\j \\k \\l \\m \\n \\o \\p \\q \\r \\s \\t \\u \\v \\w \\x \\y \\z</p>`
    );
  });

  // doesn't escape numbers
  test('doesnt escape numbers', async () => {
    await expect(parseMd(`\\0 \\1 \\2 \\3 \\4 \\5 \\6 \\7 \\8 \\9`)).resolves.toBe(
      `<p>\\0 \\1 \\2 \\3 \\4 \\5 \\6 \\7 \\8 \\9</p>`
    );
  });

  // escape characters in code
  test('escape characters in code', async () => {
    await expect(parseMd('`\\*code\\*`')).resolves.toBe('<p><code>*code*</code></p>');
  });
});
