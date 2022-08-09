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
});
