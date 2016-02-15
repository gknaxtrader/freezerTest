import Freezer from 'freezer-js';
import ordersState from './ordersState';
import chartState from './chartState';

let AppState = new Freezer({
	status: 'loading',
	ordersState,
	chartState
});

export default AppState;