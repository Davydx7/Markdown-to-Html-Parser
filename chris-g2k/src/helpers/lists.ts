// lists (unordered, ordered, task)
function lists(match: string) {
  const leadingSpaces: number[] = []; // spaces each before list item
  const nestDepths: [string, number][] = []; // array of [ul/ol, depth(leading space for the element)]

  let result = ''; // final html output

  match.split('\n').forEach((line, i) => {
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

export default lists;
