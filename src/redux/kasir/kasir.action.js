import KasirTypes from "./kasir.types";

export const saveTransactionData = (dataTransaction) => {
  return async (dispatch) => {
    try {
      dispatch({ type: KasirTypes.SAVE_TRANSACTION, payload: dataTransaction })
    } catch (error) {
      console.log(error);
    }
  }
}