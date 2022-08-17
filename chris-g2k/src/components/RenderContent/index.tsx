import { useEffect, useMemo, useRef } from 'react';
import DOMPurify from 'dompurify';
import parseMd from '../../helpers/parseMd';

import './renderContent.scss';

type Props = {
  text: string;
  markdown?: boolean;
};

const RenderContent: React.FC<Props> = ({ text, markdown = true }) => {
  const ref = useRef<HTMLDivElement>(null);

  const parsed = useMemo(() => DOMPurify.sanitize(parseMd(text)), [text]);

  // const parsed = useMemo(() => parseMd(text), [text]);

  useEffect(() => {
    if (ref.current) {
      if (markdown) {
        ref.current.innerHTML = parsed;
      } else {
        ref.current.innerText = parsed;
      }
    }
  }, [markdown, parsed]);

  return <div className="output" ref={ref} />;
};
export default RenderContent;
