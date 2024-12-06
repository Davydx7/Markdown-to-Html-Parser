// @vitest-environment jsdom

import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Headings 1 to 6
describe('Headings', () => {
  test('# heading 1', async () => {
    await expect(parseMd('# heading 1')).resolves.toBe('<h1>heading 1</h1>');
  });

  test('## heading 2', async () => {
    await expect(parseMd('## heading 2')).resolves.toBe('<h2>heading 2</h2>');
  });

  test('### heading 3', async () => {
    await expect(parseMd('### heading 3')).resolves.toBe('<h3>heading 3</h3>');
  });

  test('#### heading 4', async () => {
    await expect(parseMd('#### heading 4')).resolves.toBe('<h4>heading 4</h4>');
  });

  test('##### heading 5', async () => {
    await expect(parseMd('##### heading 5')).resolves.toBe('<h5>heading 5</h5>');
  });

  test('###### heading 6', async () => {
    await expect(parseMd('###### heading 6')).resolves.toBe('<h6>heading 6</h6>');
  });

  // multiple headings with text formatting
  test('transforms multiple headings with multiple lines and multiple headings', async () => {
    await expect(
      parseMd(
        `# heading 1
## heading 2
### heading 3
#### heading 4
##### heading 5
###### heading 6`
      )
    ).resolves.toBe(
      `<h1>heading 1</h1>
<h2>heading 2</h2>
<h3>heading 3</h3>
<h4>heading 4</h4>
<h5>heading 5</h5>
<h6>heading 6</h6>`
    );
  });

  // heading alternate syntaxes for h1 and h2
  describe('alt syntaxes', () => {
    // alternate syntax for h1
    test('alt h1', async () => {
      await expect(
        parseMd(`heading 1
=====`)
      ).resolves.toBe('<h1>heading 1</h1>');
    });

    test('multiline line h1', async () => {
      await expect(
        parseMd(
          `heading 1
heading 1
=====`
        )
      ).resolves.toBe(`<h1>heading 1<br>heading 1</h1>`);
    });

    // alt h1 with text formattings
    test('alt h1 with inline text formatting', async () => {
      await expect(
        parseMd(
          `heading *italic*
second **bold**
third ~~strikethrough~~ , H~subscript~,
more H^superscript^
and ==highlighted== and \`code\`
======`
        )
      ).resolves.toBe(
        `<h1>heading <em>italic</em><br>second <strong>bold</strong><br>third <del>strikethrough</del> , H<sub>subscript</sub>,<br>more H<sup>superscript</sup><br>and <mark>highlighted</mark> and <code>code</code></h1>`
      );
    });

    // alternate h2 syntax
    test('alt h2', async () => {
      await expect(
        parseMd(`heading 2
-----`)
      ).resolves.toBe('<h2>heading 2</h2>');
    });

    test('multiline line h2', async () => {
      await expect(
        parseMd(
          `heading 2
heading 2
-----`
        )
      ).resolves.toBe(`<h2>heading 2<br>heading 2</h2>`);
    });

    // alt h2 with text formattings
    test('transforms  "heading 2\n-----" with text formatting', async () => {
      await expect(
        parseMd(
          `heading *italic*
second **bold**
third ~~strikethrough~~ , H~subscript~,
more H^superscript^
and ==highlighted== and \`code\`
-------`
        )
      ).resolves.toBe(
        `<h2>heading <em>italic</em><br>second <strong>bold</strong><br>third <del>strikethrough</del> , H<sub>subscript</sub>,<br>more H<sup>superscript</sup><br>and <mark>highlighted</mark> and <code>code</code></h2>`
      );
    });
  });
});
