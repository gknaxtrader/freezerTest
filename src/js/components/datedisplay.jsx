const TZ_OFFSET = new Date().getTimezoneOffset() * 60000;

const DateDisplay = ({data = 0}) => {
	let output = (data > 0) ? new Date(data + TZ_OFFSET).toLocaleString() : null;
	return <span>{output}</span>;
};

DateDisplay.propTypes = {
	data: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
};

export default DateDisplay;