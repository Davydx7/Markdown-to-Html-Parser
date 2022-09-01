import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

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
});

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
});

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

// code block
// describe('Code Block', () => {
