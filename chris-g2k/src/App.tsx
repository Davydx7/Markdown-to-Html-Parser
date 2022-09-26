import { MouseEventHandler, useRef, useState } from 'react';
import './App.scss';
import RenderContent from './components/RenderContent';

function App() {
  const [text, setText] = useState<string | undefined>('');
  const [showMarkdown, setShowMarkdown] = useState<boolean>(true);

  const ref = useRef<HTMLTextAreaElement>(null);

  // ctrl/cmd + s to save and parse text
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 's') {
      // Prevent the Save dialog to open
      e.preventDefault();

      setText(ref.current?.value);
    }
  });

  // parse text on button click
  const handleParse: MouseEventHandler<HTMLButtonElement> = (e) => {
    setText(ref.current?.value);
  };

  // toggle browser rendered vs raw html
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
          {/* initial text */}
          {`# Heading 1 ✨

Alt Heading 1
===

## Heading 2

Alt Heading 2
---

### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6 ✨

Regular paragraph
as multiine 🧶

horizontal rule

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

**Definition List**
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

**Link to [GOOGLE](https://www.google.com "link title") with title**

Direct link: www.google.com

**Email "mailto":** oludave0511@gmail.com

**Images**
![Ocean line](https://kids.kiddle.co/images/thumb/6/63/Nice-seafront.jpg/300px-Nice-seafront.jpg "image title")

**resize image**
![Blue Butterflies](/butterflies.png "image title")
![Blue Butterflies](/butterflies.png "image title width=50%")
![Blue Butterflies](/butterflies.png "image title width=50")
![Blue Butterflies](/butterflies.png "image title width=100% height=100")

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
var y = 'it works *like* /123';
const z = [\`arr\`, 4, {}, true]

y = y.replace(/\\*/, '');
y = y.replace(/\\/\\d+/, 'abc');

console.log(z.length); //4

function add (a, b) {
  return a + b;
}

add(8,7);  // '5it works'
\`\`\`
`}
        </textarea>
        <RenderContent text={text as string} markdown={showMarkdown} />
      </div>
    </div>
  );
}

export default App;
