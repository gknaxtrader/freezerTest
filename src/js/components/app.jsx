import AppState from '../state/AppState';
import TradesTable from './tradestable.jsx';
import FakeChart from './fakeChart.jsx';

export default class App extends React.Component {

	static displayName = 'App';

	constructor() {
		super();
		this.state = AppState.get();
	}

	componentDidMount() {
		AppState.on('update', () => {
			//this.forceUpdate();
			this.setState(AppState.get());
		});
	}

	render() {
		if (this.state.status === 'loading') {
			return (<div>
				<p>Loading</p>
				<button className="btn" onClick={this.updateState}>
					Update
				</button>
			</div>);
		}

		return (
			<div>
				<TradesTable tableData={this.state.ordersState}/>
				<FakeChart {...this.state.chartState}/>
			</div>
		);
	}

	updateState = () => {
		AppState.trigger('app:loadComplete');
	}
}