import { MouseEventHandler, useRef, useState } from 'react';
import './App.scss';
import initialText from './appUtils';
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
          {initialText}
        </textarea>
        <RenderContent text={text as string} markdown={showMarkdown} />
      </div>
    </div>
  );
}

export default App;
