export declare type RequestT = 'REQUEST';
export declare type SuccessT = 'SUCCESS';
export declare type FailureT = 'FAILURE';
export declare type CanceledT = 'CANCELED';
export declare type ActionTypes = 'REQUEST' | 'SUCCESS' | 'FAILURE' | 'CANCELED';
export interface Creator<T> {
    type: string;
    payload: T;
}
export interface Action<T> {
    type: string;
    creator: (payload: T) => Creator<T>;
}
export declare type TypeToAction<R, S, F, C> = {
    REQUEST: Action<R>;
    SUCCESS: Action<S>;
    FAILURE: Action<F>;
    CANCELED: Action<C>;
};
export declare type ReducerT<StateT, ActionT> = (state: StateT, action: ActionT) => StateT;
