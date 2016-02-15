import AppState from '../state/AppState';
import './ordersReactions';
import './chartsReactions';

AppState.on('app:loadComplete', () => {
	AppState.get().set({
		status: 'ready'
	});
});