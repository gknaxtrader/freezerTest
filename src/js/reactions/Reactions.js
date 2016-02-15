import AppState from '../state/AppState';
import './ordersReactions';
import './chartReactions';

AppState.on('app:loadComplete', () => {
	AppState.get().set({
		status: 'ready'
	});
});