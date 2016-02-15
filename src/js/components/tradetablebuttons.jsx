import AppState from '../state/AppState';
import gimmeNum from '../utils/gimmenum';
import getTradeType from '../utils/gettradetype';

export default class TradeTableButtons extends React.Component {
	static displayName = 'TradeTableButtons';
	static propTypes = {
		data: React.PropTypes.string,
		rowData: React.PropTypes.object.isRequired
	};

	static defaultProps = {
		data: {},
		rowData: {}
	};

	render() {
		let eeClass = gimmeNum(this.props.data) > 0 ? 'fw1 up' : 'fw1 down',
			trendIconClass = 'trendicon ' + getTradeType(this.props.rowData.flags);
		if (!this.props.rowData['close time']) {
			// parent row is in the open trades table
			return (!!this.props.data ? <div className="tcb">
				<span className={eeClass}>{this.props.data}</span>

				<div className="smallbtn" onClick={this.requestEarlyExit}>exit</div>
				<span className={trendIconClass}></span>
			</div> : null);
		} else {
			// parent row is in the closed trades table
			return (<div className="tcb">
				<span className={eeClass}>{this.props.data}</span>
				<div className="smallbtn" onClick={this.requestEarlyExit}>exit</div>
				<div className="smallbtn vhb" onClick={this.setHistoryMode}>view</div>
				<span className={trendIconClass}></span>
			</div>);
		}
	}

	requestEarlyExit = () => {
		AppState.trigger('orders:requestEarlyExit', this.props.rowData.ticket);
	};

	setHistoryMode = () => {
		AppState.trigger('chart:setHistoryMode',
			{
				tradeId: this.props.rowData.ticket,
				openPrice: this.props.rowData.open,
				closePrice: this.props.rowData.close,
				openTime: this.props.rowData['open time'],
				closeTime: this.props.rowData['close time']
			});
	};
}
