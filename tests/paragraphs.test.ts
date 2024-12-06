// @vitest-environment jsdom

import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Paragraphs
describe('Paragraphs', () => {
  test('transforms "paragraph" to "<p>paragraph</p>"', async () => {
    await expect(parseMd('paragraph')).resolves.toBe('<p>paragraph</p>');
  });
  test('transforms "paragraph\nparagraph" to "<p>paragraph\nparagraph</p>"', async () => {
    await expect(parseMd('paragraph\nparagraph')).resolves.toBe('<p>paragraph<br>paragraph</p>');
  });
  test('transforms "paragraph 1\n\nparagraph 2" to "<p>paragraph 1</p>\n\n<p>paragraph 2</p>"', async () => {
    await expect(parseMd('paragraph 1\n\nparagraph 2')).resolves.toBe(
      '<p>paragraph 1</p>\n\n<p>paragraph 2</p>'
    );
  });

  // paragraphs with headings
  test('transforms "paragraph\n\n# heading" to "<p>paragraph</p>\n\n<h1>heading</h1>"', async () => {
    await expect(parseMd('paragraph\n\n# heading')).resolves.toBe(
      '<p>paragraph</p>\n\n<h1>heading</h1>'
    );
  });
  // paragraphs with lists
  test('transforms "paragraph\n\n- list item" to "<p>paragraph</p>\n\n<ul>\n<li>list item</li>\n</ul>"', async () => {
    await expect(parseMd('paragraph\n\n- list item')).resolves.toBe(
      '<p>paragraph</p>\n\n<ul>\n<li>list item</li>\n</ul>'
    );
  });
  // paragraphs with code blocks
  test('transforms "paragraph\n\n    code block" to "<p>paragraph</p>\n\n<pre>code block</pre>"', async () => {
    await expect(parseMd('paragraph\n\n    code block')).resolves.toBe(
      '<p>paragraph</p>\n\n<pre>code block</pre>'
    );
  });
  // paragraphs containing blockquotes
  test('transforms "paragraph\n\n> blockquote" to "<p>paragraph</p>\n\n<blockquote>\nblockquote\n</blockquote>"', async () => {
    await expect(parseMd('paragraph\n\n> blockquote')).resolves.toBe(
      '<p>paragraph</p>\n\n<blockquote>\nblockquote\n</blockquote>'
    );
  });
  // paragraphs with horizontal rules
  test('transforms "paragraph\n\n---" to "<p>paragraph</p>\n\n<hr>"', async () => {
    await expect(parseMd('paragraph\n\n---')).resolves.toBe('<p>paragraph</p>\n\n<hr>');
  });
  // paragraphs with tables
  test('transforms "paragraph\n\n| header 1 | header 2 |\n|---|---|\n| item 1 | item 2 |" to "<p>paragraph</p>\n\n<table>\n<thead>\n<tr>\n<th>header 1</th><th>header 2</th>\n</tr>\n</thead>\n\n<tbody>\n<tr>\n<td>item 1</td><td>item 2</td>\n</tr>\n</tbody>\n</table>"', async () => {
    await expect(
      parseMd('paragraph\n\n| header 1 | header 2 |\n|---|---|\n| item 1 | item 2 |')
    ).resolves.toBe(
      '<p>paragraph</p>\n\n<table>\n<thead>\n<tr>\n<th>header 1</th><th>header 2</th>\n</tr>\n</thead>\n\n<tbody>\n<tr>\n<td>item 1</td><td>item 2</td>\n</tr>\n</tbody>\n</table>'
    );
  });
});
