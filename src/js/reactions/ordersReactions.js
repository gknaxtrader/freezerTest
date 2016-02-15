import AppState from '../state/AppState';

AppState.on('orders:update', () => {
	let state = AppState.get(),
		orders = state.ordersState.transact();
	if (!orders.length) return;
	for(let i = 0, z = orders.length; i < z; i++){
		let currOrder = orders[i];
		currOrder.set({
			open: Math.random().toFixed(3),
			close: Math.random().toFixed(3)
		});
	}
	state.ordersState.run();
});

AppState.on('orders:requestEarlyExit', (orderId) => {
	console.log('request EE:', orderId);
});