import { useEffect, useRef } from "react";
import parseMd from "../../helpers/parseMd";
import DOMPurify from "dompurify";



import './renderContent.css';

type Props = {
	text: string;
	markdown?: boolean;
}

const RenderContent:React.FC<Props> = ({text, markdown = true}) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const parsed = DOMPurify.sanitize(parseMd(text));

		console.log('parsed\n',parsed)

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