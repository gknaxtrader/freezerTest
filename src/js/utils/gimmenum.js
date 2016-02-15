export default function gimmeNum() {
	var val = arguments[0];
	if (typeof val !== 'string') {
		return 0;
	}
	return Number(val.replace(/[^0-9\.-]+/g, ''));
}
