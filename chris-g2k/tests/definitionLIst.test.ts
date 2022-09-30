// @vitest-environment jsdom

import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Definition list
describe('Definition list', () => {
  test('A definition term and a list item', async () => {
    await expect(
      parseMd(
        `term
: definition`
      )
    ).resolves.toBe(
      `<dl>
<dt><strong>term</strong></dt>
<dd>definition</dd>
</dl>`
    );
  });

  test('A definition term and more than one list item', async () => {
    await expect(
      parseMd(
        `term
: first list item
: second item
: more items`
      )
    ).resolves.toBe(
      `<dl>
<dt><strong>term</strong></dt>
<dd>first list item</dd>
<dd>second item</dd>
<dd>more items</dd>
</dl>`
    );
  });

  test('multiple definition term and many list items', async () => {
    await expect(
      parseMd(`First Term
: This is the definition of the first term.
: secondly

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

Third Term
: This is one definition of the third term.
: This is another definition of the third term.`)
    ).resolves.toBe(
      `<dl>
<dt><strong>First Term</strong></dt>
<dd>This is the definition of the first term.</dd>
<dd>secondly</dd>

<dt><strong>Second Term</strong></dt>
<dd>This is one definition of the second term.</dd>
<dd>This is another definition of the second term.</dd>

<dt><strong>Third Term</strong></dt>
<dd>This is one definition of the third term.</dd>
<dd>This is another definition of the third term.</dd>
</dl>`
    );
  });

  // definition list with text formattings
  test('with all inline text formattings', async () => {
    await expect(
      parseMd(
        `term
: first *italic* item
: second **bold**
: third ~~strikethrough~~ , H~subscript~,
: more H^superscript^
: and ==highlighted== and \`code\``
      )
    ).resolves.toBe(
      `<dl>
<dt><strong>term</strong></dt>
<dd>first <em>italic</em> item</dd>
<dd>second <strong>bold</strong></dd>
<dd>third <del>strikethrough</del> , H<sub>subscript</sub>,</dd>
<dd>more H<sup>superscript</sup></dd>
<dd>and <mark>highlighted</mark> and <code>code</code></dd>
</dl>`
    );
  });
});
