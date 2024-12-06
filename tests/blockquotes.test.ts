// @vitest-environment jsdom

import { test, describe, expect, vi } from 'vitest';

import parseMd from '../src/helpers/parseMd';

// Blockquotes
describe('Blockquotes', () => {
  test('single line blockquote', async () => {
    await expect(parseMd('>single line blockquote')).resolves.toBe(
      '<blockquote><p>single line blockquote</p></blockquote>'
    );
  });
  // nested blockquotes
  test('several nested blockquotes', async () => {
    await expect(
      parseMd(
        `>single line blockquote
>>nested block
>>>deeper nest`
      )
    ).resolves.toBe(
      `<blockquote><p>single line blockquote</p>
<blockquote><p>nested block</p>
<blockquote><p>deeper nest</p></blockquote></blockquote></blockquote>`
    );
  });
  // blockquotes with paragraphs
  test('blockquote with multiline paragraph', async () => {
    await expect(
      parseMd(
        `>single line blockquote
>>nested block
>>paragraph continues
>>and on`
      )
    ).resolves.toBe(
      `<blockquote><p>single line blockquote</p>
<blockquote><p>nested block<br>paragraph continues<br>and on</p></blockquote></blockquote>`
    );
  });

  // blockquotes with lists
  test('nested ordered, unordered and tasks list in nested blockquote', async () => {
    await expect(
      parseMd(
        `>blockquote
>>- nested list in blockqoute
>>- item 2
>>  - nests
>>    1. numbered nest
>>    2. in blockquote
>>      - [x] check list nesting
>>continues`
      )
    ).resolves.toBe(
      `<blockquote><p>blockquote</p>
<blockquote><ul class="top">
<li> nested list in blockqoute</li>
<li> item 2
<ul>
<li> nests
<ol start="1">
<li> numbered nest</li>
<li> in blockquote
<ul>
<li class="checkbox-item"><input checked="" class="item-checkbox" disabled="" type="checkbox"> check list nesting</li>
</ul></li>
</ol></li>
</ul></li>
</ul>
<p>continues</p></blockquote></blockquote>`
    );
  });

  // blockquotes with code blocks
  test('code block in blockqoute', async () => {
    await expect(
      parseMd(
        `> \`\`\`javascript
> let works = 'it Works!'
> console.log('awesome')
> \`\`\``
      )
    ).resolves.toBe(
      `<blockquote><pre class="lang-javascript"> <span class="token keyword">let</span> works <span class="token operator">=</span> <span class="token string">'it Works!'</span><br> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'awesome'</span><span class="token punctuation">)</span><br></pre></blockquote>`
    );
  });

  // blockquotes with headings 1 to 6
  test('headings 1 to 6 in blockqoute', async () => {
    await expect(
      parseMd(
        `># Heading 1
>## Heading 2
>### Heading 3
>#### Heading 4
>##### Heading 5
>###### Heading 6`
      )
    ).resolves.toBe(
      `<blockquote><h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6></blockquote>`
    );
  });

  // blockquotes with alt heading 1 and 2 syntaxes
  test('alt heading 1 and 2 syntaxes in blockqoute', async () => {
    await expect(
      parseMd(
        `>Heading 1
>===
>
>Heading 2
>---`
      )
    ).resolves.toBe(
      `<blockquote><h1>Heading 1</h1>

<h2>Heading 2</h2></blockquote>`
    );
  });

  // blockquotes with horizontal rules between paragraphs
  test('horizontal rule between paragraph in blockqoute', async () => {
    await expect(
      parseMd(
        `>paragraphs one
>ends here
>
>-----
>paragrapsh two
>ends here`
      )
    ).resolves.toBe(
      `<blockquote><p>paragraphs one<br>ends here</p>

<hr>
<p>paragrapsh two<br>ends here</p></blockquote>`
    );
  });

  // blockquotes with tables
  test('table contanined in blockquotes', async () => {
    await expect(
      parseMd(
        `> |see| this | work |
> |:---|:--:|--:|
> | first|row right |here|
> |second|row|right here|`
      )
    ).resolves.toBe(
      `<blockquote><table>
<thead>
<tr>
<th align="left">see</th><th align="center">this</th><th align="right">work</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">first</td><td align="center">row right</td><td align="right">here</td>
</tr>
<tr>
<td align="left">second</td><td align="center">row</td><td align="right">right here</td>
</tr>
</tbody>
</table></blockquote>`
    );
  });

  // blockquotes with all inline text formatting
  test('all inline text formattings in nested blockquotes', async () => {
    await expect(
      parseMd(
        `>*italic* , **bold**, ~~strikethrough~~ , H~subscript~, H^superscript^, ==highlighted== and \`code\`
>>*italic* , **bold**, ~~strikethrough~~ , H~subscript~, H^superscript^, ==highlighted== and \`code\``
      )
    ).resolves.toBe(
      `<blockquote><p><em>italic</em> , <strong>bold</strong>, <del>strikethrough</del> , H<sub>subscript</sub>, H<sup>superscript</sup>, <mark>highlighted</mark> and <code>code</code></p>
<blockquote><p><em>italic</em> , <strong>bold</strong>, <del>strikethrough</del> , H<sub>subscript</sub>, H<sup>superscript</sup>, <mark>highlighted</mark> and <code>code</code></p></blockquote></blockquote>`
    );
  });
});
