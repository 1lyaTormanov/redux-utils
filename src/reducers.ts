import {ActionType, HandlersT, ReducerT} from "./types";



export const createReducer = <S, A>(initialState: S, h? : HandlersT<S, A>) => {
    const handlers: HandlersT<S, A> = {...h}

    const handleReducer = (
        state = initialState,
        action: ActionType<A>
    ): ReducerT<S, A> | S => {

        if (handlers.hasOwnProperty(action.type)) {
            const reducer = handlers[action.type];

            return reducer(state, action);
        } else {
            return state;
        }
    };


    const createBranch = (type: string | string[], callback: ReducerT<S, ActionType<A>> ) => {
        const newHandlers: typeof handlers = {}
        const toArray = Array.isArray(type) ? [...type]: [type];

        toArray.forEach(i => {
            newHandlers[i] = callback;
        })

        return createReducer(initialState, Object.assign(handlers, newHandlers))
    }

    return Object.assign(handleReducer,{
        createBranch: createBranch
    })
}

const r = createReducer<number, number>(0)
    .createBranch(['KEK', 'LOL'], (state, action) => state * action.payload)
    .createBranch('MINUS', (state, action) => state - action.payload)
    .createBranch('PLUS', (state, action) => state - action.payload)

console.log(r(20, {type: 'KEK', payload: 10}))

