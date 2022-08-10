function parseMd(md: string) {
  // mitigate windows and linux line endings
  md = md.replace(/\r\n|\r/gm, '\n');

  // console.log('initial', md);

  // Headings
  md = md.replace(/#{6} +(.+)/g, '<h6>$1</h6>');
  md = md.replace(/#{5} +(.+)/g, '<h5>$1</h5>');
  md = md.replace(/#{4} +(.+)/g, '<h4>$1</h4>');
  md = md.replace(/#{3} +(.+)/g, '<h3>$1</h3>');
  md = md.replace(/#{2} +(.+)/g, '<h2>$1</h2>');
  md = md.replace(/#{1} +(.+)/g, '<h1>$1</h1>');

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

  // images
  md = md.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');

  // links
  md = md.replace(
    /[[]{1}([^\]]+)[\]]{1}[(]{1}([^)"]+)("(.+)")?[)]{1}/g,
    '<a href="$2" title="$4">$1</a>'
  );

  // font styles
  md = md.replace(/[*_]{2}([^*_]+)[*_]{2}/g, '<strong>$1</strong>');
  md = md.replace(/[*_]{1}([^*_]+)[*_]{1}/g, '<em>$1</em>');
  md = md.replace(/[~]{2}([^~]+)[~]{2}/g, '<del>$1</del>');

  // ul
  md = md.replace(/^\*/gm, '\n<ul>\n*');
  md = md.replace(/^(\*.+)\s*\n([^*])/gm, '$1\n</ul>\n$2');
  md = md.replace(/^\*(.+)/gm, '<li>$1</li>');

  // ol
  md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
  md = md.replace(/^(\d\..+)\s*\n([^\d.])/gm, '$1\n</ol>\n$2');
  md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');

  // blockquote
  md = md.replace(
    /^>.+(\n>?.+)*/gm,
    (m) => `<blockquote>${m.replace(/\n/g, '<br>').replace(/(?<!<\w+)>/g, '')}</blockquote>`
  );

  // pre
  md = md.replace(/^\s*\n```(([^\s]+))?/gm, '<pre class="$2">');
  md = md.replace(/^```\s*\n/gm, '</pre>\n\n');

  // code
  md = md.replace(/[`]{1}([^`]+)[`]{1}/g, '<code>$1</code>');

  // p
  md = md.replace(/((^[^<\n\d>].*)(\n[^<\n].*)*)/gm, '<p>$1</p>');

  // strip p from pre
  md = md.replace(/(<pre.+>)\s*\n<p>(.+)<\/p>/gm, '$1$2');

  return md;
}

export default parseMd;
