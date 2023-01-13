import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import KasirReducer from "./kasir/kasir.reducer";

const persistConfig = {
  key: "keynyabebasapaaja",
  storage: storage,
};
const rootReducer = combineReducers({
  kasir: KasirReducer
});

export default persistReducer(persistConfig, rootReducer);
