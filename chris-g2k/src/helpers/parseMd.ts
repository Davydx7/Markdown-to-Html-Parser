// IMPLEMENTATION HIERACHY
// block level single line element syntax
// - headings
// Block level multiline element syntax that can contain other blocks (makes provision for next in hierachy)
// - BlockQuotes
// Block level element syntax allowed in other blocks
// Block level that can't contain other blocks
// inline elements

function parseMd(md: string): string {
  // mitigate windows and linux line endings
  md = md.replace(/\r\n?/gm, '\n');

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
    (m) => `<blockquote>${m.replace(/^> */gm, '').replace(/\n/g, '<br>')}</blockquote>`
  );

  // pre
  md = md.replace(
    /^(`{3,})([^`\n].*)?\n((^(?!\1).*\n)*)\1/gm,
    (m, g1, g2, g3) => `<pre lang=${g2}>${g3.replace(/\n/g, '<br>')}</pre>`
  );

  // p
  md = md.replace(/^[^<\n\d>].*(\n[^<\n].*)*/gm, (m) => `<p>${m.replace(/\n/g, '<br>')}</p>`);

  // INLINE TRANSFORMS hAPPENS AFTER ALL BLOCK TRANSFORMS

  // images
  md = md.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');

  // links
  md = md.replace(
    /[[]{1}([^\]]+)[\]]{1}[(]{1}([^)"]+)("(.+)")?[)]{1}/g,
    '<a href="$2" title="$4">$1</a>'
  );

  // bold
  md = md.replace(/([*_]{2})([^*_\n].*?)\1/g, '<strong>$2</strong>');
  // italic
  md = md.replace(/([*_])([^*_\n]+)\1/g, '<em>$2</em>');
  // strikethrough
  md = md.replace(/~~([^~\n].*?)~~/g, '<del>$1</del>');

  // code
  md = md.replace(/`([^`\n]+)`/g, '<code>$1</code>');

  return md;
}

export default parseMd;
