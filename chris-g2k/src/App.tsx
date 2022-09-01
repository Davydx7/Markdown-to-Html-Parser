import { MouseEventHandler, useRef, useState } from 'react';
import './App.scss';
import RenderContent from './components/RenderContent';

function App() {
  const [text, setText] = useState<string | undefined>('');
  const [showMarkdown, setShowMarkdown] = useState<boolean>(true);

  const ref = useRef<HTMLTextAreaElement>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setText(ref.current?.value);
  };

  const handleShowMarkdown: MouseEventHandler<HTMLButtonElement> = (e) => {
    setShowMarkdown(!showMarkdown);
  };

  return (
    <div className="App">
      <div className="toggles">
        <button className="button" onClick={handleClick}>
          Parse
        </button>
        <button className="button" onClick={handleShowMarkdown}>
          Show {showMarkdown ? 'raw HTML' : 'parsed output'}
        </button>
      </div>
      <div className="boxes">
        <textarea className="textArea" ref={ref}>
          {`# Heading 1 ✨
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6 ✨

Regular paragraph
as multiine 🧶

**NESTED LISTS**

- **Unordered** list item 1
- list item 2
  - list item 3
  - list item 4
    - list item 5
- list item 6
- list item 7

**Ordered List**

1. **Ordered** list item 1, arbitrary start number support
  1. sublist item 1
  2. sublist item 2
    1. more nesting
2. list item 2
3. list item 3

**Link to [GOOGLE](https://www.google.com "link title") with title**

Direct link: www.google.com

**Email "mailto":** oludave0511@gmail.com

**Images**
![Ocean line](https://kids.kiddle.co/images/thumb/6/63/Nice-seafront.jpg/300px-Nice-seafront.jpg "image title")

**relative path imgae**
![Blue Butterflies](/butterflies.png "image title")

I need H~2~O (H~water~) not H^2^O (H^~~not water~~^) ==hightlight this==

**Tables!  supports alignment syntax🏓**
| First |Second | Third | Fourth |
|:-|:----:|---:|
|left aligned|center aligned|right aligned|no alignment|
|\`code!\` | and| see | how |
| **bold!!**| really| works | well |
| *italics*| intentionally | |skipped |
| ~~striked~~ | just |works||
| go | on | and | on |

This is **bold**, still works **bold*bold**

This is *italic*

This is ***bold and italic*** 🎃

This is ~~striked through~~

> 🎯A blockqoute here
Quite a site right?
>
> as much as would be enough

A \`Code\` 🧨 between texts

**Code block with syntax highlighting!**

\`\`\`javascript
// sample script
let x = 5;
var y = 'it works';
const z = [\`arr\`, 4, {}, true]

console.log(z.length); //4

function add (a, b) {
  return a + b;
}

add(x,y);  // '5it works'
\`\`\`
`}
        </textarea>
        <RenderContent text={text as string} markdown={showMarkdown} />
      </div>
    </div>
  );
}

export default App;
