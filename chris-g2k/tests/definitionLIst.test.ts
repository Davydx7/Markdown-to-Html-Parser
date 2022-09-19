import { test, describe, expect } from 'vitest';

import parseMd from '../src/helpers/parseMd';

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
