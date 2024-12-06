import { useRef } from 'react';

import parseMd from '../../helpers/parseMd';

import './renderContent.scss';

type Props = {
  text: string;
  markdown?: boolean;
};

const RenderContent: React.FC<Props> = ({ text, markdown = true }) => {
  const ref = useRef<HTMLDivElement>(null);

  parseMd(text).then((parsed) => {
    if (ref.current) {
      if (markdown) {
        ref.current.innerHTML = parsed;
      } else {
        ref.current.innerText = parsed;
      }
    }
  });

  return <div className="output line-numbers" ref={ref} />;
};
export default RenderContent;
