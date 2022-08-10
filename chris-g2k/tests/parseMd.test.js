// import parseMd from '../src/helpers/parseMd';

const parseMD = require('../src/helpers/parseMd.js');

const { parseMd } = parseMD;

describe('Headings', () => {
  test("transforms '# heading 1' to '<h1>heading 1</h1>'", () => {
    expect(parseMd('# heading 1')).toBe('<h1>heading 1</h1>');
  });

  test("transforms '## heading 2' to '<h2>heading 2</h2>'", () => {
    expect(parseMd('## heading 2')).toBe('<h2>heading 2</h2>');
  });

  test("transforms '### heading 3' to '<h3>heading 3</h3>'", () => {
    expect(parseMd('### heading 3')).toBe('<h3>heading 3</h3>');
  });

  test("transforms '#### heading 4' to '<h4>heading 4</h4>'", () => {
    expect(parseMd('#### heading 4')).toBe('<h4>heading 4</h4>');
  });

  test("transforms '##### heading 5' to '<h2>heading 5</h5>'", () => {
    expect(parseMd('##### heading 5')).toBe('<h5>heading 5</h5>');
  });

  test("transforms '###### heading 6' to '<h6>heading 6</h6'", () => {
    expect(parseMd('###### heading 6')).toBe('<h6>heading 6</h6>');
  });

  describe('with multiple headings', () => {
    test('transforms multiple headings with multiple lines and multiple headings', () => {
      expect(
        parseMd(
          '# heading 1\n## heading 2\n### heading 3\n#### heading 4\n##### heading 5\n###### heading 6'
        )
      ).toBe(
        '<h1>heading 1</h1>\n<h2>heading 2</h2>\n<h3>heading 3</h3>\n<h4>heading 4</h4>\n<h5>heading 5</h5>\n<h6>heading 6</h6>'
      );
    });
  });

  describe('alternative headings for h1 and h2', () => {
    test('transforms  "heading 1\n=====" to "<h1>heading 1</h1>', () => {
      expect(parseMd('heading 1\n=====')).toBe('<h1>heading 1</h1>');
    });

    test('transforms  "heading 2\n-----" to "<h2>heading 2</h2>', () => {
      expect(parseMd('heading 2\n-----')).toBe('<h2>heading 2</h2>');
    });
  });
});

describe('Font styles', () => {
  describe('Bold', () => {
    test("transforms '**bold**' to '<strong>bold</strong>'", () => {
      expect(parseMd('**bold**')).toBe('<strong>bold</strong>');
    });
    test("transforms '__bold__' to '<strong>bold</strong>'", () => {
      expect(parseMd('__bold__')).toBe('<strong>bold</strong>');
    });
  });

  describe('Italic', () => {
    test("transforms '*italic*' to '<em>italic</em>'", () => {
      expect(parseMd('*italic*')).toBe('<em>italic</em>');
    });
    test("transforms '_italic_' to '<em>italic</em>'", () => {
      expect(parseMd('_italic_')).toBe('<em>italic</em>');
    });
  });

  describe('Bold and Italic', () => {
    test("transforms '***Bold and Italic***' to '<em><strong>Bold and Italic</strong></em>'", () => {
      expect(parseMd('***bold and italic***')).toBe('<em><strong>bold and italic</strong></em>');
    });
    test("transforms '___bold and italic___' to '<em><strong>bold and italic</strong></em>'", () => {
      expect(parseMd('___bold and italic___')).toBe('<em><strong>bold and italic</strong></em>');
    });
  });

  describe('Strikethrough', () => {
    test("transforms '~~strikethrough~~' to '<del>strikethrough</del>'", () => {
      expect(parseMd('~~strikethrough~~')).toBe('<del>strikethrough</del>');
    });
  });

  describe('Code', () => {
    test('transforms "`code`" to "<code>code</code>"', () => {
      expect(parseMd('`code`')).toBe('<code>code</code>');
    });
  });
});

describe('Paragraphs', () => {
  test('transforms "paragraph" to "<p>paragraph</p>"', () => {
    expect(parseMd('paragraph')).toBe('<p>paragraph</p>');
  });
  test('transforms "paragraph\nparagraph" to "<p>paragraph\nparagraph</p>"', () => {
    expect(parseMd('paragraph\nparagraph')).toBe('<p>paragraph\nparagraph</p>');
  });
  test('transforms "paragraph 1\n\nparagraph 2" to "<p>paragraph 1</p>\n\n<p>paragraph 2</p>"', () => {
    expect(parseMd('paragraph 1\n\nparagraph 2')).toBe('<p>paragraph 1</p>\n\n<p>paragraph 2</p>');
  });
});

describe('Links', () => {
  test.todo('transforms "[text](url)" to "<a href="url">text</a>"');
  test.todo('transforms "[text](url "title")" to "<a href="url" title="title">text</a>"');
  test.todo('transforms "[text](url title)" to "<a href="url" title="title">text</a>"');
});

describe('Images', () => {
  test.todo('transforms "![text](url)" to "<img src="url" alt="text">"');
  test.todo('transforms "![text](url "title")" to "<img src="url" title="title" alt="text">"');
  test.todo('transforms "![text](url title)" to "<img src="url" title="title" alt="text">"');
});

describe('Lists', () => {
  describe('Unordered', () => {
    test.todo("transforms '- item 1' to '<ul><li>item 1</li></ul>'");
    // , () => {
    //   expect(parseMd('- item 1')).toBe('<li>item 1</li>');
    // });
    test.todo("transforms '- item 1\n- item 2' to '<ul><li>item 1</li><li>item 2</li></ul>'");
    // , () => {
    //   expect(parseMd('- item 1\n- item 2')).toBe('<li>item 1</li><li>item 2</li>');
    // });
  });

  describe('Ordered', () => {
    test.todo("transforms '1. item 1' to '<ol><li>item 1</li></ol>'");
    // , () => {
    //   expect(parseMd('- item 1')).toBe('<li>item 1</li>');
    // });
    test.todo("transforms '1. item 1\n2. item 2' to '<ol><li>item 1</li><li>item 2</li></ol>'");
    // , () => {
    //   expect(parseMd('- item 1\n- item 2')).toBe('<li>item 1</li><li>item 2</li>');
    // });
  });
});

describe('Tables', () => {
  test.todo(
    'transforms "| header 1 | header 2 |" to "<table><thead><tr><th>header 1</th><th>header 2</th></tr></thead><tbody></tbody></table>"'
  );
  // , () => {
  //   expect(parseMd('| header 1 | header 2 |')).toBe('<table><thead><tr><th>header 1</th><th>header 2</th></tr></thead><tbody></tbody></table>');
  //
});
