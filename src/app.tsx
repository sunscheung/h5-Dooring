import { message } from 'antd';
import undoable, { StateWithHistory } from 'redux-undo';
import { Reducer, AnyAction } from 'redux';
/**
 * reducer: 为了把 action 和 state 串起来，开发一些函数，这就是 reducer。
 * Reducer 函数只是一个纯函数，它接收应用程序的当前状态以及发生的 action，然后返回修改后的新状态（或者有人称之为归并后的状态）。
 * reducer 只是一个接收 state 和 action，并返回新的 state 的函数。
 */
export const dva = {
  config: {
    onError(e: Error) {
      message.error(e.message, 3);
    },
    onReducer: (reducer: Reducer<any, AnyAction>) => {
      let undoReducer = undoable(reducer);
      return function(state: StateWithHistory<any>, action: AnyAction) {
        let newState = undoReducer(state, action);
        let router = newState.present.router ? newState.present.router : newState.present.routing;
        return { ...newState, router: router };
      };
    },
  },
};
