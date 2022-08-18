function synthax(code: string): string {
  code = code
    .replace(/([`'"]).*?\1/g, '<span class="string" >$&</span>')
    .replace(/\/\/.*$/gm, '<span class="comment" >$&</span>')
    .replace(
      /\b(await|break|case|catch|class(?! *=)|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|let|new|null|return|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/g,
      '<span class="keyword" >$&</span>'
    )
    .replace(/\b(true|false|null|undefined|NaN|Infinity)\b/g, '<span class="value" >$&</span>')
    .replace(/\b\w+ *\(/g, '<span class="function" >$&</span>')
    .replace(/\. *\b\w+\b/g, '<span class="property" >$&</span>')
    .replace(/\b\d+(\.\d+)?\b/g, '<span class="number" >$&</span>')
    .replace(/\(|\)|\[|\]|\{|\}/g, '<span class="bracket" >$&</span>')
    .replace(
      /\+|-|\*|(?<!<)\/|%|&|\||\^|!|\?|(?<!class *)=|:/g,
      '<span class="operator" >$&</span>'
    )
    .replace(/\n/g, '<br>');
  return code;
}

// var tyt = [5, 3, 5, 5,53, 53, 'sdkf']

// if (tyt !== 4) {
// 	console.log('4')
// 	tyt && console.log('4')
// 	tyt?
// }

export default synthax;
