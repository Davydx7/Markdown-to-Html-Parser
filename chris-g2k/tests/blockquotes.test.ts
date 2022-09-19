import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Blockquotes
describe('Blockquotes', () => {
  test("transforms '> blockquote' to '<blockquote>blockquote</blockquote>'", async () => {
    expect(parseMd('> blockquote')).resolves.toBe('<blockquote>\nblockquote\n</blockquote>');
  });
  // nested blockquotes
  test("transforms '> blockquote\n>> nested blockquote' to '<blockquote>blockquote</blockquote>'", async () => {
    expect(parseMd('> blockquote\n>> nested blockquote')).resolves.toBe(
      '<blockquote>\nblockquote\n<blockquote>\nnested blockquote\n</blockquote>\n</blockquote>'
    );
  });
  // blockquotes with paragraphs
  test("transforms '> blockquote\n\nparagraph' to '<blockquote>blockquote</blockquote>'", async () => {
    expect(parseMd('> blockquote\n\nparagraph')).resolves.toBe(
      '<blockquote>\nblockquote\n</blockquote>\n\n<p>paragraph</p>'
    );
  });
  // blockquotes with lists
  test("transforms '> blockquote\n\n- list item' to '<blockquote>blockquote</blockquote>'", async () => {
    expect(parseMd('> blockquote\n\n- list item')).resolves.toBe(
      '<blockquote>\nblockquote\n</blockquote>\n\n<ul>\n<li>list item</li>\n</ul>'
    );
  });
  // blockquotes with code blocks
  test("transforms '> blockquote\n\n    code block' to '<blockquote>blockquote</blockquote>'", async () => {
    expect(parseMd('> blockquote\n\n    code block')).resolves.toBe(
      '<blockquote>\nblockquote\n</blockquote>\n\n<pre>code block</pre>'
    );
  });
  // blockquotes with headings
  test("transforms '> blockquote\n\n# heading' to '<blockquote>blockquote</blockquote>'", async () => {
    expect(parseMd('> blockquote\n\n# heading')).resolves.toBe(
      '<blockquote>\nblockquote\n</blockquote>\n\n<h1>heading</h1>'
    );
  });
  // blockquotes with horizontal rules
  test("transforms '> blockquote\n\n---' to '<blockquote>blockquote</blockquote>'", async () => {
    expect(parseMd('> blockquote\n\n---')).resolves.toBe(
      '<blockquote>\nblockquote\n</blockquote>\n\n<hr>'
    );
  });
  // blockquotes with tables
  test("transforms '> blockquote\n\n| header 1 | header 2 |\n|---|---|\n| item 1 | item 2 |' to '<blockquote>blockquote</blockquote>'", async () => {
    expect(
      parseMd('> blockquote\n\n| header 1 | header 2 |\n|---|---|\n| item 1 | item 2 |')
    ).resolves.toBe(
      '<blockquote>\nblockquote\n</blockquote>\n\n<table>\n<thead>\n<tr>\n<th>header 1</th><th>header 2</th>\n</tr>\n</thead>\n\n<tbody>\n<tr>\n<td>item 1</td><td>item 2</td>\n</tr>\n</tbody>\n</table>'
    );
  });
});
