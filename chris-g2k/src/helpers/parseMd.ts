import Prism from 'prismjs'; // code syntax highlight library
import replaceAsync from './replaceAsync';

// lists (unordered, ordered, task)
function lists(m: string) {
  const leadingSpaces: number[] = []; // spaces each before list item
  const nestDepths: [string, number][] = []; // array of [ul/ol, depth(leading space for the element)]

  let result = ''; // final html output

  m.split('\n').forEach((line, i) => {
    leadingSpaces.push(line.length - line.trimStart().length);
    const pushIn = leadingSpaces[i] - leadingSpaces[i - 1]; // leading space diff

    const isOl = !!line.match(/^ *\d/);
    const lineNum = isOl ? `start=${line.match(/\d+/)![0]}` : '';
    const el = isOl ? 'ol' : 'ul';

    // task checkbox
    const isChecked = !!line.match(/^ *(?:\d+\.|[-+*]) +\[x\] /i);
    const isUnchecked = !!line.match(/^ *(?:\d+\.|[-+*]) +\[ \] /i);

    // checbox
    const input =
      isChecked || isUnchecked
        ? `<input type="checkbox" disabled class="item-checkbox" ${isChecked ? 'checked' : ''}>`
        : '';

    const classBox = isChecked || isUnchecked ? 'class="checkbox-item"' : '';

    // regex to trim off markdown syntax from list text
    const reg = /^ *(?:\d+\.|[-+*]) +(?:\[[ x]\])?/i;

    if (Number.isNaN(pushIn)) {
      // firs line
      nestDepths.push([el, leadingSpaces[i - 1]]);
      result += `<${el} class='top' ${lineNum}>\n<li ${classBox}>${input} ${line
        .replace(reg, '')
        .trim()}`;
    } else if (pushIn === 0 || pushIn === 1) {
      // no nest change
      result += `</li>\n<li ${classBox}>${input} ${line.replace(reg, '').trim()}`;
    } else if (pushIn > 1) {
      // nestIn
      nestDepths.push([el, leadingSpaces[i - 1]]);

      result += `\n<${el} ${lineNum}>\n<li ${classBox}>${input} ${line.replace(reg, '').trim()}`;
    } else if (pushIn < 0) {
      // nestOut
      // pop out of nest as many times as we need to
      while (nestDepths.length > 1 && leadingSpaces[i] - nestDepths[nestDepths.length - 1][1] < 2) {
        result += `</li>\n</${nestDepths[nestDepths.length - 1][0]}>`;
        nestDepths.pop();
      }

      result += `</li>\n<li ${classBox}>${input} ${line.replace(reg, '').trim()}`;
    }
  });

  // close all open nests
  for (let i = nestDepths.length - 1; i >= 0; i--) {
    result += `</li>\n</${nestDepths[i][0]}>`;
  }

  return result;
}

