// @vitest-environment jsdom

import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// List (ordered, unordered and task list)
describe('Lists', () => {
  describe('Ordered', () => {
    test('single item ordered list', async () => {
      await expect(parseMd('1. list item')).resolves.toBe(
        `<ol start="1" class="top">
<li> list item</li>
</ol>`
      );
    });

    test('multiple item in Ordered list', async () => {
      await expect(
        parseMd(
          `1. list item 1
2. list item 2
3. list item 3`
        )
      ).resolves.toBe(
        `<ol start="1" class="top">
<li> list item 1</li>
<li> list item 2</li>
<li> list item 3</li>
</ol>`
      );
    });

    test('ol starting from arbitrary number', async () => {
      await expect(
        parseMd(
          `6. arbitrary start
7. continues
10. continues with 8`
        )
      ).resolves.toBe(
        `<ol start="6" class="top">
<li> arbitrary start</li>
<li> continues</li>
<li> continues with 8</li>
</ol>`
      );
    });

    test('nested ordered list', async () => {
      await expect(
        parseMd(
          `1. list item 1
  1. sublist item
  2. sublist item
    1. more nesting
    2. yes
      1. even more!
    3. list item
2. list item`
        )
      ).resolves.toBe(
        `<ol start="1" class="top">
<li> list item 1
<ol start="1">
<li> sublist item</li>
<li> sublist item
<ol start="1">
<li> more nesting</li>
<li> yes
<ol start="1">
<li> even more!</li>
</ol></li>
<li> list item</li>
</ol></li>
</ol></li>
<li> list item</li>
</ol>`
      );
    });
    test('nested ordered list with arbitrary starts', async () => {
      await expect(
        parseMd(
          `5. list item 1
  8. sublist item
  2. sublist item
    9. more nesting
2. list item
3. list item`
        )
      ).resolves.toBe(
        `<ol start="5" class="top">
<li> list item 1
<ol start="8">
<li> sublist item</li>
<li> sublist item
<ol start="9">
<li> more nesting</li>
</ol></li>
</ol></li>
<li> list item</li>
<li> list item</li>
</ol>`
      );
    });
  });

  describe('Unordered', () => {
    test('single item unordered list', async () => {
      await expect(parseMd('- list item')).resolves.toBe(
        `<ul class="top">
<li> list item</li>
</ul>`
      );
    });

    test('multiple item in unordered list', async () => {
      await expect(
        parseMd(
          `- list item 1
- list item 2
- list item 3`
        )
      ).resolves.toBe(
        `<ul class="top">
<li> list item 1</li>
<li> list item 2</li>
<li> list item 3</li>
</ul>`
      );
    });

    test('nested unordered list', async () => {
      await expect(
        parseMd(
          `- list item 1
  - sublist item
  - sublist item
    - more nesting
    - yes
      - even more!
    - list item
- list item`
        )
      ).resolves.toBe(
        `<ul class="top">
<li> list item 1
<ul>
<li> sublist item</li>
<li> sublist item
<ul>
<li> more nesting</li>
<li> yes
<ul>
<li> even more!</li>
</ul></li>
<li> list item</li>
</ul></li>
</ul></li>
<li> list item</li>
</ul>`
      );
    });
  });

  describe('Task List', () => {
    test("single checked and unchecked task list'", async () => {
      await expect(
        parseMd(
          `- [x] list item checked
- [ ] list item unchecked`
        )
      ).resolves.toBe(
        `<ul class="top">
<li class="checkbox-item"><input checked="" class="item-checkbox" disabled="" type="checkbox"> list item checked</li>
<li class="checkbox-item"><input class="item-checkbox" disabled="" type="checkbox"> list item unchecked</li>
</ul>`
      );
    });

    test('multiple item task list', async () => {
      await expect(parseMd('- [x] item 1')).resolves.toBe(
        '<ul>\n<li><input type="checkbox" disabled checked> item 1</li>\n</ul>'
      );
    });

    test('nested task list', async () => {
      await expect(parseMd('- [ ] item 1\n  - [x] item 2')).resolves.toBe(
        '<ul>\n<li><input type="checkbox" disabled> item 1\n<ul>\n<li><input type="checkbox" disabled checked> item 2</li>\n</ul>\n</li>\n</ul>'
      );
    });
  });

  describe('list combinations', () => {
    test('ol > ul > tl', async () => {
      await expect(parseMd('- [ ] item 1')).resolves.toBe(
        '<ul>\n<li><input type="checkbox" disabled> item 1</li>\n</ul>'
      );
    });

    test('ol > tl > ul', async () => {
      await expect(parseMd('- [x] item 1')).resolves.toBe(
        '<ul>\n<li><input type="checkbox" disabled checked> item 1</li>\n</ul>'
      );
    });

    test('ul > ol > tl', async () => {
      await expect(parseMd('- [ ] item 1')).resolves.toBe(
        '<ul>\n<li><input type="checkbox" disabled> item 1</li>\n</ul>'
      );
    });

    test('ul > tl > ol', async () => {
      await expect(parseMd('- [x] item 1')).resolves.toBe(
        '<ul>\n<li><input type="checkbox" disabled checked> item 1</li>\n</ul>'
      );
    });

    test('tl > ol > ul', async () => {
      await expect(parseMd('- [ ] item 1')).resolves.toBe(
        '<ul>\n<li><input type="checkbox" disabled> item 1</li>\n</ul>'
      );
    });

    test('tl > ul > ol', async () => {
      await expect(parseMd('- [x] item 1')).resolves.toBe(
        '<ul>\n<li><input type="checkbox" disabled checked> item 1</li>\n</ul>'
      );
    });

    test('ul, ol, tl with all text formattings', async () => {
      await expect(parseMd('- [x] item 1')).resolves.toBe(
        '<ul>\n<li><input type="checkbox" disabled checked> item 1</li>\n</ul>'
      );
    });
  });
});
