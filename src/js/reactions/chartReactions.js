import AppState from '../state/AppState';

AppState.on('chart:setHistoryMode', (historyTradeData) => {
	let state = AppState.get(),
		orders = state.ordersState.transact();
	for (let i = 0, z = orders.length; i < z; i++) {
		let currOrder = orders[i];
		if(currOrder.ticket === historyTradeData.tradeId) {
			currOrder.set({tradeSelected: true});
		} else {
			currOrder.set({tradeSelected: false});
		}
	}
	state.ordersState.run();
	state.chartState.set({historyTrade: historyTradeData});
});