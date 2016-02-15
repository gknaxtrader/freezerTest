import AppState from '../state/AppState';

AppState.on('chart:setHistoryMode', (historyTradeData) => {
	AppState.get().chartState.set({historyTrade: historyTradeData});
});