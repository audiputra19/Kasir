import KasirTypes from "./kasir.types";

const INITIAL_STATE = {
  transactions: [],
};

const KasirReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case KasirTypes.SAVE_TRANSACTION:
      const newTransaction = [...state.transactions, action.payload];
      return {
        ...state,
        transactions: newTransaction,
      }
    case KasirTypes.CLEAR_TRANSACTION:
      return {
        ...state,
        transactions: []
      }
    default:
      return state;
  }
}

export default KasirReducer;