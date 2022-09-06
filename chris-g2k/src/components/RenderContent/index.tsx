import { useRef } from 'react';
import DOMPurify from 'dompurify'; // mitigate against XSS attacks

import parseMd from '../../helpers/parseMd';

import './renderContent.scss';

type Props = {
  text: string;
  markdown?: boolean;
};

const RenderContent: React.FC<Props> = ({ text, markdown = true }) => {
  const ref = useRef<HTMLDivElement>(null);

  parseMd(text)
    .then((parsed) => DOMPurify.sanitize(parsed))
    .then((sanitized) => {
      if (ref.current) {
        if (markdown) {
          ref.current.innerHTML = sanitized;
        } else {
          ref.current.innerText = sanitized;
        }
      }
    });

  return <div className="output line-numbers" ref={ref} />;
};
export default RenderContent;
