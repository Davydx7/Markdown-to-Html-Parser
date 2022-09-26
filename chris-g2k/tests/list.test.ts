import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// List (ordered, unordered and task list)
describe('Lists', () => {
  describe('Unordered', () => {
    test("transforms '- item 1' to '<ul><li>item 1</li></ul>'", async () => {
      await expect(parseMd('- item 1')).resolves.toBe('<ul>\n<li>item 1</li>\n</ul>');
    });
    test("transforms '- item 1\n- item 2' to '<ul><li>item 1</li><li>item 2</li></ul>'", async () => {
      await expect(parseMd('- item 1\n- item 2')).resolves.toBe(
        '<ul>\n<li>item 1</li>\n<li>item 2</li>\n</ul>'
      );
    });

    // nested unordered list
    test("transforms '- item 1\n  - item 2' to '<ul><li>item 1<ul><li>item 2</li></ul></li></ul>'", async () => {
      await expect(parseMd('- item 1\n  - item 2')).resolves.toBe(
        '<ul>\n<li>item 1\n<ul>\n<li>item 2</li>\n</ul>\n</li>\n</ul>'
      );
    });
  });

  describe('Ordered', () => {
    test("transforms '1. item 1' to '<ol><li>item 1</li></ol>'", async () => {
      await expect(parseMd('1. item 1')).resolves.toBe('<ol start=1>\n<li>item 1</li>\n</ol>');
    });
    test("transforms '1. item 1\n2. item 2' to '<ol><li>item 1</li><li>item 2</li></ol>'", async () => {
      await expect(parseMd('1. item 1\n2. item 2')).resolves.toBe(
        '<ol start=1>\n<li>item 1</li>\n<li>item 2</li>\n</ol>'
      );
    });

    // nested ordered list
    test("transforms '1. item 1\n  1. item 2' to '<ol><li>item 1<ol><li>item 2</li></ol></li></ol>'", async () => {
      await expect(parseMd('1. item 1\n  1. item 2')).resolves.toBe(
        '<ol start=1>\n<li>item 1\n<ol start=1>\n<li>item 2</li>\n</ol>\n</li>\n</ol>'
      );
    });
  });

  describe('Task List', () => {
    test("transforms '- [ ] item 1' to '<ul><li><input type='checkbox' disabled> item 1</li></ul>'", async () => {
      await expect(parseMd('- [ ] item 1')).resolves.toBe(
        '<ul>\n<li><input type="checkbox" disabled> item 1</li>\n</ul>'
      );
    });
    test("transforms '- [x] item 1' to '<ul><li><input type='checkbox' disabled checked> item 1</li></ul>'", async () => {
      await expect(parseMd('- [x] item 1')).resolves.toBe(
        '<ul>\n<li><input type="checkbox" disabled checked> item 1</li>\n</ul>'
      );
    });
  });
  // nested task list
  test("transforms '- [ ] item 1\n  - [x] item 2' to '<ul><li><input type='checkbox' disabled> item 1<ul><li><input type='checkbox' disabled checked> item 2</li></ul></li></ul>'", async () => {
    await expect(parseMd('- [ ] item 1\n  - [x] item 2')).resolves.toBe(
      '<ul>\n<li><input type="checkbox" disabled> item 1\n<ul>\n<li><input type="checkbox" disabled checked> item 2</li>\n</ul>\n</li>\n</ul>'
    );
  });
});
