import { useEffect, useMemo, useRef } from "react";
import parseMd from "../../helpers/parseMd";
import DOMPurify from "dompurify";



import './renderContent.css';

type Props = {
	text: string;
	markdown?: boolean;
}

const RenderContent:React.FC<Props> = ({text, markdown = true}) => {
	const ref = useRef<HTMLDivElement>(null);

	const parsed = useMemo(() => DOMPurify.sanitize(parseMd(text)), [text]);

	useEffect(() => {
		if (ref.current) {
			if (markdown) {
				ref.current.innerHTML = parsed
			} else {
				ref.current.innerText = parsed
			}
		}

	},[text, markdown]);

	return (
		<div className="output" ref={ref} />
	)
}
export default RenderContent