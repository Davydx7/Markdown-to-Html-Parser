import parseMd from "../../helpers/parseMd";

type Props = {
	text: string;
	markdown?: boolean;
}

const RenderContent:React.FC<Props> = ({text, markdown = false}) => {
	const transformed= parseMd(text);
	return (
		<div>
			<p>
				{transformed}
			</p>
		</div>
	)
}
export default RenderContent