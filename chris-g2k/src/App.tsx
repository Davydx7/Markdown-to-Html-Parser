import { MouseEventHandler, useRef, useState } from 'react'
import './App.css';
import RenderContent from './components/RenderContent';

function App() {
  const [text, setText] = useState<string>('');
  const ref = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    // if (ref.current) {
    //   setText(ref.current.innerHTML);
    // }
    console.log ('input', ref.current?.innerHTML)
  }

  return (
    <div className="App">
      <div className='textArea' contentEditable='true' ref = {ref} />
      <button className='button' onClick={handleClick}>Transform</button>
      <RenderContent text={text} />
    </div>
  )
}

export default App
