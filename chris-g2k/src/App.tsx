import { ClipboardEventHandler, EventHandler, MouseEventHandler, useRef, useState } from 'react';
import './App.css';
import RenderContent from './components/RenderContent';

function App() {
  const [text, setText] = useState<string | undefined>('');
  const [showMarkdown, setShowMarkdown] = useState<boolean>(true);

  const ref = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setText(ref.current?.innerText);
  };

  const handleShowMarkdown: MouseEventHandler<HTMLButtonElement> = (e) => {
    setShowMarkdown(!showMarkdown);
  };

  const pasteHandler: ClipboardEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(text));
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
        <div className="textArea" contentEditable="true" onPaste={pasteHandler} ref={ref}>
          # Markdown goes here
        </div>
        <RenderContent text={text as string} markdown={showMarkdown} />
      </div>
    </div>
  );
}

export default App;
