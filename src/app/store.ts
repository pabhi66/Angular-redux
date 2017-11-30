import { IAPPState } from './store';
import { CounterActions } from './actions';

export interface IAPPState {
    counter: number;
}

export const INITIAL_STATE: IAPPState = {
    counter: 0
};

export function rootReducer(state: IAPPState, action): IAPPState {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return {counter: state.counter + 1};
        case CounterActions.DECREMENT:
            return {counter: state.counter - 1};
        default:
            return state;
    }
}
