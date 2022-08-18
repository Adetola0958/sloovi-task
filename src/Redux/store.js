import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./Reducers/rootReducer"
import {composeWithDevTools} from "redux-devtools-extension"
import {persistReducer} from "redux-persist"
import {createLogger} from "redux-logger"
import storage from "redux-persist/lib/storage"

const logger = createLogger()

const persistConfig = {
	key: 'root',
	storage,
	// whitelist: ['userAuth', 'adminAuth', 'vendorAuth', "cartItems", "deliveryAddress", "paymentMethod"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk]

const configureStore = () => {
	return createStore(
		persistedReducer,
		composeWithDevTools(applyMiddleware(...middleware, logger))
	)
}

export default configureStore