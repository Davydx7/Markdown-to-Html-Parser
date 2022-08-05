function parseMd (text: string) {
	return text.replace(/(_._)/, '<P>.<p>' );
}

export default parseMd;