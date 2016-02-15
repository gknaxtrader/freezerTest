import AppState from '../state/AppState';
import Griddle from 'griddle-react';
import DateDisplay from './datedisplay.jsx';
import TradeTableButtons from './tradetablebuttons.jsx';
import {INIT_CONFIG} from '../utils/initconfig';

const COLUMN_META_CLOSED_TRADES = [
	{columnName: 'open time', customComponent: DateDisplay},
	{columnName: 'close time', customComponent: DateDisplay},
	{columnName: 'profit/loss', customComponent: TradeTableButtons}
];

export default class TradesTable extends React.Component {

	static displayName = 'TradesTable';

	static propTypes = {
		tableData: React.PropTypes.array
	};

	constructor(props) {
		super(props);
		this.int = 0;
	}

	componentDidMount() {
		this.int = window.setInterval(()=> {
			AppState.trigger('orders:update');
		}, 1000);
	}

	componentWillUnmount() {
		window.clearInterval(this.int);
	}

	shouldComponentUpdate(nextProps) {
		return (nextProps.tableData !== this.props.tableData);
	}

	render() {
		// all open games profit/loss sum
		let thsopen = INIT_CONFIG.thsclose,
		//openTrades = this.props.tableData,
			rowMetadata = {
				'bodyCssClassName': function (rowData) {
					switch (true) {
						case (rowData['deals remaining'] === 1 && rowData.tradeSelected):
							return 'blinkRow yellowrow';
						case (rowData.tradeSelected):
							return 'yellowrow';
						case (rowData['deals remaining'] === 1 && rowData.time > 0):
							return 'blinkRow';
					}
				}
			};
		return (
			<div className="panel tablePanel">

				<div>
					<Griddle key="opentrades" results={this.props.tableData} columns={thsopen}
					         useGriddleStyles={false} resultsPerPage={10}
					         rowMetadata={rowMetadata} columnMetadata={COLUMN_META_CLOSED_TRADES}
					         initialSort="deals remaining" initialSortAscending={false}
					         tableClassName="openTradesTable" showPager={false}/>
				</div>
			</div>
		);
	}
}
