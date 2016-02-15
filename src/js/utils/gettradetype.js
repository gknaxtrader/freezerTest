import {INIT_CONFIG} from '../utils/initconfig';

let tradeTypeCache = {};

export default function getTradeType(tradeType) {
	if (!tradeType) return false;
	if (tradeTypeCache[tradeType]) return tradeTypeCache[tradeType];
	let tType;
	if (parseInt(tradeType)) {
		// flag to label
		switch (tradeType) {
			case INIT_CONFIG.CALL_FLAG:
				tType = INIT_CONFIG.UP_LBL;
				break;
			case INIT_CONFIG.PUT_FLAG:
				tType = INIT_CONFIG.DOWN_LBL;
				break;
			case INIT_CONFIG.TIE_FLAG:
				tType = INIT_CONFIG.TIE_LBL;
				break;
			default:
				tType = false;
		}
	} else {
		// label to flag
		switch (tradeType) {
			case INIT_CONFIG.UP_LBL:
				tType = INIT_CONFIG.CALL_FLAG;
				break;
			case INIT_CONFIG.DOWN_LBL:
				tType = INIT_CONFIG.PUT_FLAG;
				break;
			case INIT_CONFIG.TIE_LBL:
				tType = INIT_CONFIG.TIE_FLAG;
				break;
			default:
				tType = false;
		}
	}
	tradeTypeCache[tradeType] = tType;
	return tType;
}
