import { MouseEventHandler, useRef, useState } from 'react';
import './App.scss';
import RenderContent from './components/RenderContent';

function App() {
  const [text, setText] = useState<string | undefined>('');
  const [showMarkdown, setShowMarkdown] = useState<boolean>(true);

  const ref = useRef<HTMLTextAreaElement>(null);

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 's') {
      // Prevent the Save dialog to open
      e.preventDefault();

      setText(ref.current?.value);
    }
  });

  const handleParse: MouseEventHandler<HTMLButtonElement> = (e) => {
    setText(ref.current?.value);
  };

  const handleShowMarkdown: MouseEventHandler<HTMLButtonElement> = (e) => {
    setShowMarkdown(!showMarkdown);
  };

  return (
    <div className="App">
      <div className="toggles">
        <button className="button" onClick={handleParse}>
          Parse (ctrl/cmd + S)
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

-------------------

**NESTED LISTS**

**Mixed UL and OL and CheckBox**
- list item
- [x] **Chekced** list item
- [ ] **Unchecked** list item
- list continues
  1. list item
  2. list item
  3. list item
    - [x] list item
    - [ ] list item
      - list item
      - list item
- [ ] list item
- list item

**Unordered**
-  list item
- list item
  - list item
  - list item
    - list item
- list item
- list item

**Ordered List**
1. **Ordered** list item 1, arbitrary start number support
  1. sublist item
  2. sublist item
    1. more nesting
2. list item
3. list item

**CheckBoxes**
- [x] list item
- [ ] list item
  - [ ] list item
  - [x] list item
    - [ ] list item
- [ ] list item
- [x] list item

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
>> can be nested
>> Quite a site ^right?^
>> - list item
>> - list item
>>   1. list item
>>     - [ ] sdfsdf
>>     - [x] sdfsdf
>> - list item
>> **Anything!!, even tables!!**
>> |see| this | work |
>> |:---|:--:|--:|
>> | first|row right |here|
>> |second|row|right here|
>>> as much as *would* be **enough**
>>> \`\`\`javascript
>>> let works = 'it Works!'
>>> console.log('awesome')
>>> \`\`\`

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
