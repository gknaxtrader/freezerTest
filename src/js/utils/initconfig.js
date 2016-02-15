export const INIT_CONFIG = {
	// trade table columns
	thsopen: ['ticket', 'bet amount', 'potential payout', 'roi', 'type', 'open', 'current', 'expiry', 'open time', 'deals remaining', 'profit/loss'],
	thsclose: ['ticket', 'bet amount', 'potential payout', 'type', 'open', 'close', 'expiry', 'open time', 'close time', 'EE', 'profit/loss'],
	defaultCurrency: {
		code: 'GBP',
		sign: '£'
	},
	MIN_BET: 5,
	MAX_BET: 1000,
	CALL_FLAG: 5,
	PUT_FLAG: 6,
	TIE_FLAG: 7,
	DOWN_LBL: 'player',
	UP_LBL: 'banker',
	TIE_LBL: 'tie',
	DOWN_ROI: 1,
	UP_ROI: 0.95,
	INIT_CHART_RES: 'Tick',
	INIT_CHART_TYPE: 'candlestick',
	INIT_CHART_MODE: 'pointer'
};

export const DRAWING_TOOLS_CONFIG = {
	LINE_COLORS: ['cyan', 'yellow', '#b9ff04', '#ff9e00', '#ff1cd7', '#ff2e6c'],
	LINE_STYLES: [
		'Solid',
		'ShortDash',
		'ShortDot',
		'Dot',
		'Dash',
		'LongDash',
		'DashDot',
		'LongDashDot'
	],
	DRAWING_TYPES: [
		{value: 'msr', label: 'Measure'},
		{value: 'hor-line', label: 'Horizontal'},
		{value: 'vert-line', label: 'Vertical'},
		{value: 'segment', label: 'Segment'},
		{value: 'beam', label: 'Beam'},
		{value: 'fibo', label: 'Fibonacci'}
	]
}