import Prism from 'prismjs';

function parseMd(md: string): string {
  // mitigate windows and linux line endings
  md = md.replace(/\r\n?/gm, '\n');

  // escape secial characters
  md = md.replace(/\\(.)/g, (m, c) => {
    if (c === '\\') return '&#92;';

    const escapeable = '`*-{}[]<>()#+-.!|'.includes(c);

    if (escapeable) return `&#${c.charCodeAt(0)};`;

    return m;
  });

  // Headings
  md = md.replace(/^#{6} +(.+)/gm, '<h6>$1</h6>');
  md = md.replace(/^#{5} +(.+)/gm, '<h5>$1</h5>');
  md = md.replace(/^#{4} +(.+)/gm, '<h4>$1</h4>');
  md = md.replace(/^#{3} +(.+)/gm, '<h3>$1</h3>');
  md = md.replace(/^#{2} +(.+)/gm, '<h2>$1</h2>');
  md = md.replace(/^#{1} +(.+)/gm, '<h1>$1</h1>');

  // alt Heading h1 h2
  md = md.replace(/^((.+\n)+?)=+$/gm, (m, g1) => `<h1>${g1.replace(/\n/g, '<br>')}</h1>`);
  // alt h2
  md = md.replace(/^((.+\n)+?)-+$/gm, (m, g1) => `<h2>${g1.replace(/\n/g, '<br>')}</h2>`);

  // ul
  md = md.replace(/^ *([-+*] ).+(\n *\1.+)*/gm, (m, g1) => {
    const list = m
      .split('\n')
      .map((l) => `<li>${l.replace(g1, '')}</li>`)
      .join('\n');
    return `<ul>\n${list}\n</ul>`;
  });

  // ol
  md = md.replace(/^ *(\d+)\. .*(\n *\d+\. .*)*/gm, (m, g1) => {
    const li = m
      .split('\n')
      .map((l) => `<li>${l.replace(/^ *\d+\. /, '')}</li>`)
      .join('\n');
    return `<ol start=${g1}>\n${li}\n</ol>`;
  });

  // tables
  md = md.replace(/^\|(.*?\|)+\n\|(:?-+:?\|)+(\n\|(.*?\|)+)*/gm, (m) => {
    const rows = m.split('\n');

    const alignment = rows[1].split('|').map((col) => {
      const align = col.trim();
      return /:-+:/.test(align)
        ? 'align="center"'
        : /^-+:/.test(align)
        ? 'align="right"'
        : /:-+$/.test(align)
        ? 'align="left"'
        : '';
    });

    const headingRow = rows
      .shift()
      ?.split('|')
      .slice(1, -1)
      .map((thCell, i) => `<th ${alignment[i] || ''}>${thCell.trim()}</th>`)
      .join('');

    rows.shift();

    const body = rows
      .map((row) => {
        const currentRow = row
          .split('|')
          .slice(1, -1)
          .map((cell, i) => `<td ${alignment[i] || ''}>${cell.trim()}</td>`)
          .join('');
        return `<tr>\n${currentRow}\n</tr>`;
      })
      .join('');

    return `<table>\n<thead>\n<tr>\n${headingRow}\n</tr>\n</thead>\n\n<tbody>\n${body}\n</tbody>\n</table>`;
  });

  // blockquote
  md = md.replace(
    /^>.+(\n>?.+)*/gm,
    (m) => `<blockquote>${m.replace(/^> */gm, '').replace(/\n/g, '<br>')}</blockquote>`
  );

  // pre with syntax highlighting
  md = md.replace(/^(`{3,})(.*)\n((?:.*\n)*?)\1/gm, (m, g1, g2, g3) => {
    const lang = g2.trim();
    const code = g3.trim();
    let highlightedCode = '';
    try {
      // const path = `prismjs/components/prism-${lang}`;
      // console.log('path', path);
      import(`../../node_modules/prismjs/components/prism-${lang}.js`);
      highlightedCode = Prism.highlight(code, Prism.languages[lang], lang);
    } catch (e) {
      highlightedCode = code;
    }
    return `<pre>${highlightedCode.replace(/\n/g, '<br>')}</pre>`;
  });

  // p
  md = md.replace(
    /^(?![ \t]*[<\n]).+(\n(?![ \t]*[<\n]).+)*/gm,
    (m) => `<p>${m.replace(/\n/g, '<br>')} </p>`
  );

  // INLINE TRANSFORMS hAPPENS AFTER ALL BLOCK TRANSFORMS

  // images
  md = md.replace(
    /!\[(.+?)\]\( *([^\s]+?)( (['"]).*?\4)? *\)/gm,
    '<img src="$2" alt="$1" title=$3/>'
  );

  // links
  md = md.replace(
    /(?<!^<pre>.*)\[(.+?)\]\( *([^\s]+?)( (['"]).*?\4)? *\)/gm,
    '<a href="$2" title=$3>$1</a>'
  );

  // auto links
  md = md.replace(
    /(?<!^<pre>.*)(?<!href=['"]|src=['"])<?\b(https?:\/\/[^\s>]+)>?/gm,
    '<a href="$1">$1</a>'
  );
  // www. links
  md = md.replace(
    /(?<!^<pre>.*)(?<!https?:\/\/)<?\b(www\.[^\s>]+)>?/gm,
    '<a href="http://$1">$1</a>'
  );
  // Emails
  md = md.replace(/(?<!^<pre>.*)\b(\w+@\w+\.\w+)/gm, '<a href="mailto:$1">$1</a>');

  // bold
  md = md.replace(/(?<!^<pre>.*)([*_]{2})([^*_\n].*?)\1/gm, '<strong>$2</strong>');
  // italic
  md = md.replace(/(?<!^<pre>.*)([*_])([^*_\n]+)\1/gm, '<em>$2</em>');
  // strikethrough
  md = md.replace(/(?<!^<pre>.*)~~([^~\n].*?)~~/gm, '<del>$1</del>');

  // subscript
  md = md.replace(/(?<!^<pre>.*)~([^~\n]+)~/gm, '<sub>$1</sub>');
  // superscript
  md = md.replace(/(?<!^<pre>.*)\^([^^\n]+)\^/gm, '<sup>$1</sup>');

  // Highlighting
  md = md.replace(/(?<!^<pre>.*)==([^=\n].*?)==/gm, '<mark>$1</mark>');

  // code
  md = md.replace(/(?<!^<pre>.*)`([^`\n]+)`/gm, '<code>$1</code>');

  return md;
}

export default parseMd;
