import { createStore, compose, applyMiddleware, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { rootReducer, RootState } from './reducers';
import { setLS } from '../utils/localStorageCart';

const middleware = [thunk];

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
);

store.subscribe(() => {
    setLS(store.getState().cartJocks.jockes);
  });

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export { store };