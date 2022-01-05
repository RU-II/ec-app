import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

// import reducers
// import { ProductsReducers } from '../products/reducers';
import { UsersReducer } from '../users/reducers';

export default function createStore(history) {
  return reduxCreateStore( // reduxのcreateStoreメソッドの別名
    combineReducers({
      // reduxのstoreにrouterというstateを作る(history: pathの情報)
      router: connectRouter(history),
      // products: ProductsReducers,
      users: UsersReducer,
    }),
    applyMiddleware(
      // routerをmiddlewareとして使うと宣言
      routerMiddleware(history),
      thunk
    )
  )
}
