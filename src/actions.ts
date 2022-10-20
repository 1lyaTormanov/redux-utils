import {Action, ActionTypes, Creator, ReducerT, TypeToAction} from "./types";

export function createAsyncGroup<R, S, F, C>(group: string, prefix: string){

    const renderAction = (variant: ActionTypes) => {
        return `@${group}/${prefix}_'${variant}'`.toUpperCase()
    }
    const result: TypeToAction<R, S ,F, C>  = {
        REQUEST: {
            type: renderAction('REQUEST'),
            creator: (data: R)=> {
                return {
                    type: renderAction('REQUEST'),
                    payload: data
                }}
        },
        SUCCESS: {
            type: renderAction('SUCCESS'),
            creator: (data: S)=> {
                return {
                    type: renderAction('SUCCESS'),
                    payload: data
                }}
        },
        FAILURE: {
            type: renderAction('FAILURE'),
            creator: (data: F)=> {
                return {
                    type: renderAction('FAILURE'),
                    payload: data
                }}
        },
        CANCELED: {
            type: renderAction('CANCELED'),
            creator: (data: C)=> {
                return {
                    type: renderAction('CANCELED'),
                    payload: data
                }}
        }
    };

    return result
}
