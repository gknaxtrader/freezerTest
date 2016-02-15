import DateDisplay from './datedisplay.jsx';

export default class FakeChart extends React.Component {

	static displayName = 'FakeChart';

	static propTypes = {
		chartTitle: React.PropTypes.string,
		historyTrade: React.PropTypes.object
	};

	static defaultProps = {
		chartTitle: '',
		historyTrade: null
	};

	shouldComponentUpdate(nextProps) {
		return (nextProps.historyTrade !== this.props.historyTrade);
	}

	render() {
		//console.log('render chart', this.props);
		if (!this.props) return null;
		let historyTrade = this.props.historyTrade;

		return (
			<div>
				<h3>{this.props.chartTitle}</h3>
				{historyTrade ?
					<div>
						<p>Trade ID: {historyTrade.tradeId}</p>

						<p>Open time: <DateDisplay data={historyTrade.openTime}/></p>

						<p>Close time: <DateDisplay data={historyTrade.closeTime}/></p>

						<p>Open price: {historyTrade.openPrice}</p>

						<p>Close price: {historyTrade.closePrice}</p>
					</div>
					:
					null}
			</div>
		);
	}
}
