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

**Tables! 🏓**
| First |Second | Third | Fourth |
|-|:----:|---|
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

\`\`\`javascript
This is a code block 🎨
formatted differently
\`\`\`
`}
        </textarea>
        <RenderContent text={text as string} markdown={showMarkdown} />
      </div>
    </div>
  );
}

export default App;
