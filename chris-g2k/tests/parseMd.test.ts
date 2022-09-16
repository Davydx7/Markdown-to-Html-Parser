import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Headings
describe('Headings', () => {
  test("transforms '# heading 1' to '<h1>heading 1</h1>'", async () => {
    await expect(parseMd('# heading 1')).resolves.toBe('<h1>heading 1</h1>');
  });

  test("transforms '## heading 2' to '<h2>heading 2</h2>'", async () => {
    await expect(parseMd('## heading 2')).resolves.toBe('<h2>heading 2</h2>');
  });

  test("transforms '### heading 3' to '<h3>heading 3</h3>'", async () => {
    await expect(parseMd('### heading 3')).resolves.toBe('<h3>heading 3</h3>');
  });

  test("transforms '#### heading 4' to '<h4>heading 4</h4>'", async () => {
    await expect(parseMd('#### heading 4')).resolves.toBe('<h4>heading 4</h4>');
  });

  test("transforms '##### heading 5' to '<h2>heading 5</h5>'", async () => {
    await expect(parseMd('##### heading 5')).resolves.toBe('<h5>heading 5</h5>');
  });

  test("transforms '###### heading 6' to '<h6>heading 6</h6'", async () => {
    await expect(parseMd('###### heading 6')).resolves.toBe('<h6>heading 6</h6>');
  });

  describe('with multiple headings', () => {
    test('transforms multiple headings with multiple lines and multiple headings', async () => {
      await expect(
        parseMd(
          '# heading 1\n## heading 2\n### heading 3\n#### heading 4\n##### heading 5\n###### heading 6'
        )
      ).resolves.toBe(
        '<h1>heading 1</h1>\n<h2>heading 2</h2>\n<h3>heading 3</h3>\n<h4>heading 4</h4>\n<h5>heading 5</h5>\n<h6>heading 6</h6>'
      );
    });
  });

  describe('alternative headings for h1 and h2', () => {
    test('transforms  "heading 1\n=====" to "<h1>heading 1</h1>', async () => {
      await expect(parseMd('heading 1\n=====')).resolves.toBe('<h1>heading 1</h1>');
    });

    test('transforms  multiple consecutive "====" h1 headings ', async () => {
      await expect(parseMd('heading 1\n=====\nheading 1\n=====')).resolves.toBe(
        '<h1>heading 1</h1>\n<h1>heading 1</h1>'
      );
    });

    test('transforms  "heading 2\n-----" to "<h2>heading 2</h2>', async () => {
      await expect(parseMd('heading 2\n-----')).resolves.toBe('<h2>heading 2</h2>');
    });
  });
});

// List
describe('Lists', () => {
  describe('Unordered', () => {
    test("transforms '- item 1' to '<ul><li>item 1</li></ul>'", async () => {
      expect(parseMd('- item 1')).resolves.toBe('<ul>\n<li>item 1</li>\n</ul>');
    });
    test("transforms '- item 1\n- item 2' to '<ul><li>item 1</li><li>item 2</li></ul>'", async () => {
      expect(parseMd('- item 1\n- item 2')).resolves.toBe(
        '<ul>\n<li>item 1</li>\n<li>item 2</li>\n</ul>'
      );
    });
  });

  describe('Ordered', () => {
    test("transforms '1. item 1' to '<ol><li>item 1</li></ol>'", async () => {
      expect(parseMd('1. item 1')).resolves.toBe('<ol start=1>\n<li>item 1</li>\n</ol>');
    });
    test("transforms '1. item 1\n2. item 2' to '<ol><li>item 1</li><li>item 2</li></ol>'", async () => {
      expect(parseMd('1. item 1\n2. item 2')).resolves.toBe(
        '<ol start=1>\n<li>item 1</li>\n<li>item 2</li>\n</ol>'
      );
    });
  });
});

