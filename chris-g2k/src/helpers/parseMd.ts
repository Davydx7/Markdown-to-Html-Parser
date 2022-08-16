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
  md = md.replace(
    /^((.+\n)+)=+$/gm,
    (m, g1) => `<h1>${g1.replace(/\n/g, '<br>').replace(/<br>=+<br>/g, '</h1>\n<h1>')}</h1>`
  );
  // alt h2
  md = md.replace(
    /^((.+\n)+)-+$/gm,
    (m, g1) => `<h2>${g1.replace(/\n/g, '<br>').replace(/<br>-+<br>/g, '</h2>\n<h2>')}</h2>`
  );

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

  // pre
  md = md.replace(
    /^(`{3,})([^`\n].*)?\n((^(?!\1).*\n)*)\1/gm,
    (m, g1, g2, g3) => `<pre lang="${g2}">${g3.replace(/\n/g, '<br>')}</pre>`
  );

  // p
  md = md.replace(
    /^(?![ \t]*[<\n]).+(\n(?![ \t]*[<\n]).+)*/gm,
    (m) => `<p>${m.replace(/\n/g, '<br>')} </p>`
  );

  // INLINE TRANSFORMS hAPPENS AFTER ALL BLOCK TRANSFORMS

  // images
  // md = md.replace(/!\[([^\]]+)\]\(([^)]+)\)/gm, '<img src="$2" alt="$1" />');

  // links
  md = md.replace(/\[(.+?)\]\( *([^\s]+?)( (['"]).*?\4)? *\)/gm, '<a href="$2" title=$3>$1</a>');

  // auto links
  md = md.replace(/(?<!href=['"])<?\b(https?:\/\/[^\s>]+)>?/gm, '<a href="$1">$1</a>');
  md = md.replace(/(?<!https?:\/\/)\b(www\.[^\s]+)/gm, '<a href="http://$1">$1</a>');
  // md = md.replace(/\b(mailto:[^\s]+)/gm, '<a href="$1">$1</a>');
  // md = md.replace(/\b(ftp:[^\s]+)/gm, '<a href="$1">$1</a>');
  // md = md.replace(/\b(data:[^\s]+)/gm, '<a href="$1">$1</a>');
  // md = md.replace(/\b(tel:[^\s]+)/gm, '<a href="$1">$1</a>');

  // bold
  md = md.replace(/([*_]{2})([^*_\n].*?)\1/g, '<strong>$2</strong>');
  // italic
  md = md.replace(/([*_])([^*_\n]+)\1/g, '<em>$2</em>');
  // strikethrough
  md = md.replace(/~~([^~\n].*?)~~/g, '<del>$1</del>');

  // subscript
  md = md.replace(/~([^~\n]+)~/g, '<sub>$1</sub>');
  // superscript
  md = md.replace(/\^([^^\n]+)\^/g, '<sup>$1</sup>');

  // Highlighting
  md = md.replace(/==([^=\n].*?)==/g, '<mark>$1</mark>');

  // code
  md = md.replace(/`([^`\n]+)`/g, '<code>$1</code>');

  return md;
}

export default parseMd;