// asynchroneous for the case of fetching non-default language syntax highlighting module
async function parseMd(md: string): Promise<string> {
  // mitigate difference in windows and linux line endings
  md = md.replace(/\r\n?/gm, '\n');

  // escape secial characters
  md = md.replace(/\\(.)/g, (m, c) => {
    if (c === '\\') return '&#92;'; // escape backslash itself

    const escapeable = '`*-{}[]<>()#+-.!|'.includes(c); // escapeable characters

    if (escapeable) return `&#${c.charCodeAt(0)};`;

    return m;
  });

  // Headings
  md = md.replace(/^ *#{6} +(.+)/gm, '<h6>$1</h6>');
  md = md.replace(/^ *#{5} +(.+)/gm, '<h5>$1</h5>');
  md = md.replace(/^ *#{4} +(.+)/gm, '<h4>$1</h4>');
  md = md.replace(/^ *#{3} +(.+)/gm, '<h3>$1</h3>');
  md = md.replace(/^ *#{2} +(.+)/gm, '<h2>$1</h2>');
  md = md.replace(/^ *#{1} +(.+)/gm, '<h1>$1</h1>');

  // alt Heading h1 h2
  md = md.replace(/^((.+)(\n.+)*?)\n==+$/gm, (m, g1) => `<h1>${g1.replace(/\n/g, '<br>')}</h1>`);
  // alt h2
  md = md.replace(/^((.+)(\n.+)*?)\n--+$/gm, (m, g1) => `<h2>${g1.replace(/\n/g, '<br>')}</h2>`);

  // lists
  md = md.replace(/^ *(?:\d+\.|[-+*]) .*(?:\n *(?:\d+\.|[-+*]) .*)*/gm, (m) => lists(m));

  // tables
  md = md.replace(/^ *\|(.*?\|)+ *\n *\|(:?-+:?\|)+( *\n *\|(.*?\|)+)* */gm, (m) => {
    const rows = m.split('\n'); // all table row

    // store each column's alignment
    // e.g alignment = [ 'align="center"', 'align="left"', 'align="right"', '', .. ]
    const alignment: string[] = rows[1]
      .split('|')
      .slice(1, -1)
      .map((col) => {
        const align = col.trim();
        return /:-+:/.test(align)
          ? ' align="center"'
          : /^-+:/.test(align)
          ? ' align="right"'
          : /:-+$/.test(align)
          ? ' align="left"'
          : '';
      });

    const headingRow: string = rows
      .shift() // remove first row (heading)
      ?.split('|')
      .slice(1, -1)
      .map((thCell, i) => `<th${alignment[i] || ''}>${thCell.trim()}</th>`)
      .join('')!;

    rows.shift(); // remove second row (alignment)

    const body: string = rows
      .map((row) => {
        const currentRow = row
          .split('|')
          .slice(1, -1)
          .map((cell, i) => `<td${alignment[i] || ''}>${cell.trim()}</td>`)
          .join('');
        return `<tr>\n${currentRow}\n</tr>`;
      })
      .join('\n');

    return `<table>\n<thead>\n<tr>\n${headingRow}\n</tr>\n</thead>\n\n<tbody>\n${body}\n</tbody>\n</table>`;
  });

  // hr - horizontal rule
  md = md.replace(/^ *([-*_])\1{2,} *$/gm, '<hr>');

  // pre with syntax highlighting
  md = await replaceAsync(md, /^ *(`{3,})(.*)\n((?:.*\n)*?) *\1/gm, async (m, g1, g2, g3) => {
    const lang: string = g2.trim().toLowerCase(); // guard against case sensitivity
    const code: string = g3;
    let highlightedCode = '';

    // default languages confiuqred in prismjs (vite.config.ts)
    if (/typescript|javascript|css|markdown|cpp|html|json/.test(lang)) {
      highlightedCode = Prism.highlight(code, Prism.languages[lang], lang);

      return `<pre class="lang-${lang}">${highlightedCode.replace(/\n/g, '<br>')}</pre>`;
    }

    // else import(bundled to fetch) the language and highlight
    await import(`../../node_modules/prismjs/components/prism-${lang}.js`)
      .then(() => {
        highlightedCode = Prism.highlight(code, Prism.languages[lang], lang);
      })
      .catch((e) => {
        highlightedCode = code;
      });
    return `<pre class="lang-${lang}">${highlightedCode.replace(/\n/g, '<br>')}</pre>`;
  });

  // blockquote, nesting capable through simple recursion
  md = await replaceAsync(
    md,
    /^ *>.*(\n *>?.+)*/gm, // match, auto guard against infinite recursion
    // function not called if no match
    async (m) => `<blockquote>${await parseMd(m.replace(/^ *>/gm, ''))}</blockquote>`
  );

  // paragraph p
  md = md.replace(
    /^(?![ \t]*[<\n]).+(\n(?![ \t]*[<\n]).+)*/gm,
    (m) => `<p>${m.replace(/\n/g, '<br>')}</p>`
  );

  // INLINE TRANSFORMATIONS hAPPENS AFTER ALL BLOCK LEVEL TRANSFORMS

  // images
  md = md.replace(
    /!\[(.*?)\]\( *(\S+?)(?: (['"])(.*?)\3)? *\)/gm,
    (m, g1, g2, g3, g4) =>
      `<img src="${g2.trim()}" alt="${g1 ? g1.trim() : ''}" title="${g4 ? g4.trim() : ''}">`
  );

  // links
  md = md.replace(
    /(?<!^<pre.*)\[(.+?)\]\( *(\S+?)(?: (['"])(.*?)\3)? *\)/gim,
    (m, g1, g2, g3, g4) => `<a href="${g2.trim()}" title="${g4 ? g4.trim() : ''}">${g1.trim()}</a>`
  );

  // auto links
  md = md.replace(
    /(?<!^<pre.*)(?<!href=['"]|src=['"])<?\b(https?:\/\/[^\s<>]+)>?/gim,
    '<a href="$1">$1</a>'
  );
  // www. links
  md = md.replace(
    /(?<!^<pre.*)(?<!https?:\/\/)<?\b(www\.[^\s<>]+)>?/gim,
    '<a href="http://$1">$1</a>'
  );
  // Emails
  md = md.replace(/(?<!^<pre.*)\b(\w+@\w+\.\w+)/gim, '<a href="mailto:$1">$1</a>');

  // bold
  md = md.replace(/(?<!^<pre.*)(\*\*|__)([^*_\n].*?)\1/gim, '<strong>$2</strong>');
  // italic
  md = md.replace(/(?<!^<pre.*)([*_])([^*_\n]+)\1/gim, '<em>$2</em>');
  // strikethrough
  md = md.replace(/(?<!^<pre.*)~~([^~\n].*?)~~/gim, '<del>$1</del>');

  // subscript
  md = md.replace(/(?<!^<pre.*)~([^~\n]+)~/gim, '<sub>$1</sub>');
  // superscript
  md = md.replace(/(?<!^<pre.*)\^([^^\n]+)\^/gim, '<sup>$1</sup>');

  // Highlighting
  md = md.replace(/(?<!^<pre.*)==([^=\n].*?)==/gim, '<mark>$1</mark>');

  // code
  md = md.replace(/(?<!^<pre.*)`([^`\n]+)`/gim, '<code>$1</code>');

  return md;
}

export default parseMd;