// Definition list
describe('Definition list', () => {
  test("transforms 'term\n: definition' to '<dl><dt>term</dt><dd>definition</dd></dl>'", async () => {
    expect(parseMd('term\n: definition')).resolves.toBe(
      '<dl>\n<dt>term</dt>\n<dd>definition</dd>\n</dl>'
    );
  });
  test("transforms 'term\n: definition\n: definition 2' to '<dl><dt>term</dt><dd>definition</dd><dd>definition 2</dd></dl>'", async () => {
    expect(parseMd('term\n: definition\n: definition 2')).resolves.toBe(
      '<dl>\n<dt>term</dt>\n<dd>definition</dd>\n<dd>definition 2</dd>\n</dl>'
    );
  });
});

// Tables
describe('Tables', () => {
  test('transforms table without alignment', async () => {
    expect(parseMd('| header 1 | header 2 |\n|---|---|\n| item 1 | item 2 |')).resolves.toBe(
      '<table>\n<thead>\n<tr>\n<th>header 1</th><th>header 2</th>\n</tr>\n</thead>\n\n<tbody>\n<tr>\n<td>item 1</td><td>item 2</td>\n</tr>\n</tbody>\n</table>'
    );
  });
  test('transforms table with alignments', async () => {
    expect(
      parseMd(
        '| header 1 | header 2 | header 3 |\n|:---|:---:|----:|\n| item 1 | item 2 | item 3 |'
      )
    ).resolves.toBe(
      '<table>\n<thead>\n<tr>\n<th align="left">header 1</th><th align="center">header 2</th><th align="right">header 3</th>\n</tr>\n</thead>\n\n<tbody>\n<tr>\n<td align="left">item 1</td><td align="center">item 2</td><td align="right">item 3</td>\n</tr>\n</tbody>\n</table>'
    );
  });
});

// Horizontal rule
describe('Horizontal rule', () => {
  test("transforms '---' to '<hr>'", async () => {
    expect(parseMd('---')).resolves.toBe('<hr>');
  });
  test("transforms '***' to '<hr>'", async () => {
    expect(parseMd('***')).resolves.toBe('<hr>');
  });
  test("transforms '___' to '<hr>'", async () => {
    expect(parseMd('___')).resolves.toBe('<hr>');
  });
});

// Preformatted text
describe('Preformatted text', () => {
  test("transforms '    preformatted text' to '<pre>preformatted text</pre>'", async () => {
    expect(parseMd('    preformatted text')).resolves.toBe('<pre>preformatted text</pre>');
  });
});

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

// Text formatting
describe('Font styles', () => {
  describe('Bold', () => {
    test("transforms '**bold**' to '<strong>bold</strong>'", async () => {
      await expect(parseMd('**bold**')).resolves.toBe('<p><strong>bold</strong></p>');
    });
    test("transforms '__bold__' to '<strong>bold</strong>'", async () => {
      await expect(parseMd('__bold__')).resolves.toBe('<p><strong>bold</strong></p>');
    });
  });

  describe('Italic', () => {
    test("transforms '*italic*' to '<em>italic</em>'", async () => {
      await expect(parseMd('*italic*')).resolves.toBe('<p><em>italic</em></p>');
    });
    test("transforms '_italic_' to '<em>italic</em>'", async () => {
      await expect(parseMd('_italic_')).resolves.toBe('<p><em>italic</em></p>');
    });
  });

  describe('Bold and Italic', () => {
    test("transforms '***Bold and Italic***' to '<em><strong>Bold and Italic</strong></em>'", async () => {
      await expect(parseMd('***bold and italic***')).resolves.toBe(
        '<p><em><strong>bold and italic</strong></em></p>'
      );
    });
    test("transforms '___bold and italic___' to '<em><strong>bold and italic</strong></em>'", async () => {
      await expect(parseMd('___bold and italic___')).resolves.toBe(
        '<p><em><strong>bold and italic</strong></em></p>'
      );
    });
  });

  describe('Strikethrough', () => {
    test("transforms '~~strikethrough~~' to '<del>strikethrough</del>'", async () => {
      await expect(parseMd('~~strikethrough~~')).resolves.toBe('<p><del>strikethrough</del></p>');
    });
  });

  describe('Code', () => {
    test('transforms "`code`" to "<code>code</code>"', async () => {
      await expect(parseMd('`code`')).resolves.toBe('<p><code>code</code></p>');
    });
  });
});
