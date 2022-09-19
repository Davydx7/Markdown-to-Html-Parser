import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Headings 1 to 6
describe('Headings edit wow', () => {
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

  // multiple headings with text formatting
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

  // heading alternate syntaxes for h1 and h2
  describe('alternative headings for h1 and h2', () => {
    // alternate syntax for h1
    test('transforms  "heading 1\n=====" to "<h1>heading 1</h1>', async () => {
      await expect(parseMd('heading 1\n=====')).resolves.toBe('<h1>heading 1</h1>');
    });

    test('transforms  multiple consecutive "====" h1 headings ', async () => {
      await expect(parseMd('heading 1\n=====\nheading 1\n=====')).resolves.toBe(
        '<h1>heading 1</h1>\n<h1>heading 1</h1>'
      );
    });

    // alt h1 with text formattings
    test('transforms  "heading 1\n=====" with text formatting', async () => {
      await expect(parseMd('heading 1\n=====\n')).resolves.toBe('<h1>heading 1</h1>');
    });

    // alternate h2 syntax
    test('transforms  "heading 2\n-----" to "<h2>heading 2</h2>', async () => {
      await expect(parseMd('heading 2\n-----')).resolves.toBe('<h2>heading 2</h2>');
    });

    // alt h2 with text formattings
    test('transforms  "heading 2\n-----" with text formatting', async () => {
      await expect(parseMd('heading 2\n-----\n')).resolves.toBe('<h2>heading 2</h2>');
    });
  });
});
